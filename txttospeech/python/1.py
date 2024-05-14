from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=api_key)

response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="Hola esto es un test de prueba para convertirlo en audio y luego a texto.",
)

if os.path.exists("output.mp3"):
    os.remove("output.mp3")
    response.stream_to_file("output.mp3")
else:
    response.stream_to_file("output.mp3")