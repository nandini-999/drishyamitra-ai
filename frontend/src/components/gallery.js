import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import "./gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/gallery").then((res) => {
      setImages(res.data);
      setFiltered(res.data);
    });
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <SearchBar images={images} setFiltered={setFiltered} />
      <div className="gallery-grid">
        {filtered.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img
              src={`http://localhost:5000/uploads/${img}`}
              alt=""
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
