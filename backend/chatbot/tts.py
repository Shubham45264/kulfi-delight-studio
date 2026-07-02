import os
import base64

def generate_tts(text: str, language: str) -> str:
    # If TTS is disabled or credentials missing, return None gracefully
    if not os.getenv("GOOGLE_APPLICATION_CREDENTIALS"):
        return None
        
    try:
        from google.cloud import texttospeech
        client = texttospeech.TextToSpeechClient()
        
        synthesis_input = texttospeech.SynthesisInput(text=text)
        
        if language == "hi":
            language_code = "hi-IN"
            voice_name = "hi-IN-Wavenet-A"
        else:
            # Default to English (India) female voice
            language_code = "en-IN"
            voice_name = "en-IN-Wavenet-A"
            
        voice = texttospeech.VoiceSelectionParams(
            language_code=language_code,
            name=voice_name
        )
        
        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3
        )
        
        response = client.synthesize_speech(
            input=synthesis_input, voice=voice, audio_config=audio_config
        )
        
        # Convert bytes to base64 string
        audio_base64 = base64.b64encode(response.audio_content).decode("utf-8")
        return audio_base64
        
    except Exception as e:
        print(f"TTS Error: {e}")
        return None
