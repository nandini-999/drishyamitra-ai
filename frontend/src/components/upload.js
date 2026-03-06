import axios from "axios";
import { useState } from "react";
import "./upload.css";

function Upload() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) {
      alert("Select image");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    await axios.post("http://localhost:5000/upload", formData);

    alert("Photo Uploaded");
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload Photo</h2>
      <div className="file-input-wrapper">
        <input
          type="file"
          className="file-input"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label className="file-input-label">
          {file ? file.name : "Choose a file"}
        </label>
      </div>
      <button className="upload-button" onClick={upload}>
        Upload Photo
      </button>
    </div>
  );
}

export default Upload;
