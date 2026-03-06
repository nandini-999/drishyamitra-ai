from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

def ask_chatbot(query):

    query_lower = query.lower()

    # ----- PHOTO COMMANDS -----

    if "show photos" in query_lower or "show gallery" in query_lower:
        return {"action":"gallery"}

    if "latest photos" in query_lower:
        return {"action":"latest"}

    if "face photos" in query_lower:
        return {"action":"faces"}

    # ----- NORMAL AI CHAT -----

    try:

        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "user", "content": query}
            ]
        )

        return {"response": completion.choices[0].message.content}

    except Exception as e:
        print("Chatbot error:", e)
        return {"response":"AI service error"}