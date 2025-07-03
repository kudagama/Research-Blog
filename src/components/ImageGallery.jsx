// src/components/ImageGallery.jsx
import React, { useEffect, useState } from 'react';
import ImageModal from './ImageModal';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Add staggered animation for gallery images
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 100);
        }
      });
    }, observerOptions);

    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
      observer.observe(image);
    });

    return () => observer.disconnect();
  }, [images]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="image-gallery">
        {images.length === 0 ? (
          <div className="gallery-placeholder">
            <div className="gallery-placeholder-animation">
              <span role="img" aria-label="hourglass">⏳</span>
            </div>
            <div className="gallery-placeholder-text">
              Research in progress.<br />Solution images upload soon.
            </div>
          </div>
        ) : (
          images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`gallery-${idx}`}
              className="gallery-image scroll-reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => handleImageClick(img)}
            />
          ))
        )}
      </div>
      
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default ImageGallery;