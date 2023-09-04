import React, { useState } from 'react';
import './App.css'; 
import ImageViewer from './Components/ImageViewer';
import ImageFetcher from './Components/ImageFetcher';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  

  const handleImageLoad = (url) => {
    setImageUrl(url);
  };

  return (
    <div className="app">
      <h1>Image Viewer App</h1>
      <div className="content">
        <ImageFetcher onImageLoad={handleImageLoad} />
        <ImageViewer imageUrl={imageUrl}  />
      </div>
    </div>
  );
}

export default App;
