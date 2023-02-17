import React, { useState } from "react";
import "./App.css";
import images from "./Images";

function App() {
  const [selectedImage, setSelectedImage] = useState(images[0].url);

  const chooseImage = (e) => {
    const image = e.target.src;
    setSelectedImage(image);
  };

  console.log(selectedImage);

  return (
    <div className="App">
      <div className="container">
        <div className="topContainer">
          <img src={selectedImage} alt="selectedImage" />
        </div>
        <div className="bottomContainer">
          {images.map((image) => (
            <img
              key={image.id}
              onClick={chooseImage}
              src={image.url}
              alt="foodImage"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
