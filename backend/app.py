import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI

from chatbot.prompts import build_system_prompt
from chatbot.tts import generate_tts

# Load environment variables
load_dotenv()

app = Flask(__name__)
# Enable CORS for the frontend origin
frontend_origin = os.getenv("FRONTEND_ORIGIN", "http://localhost:3000")
CORS(app, resources={r"/api/*": {"origins": frontend_origin}})

# Initialize OpenAI client
api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key) if api_key else None
model_name = os.getenv("OPENAI_MODEL", "gpt-4o-mini")

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok", "message": "Kulfi Sakhi AI Backend is running."})

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    if not data:
        return jsonify({"error": "Invalid request"}), 400

    user_message = data.get("message", "")
    language = data.get("language", "auto")
    history = data.get("history", [])
    enable_tts = data.get("enable_tts", True)

    if not client:
        # Fallback if no API key
        fallback_msg = (
            "Main abhi thodi busy hoon, please WhatsApp par contact karein." 
            if language == "hi" 
            else "Sorry, I'm currently unavailable. Please contact us on WhatsApp."
        )
        return jsonify({
            "reply": fallback_msg,
            "language": language,
            "intent": "general",
            "audio_base64": None,
            "whatsapp_url": None
        })

    try:
        # Build messages for OpenAI
        messages = [
            {"role": "system", "content": build_system_prompt(language)}
        ]
        
        # Append history
        for msg in history:
            role = "assistant" if msg.get("role") == "assistant" else "user"
            messages.append({"role": role, "content": msg.get("content", "")})
            
        # Append current user message
        messages.append({"role": "user", "content": user_message})

        response = client.chat.completions.create(
            model=model_name,
            messages=messages,
            temperature=0.7,
            max_tokens=250,
        )

        reply_text = response.choices[0].message.content.strip()

        # Simple intent detection based on the response content (this can be improved later)
        lower_reply = reply_text.lower()
        intent = "general"
        whatsapp_url = None
        
        if "wa.me" in lower_reply or "whatsapp" in lower_reply:
            whatsapp_url = "https://wa.me/919167196923?text=Hi%20Kulfi%20Lounge!%20I%27d%20like%20to%20make%20an%20inquiry."
            if "party" in lower_reply or "catering" in lower_reply:
                intent = "catering"
                whatsapp_url = "https://wa.me/919167196923?text=Hi%20Kulfi%20Lounge!%20I%20have%20a%20party/catering%20inquiry."

        audio_base64 = None
        if enable_tts and os.getenv("ENABLE_TTS", "true").lower() == "true":
            audio_base64 = generate_tts(reply_text, language)

        # Detect response language if "auto" was used
        detected_lang = "hi" if "hai" in lower_reply or "main" in lower_reply or "aap" in lower_reply else "en"

        return jsonify({
            "reply": reply_text,
            "language": detected_lang if language == "auto" else language,
            "intent": intent,
            "audio_base64": audio_base64,
            "whatsapp_url": whatsapp_url
        })

    except Exception as e:
        print(f"Error in chat endpoint: {e}")
        error_msg = (
            "Sorry, I'm having a little trouble right now. Please try again or contact us on WhatsApp."
        )
        return jsonify({
            "reply": error_msg,
            "language": language,
            "intent": "general",
            "audio_base64": None,
            "whatsapp_url": None
        }), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
