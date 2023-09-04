import React from 'react';
import Draggable from "react-draggable";
const ImageViewer = ({ imageUrl, text }) => {
  return (
    <div className="image-viewer">
      <div className="image-container">
        <img src={imageUrl} alt="Image" />
        <Draggable>

        <div className="text-overlay-container">
        <input
            type="text"
            placeholder="Enter text"
            className="text-overlay"
            
            onChange={(e) => setText(e.target.value)}
        />
        </div>
        </Draggable>
      </div>
    </div>
  );
};

export default ImageViewer;
