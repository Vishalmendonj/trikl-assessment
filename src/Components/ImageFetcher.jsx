import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageFetcher = ({ onImageLoad }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/random?client_id=VF87EBLtj3qTVt2Y0fi56ns1GNtOYXHJWknn7KJ_EKw'
        );
        onImageLoad(response.data.urls.regular);
        setLoading(false);
      } catch (error) {
        setError('Error fetching image. Please try again later.');
        setLoading(false);
        console.error('Error fetching image:', error);
      }
    }

    fetchImage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null;
};

export default ImageFetcher;
