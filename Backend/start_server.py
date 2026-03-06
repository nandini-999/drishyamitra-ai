from flask import Flask, request, jsonify
from flask_cors import CORS
import os

from face_service import recognize_face
from chatbot_service import ask_chatbot
from database import save_photo
from flask import send_from_directory

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


@app.route("/")
def home():
    return {"message": "Drishyamitra backend running"}


@app.route("/upload", methods=["POST"])
def upload():

    file = request.files["image"]

    path = os.path.join(UPLOAD_FOLDER, file.filename)

    file.save(path)

    # detect faces
    faces = recognize_face(path)

    # save to database
    save_photo(path)

    return jsonify({
        "message": "photo uploaded",
        "faces": str(faces)
    })


@app.route("/gallery")
def gallery():

    images = os.listdir(UPLOAD_FOLDER)

    return jsonify(images)

@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)
@app.route("/chat", methods=["POST"])
def chat():

    query = request.json.get("query")

    result = ask_chatbot(query)

    return jsonify(result)
print("API KEY:", os.getenv("GROQ_API_KEY"))
if __name__ == "__main__":
    app.run(debug=True, port=5000)