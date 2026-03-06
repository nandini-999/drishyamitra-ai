from deepface import DeepFace
import os
import shutil

FACES_DIR = "faces"

if not os.path.exists(FACES_DIR):
    os.makedirs(FACES_DIR)


def recognize_face(image_path):

    try:

        faces = DeepFace.extract_faces(
            img_path=image_path,
            detector_backend="retinaface",
            enforce_detection=False
        )

        for i,face in enumerate(faces):

            person_folder = os.path.join(FACES_DIR,"Unknown")

            if not os.path.exists(person_folder):
                os.makedirs(person_folder)

            new_path = os.path.join(
                person_folder,
                os.path.basename(image_path)
            )

            shutil.copy(image_path,new_path)

        return len(faces)

    except Exception as e:

        print("Face detection error:",e)

        return 0