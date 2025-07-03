import React, { useEffect, useState } from 'react';

const ImageModal = ({ image, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageInfo, setImageInfo] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleArrowKeys = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        // Future: Add navigation between images
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleArrowKeys);
    document.body.style.overflow = 'hidden';

    // Get image information
    const img = new window.Image();
    img.onload = () => {
      setImageInfo({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: (img.naturalWidth / img.naturalHeight).toFixed(2)
      });
    };
    img.src = image;

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'unset';
    };
  }, [image, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="image-modal-overlay" onClick={handleBackdropClick}>
      <div className="image-modal-content">
        <button className="image-modal-close" onClick={onClose} aria-label="Close image viewer">
          ×
        </button>
        
        <img 
          src={image} 
          alt="Full size view" 
          className={`image-modal-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={handleImageLoad}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transform: imageLoaded ? 'scale(1)' : 'scale(0.8)'
          }}
        />
        
        {imageInfo && (
          <div className="image-info">
            <div>📐 {imageInfo.width} × {imageInfo.height}px</div>
            <div>📊 Aspect: {imageInfo.aspectRatio}</div>
            <div>🔍 Click outside or press ESC to close</div>
          </div>
        )}
        
        {/* Creative floating elements */}
        <div className="floating-elements">
          <div className="floating-dot" style={{ animationDelay: '0s' }}></div>
          <div className="floating-dot" style={{ animationDelay: '1s' }}></div>
          <div className="floating-dot" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 