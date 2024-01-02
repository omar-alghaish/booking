import React, { useEffect, useRef } from 'react';

const ImageTicker = ({ images }) => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const tickerWidth = tickerRef.current.clientWidth;
    let position = 0;

    const moveTicker = () => {
      position -= 1;

      if (position <= -tickerWidth) {
        position = 0;
        tickerRef.current.style.transition = 'none';
        tickerRef.current.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(() => {
          tickerRef.current.style.transition = 'transform 0.5s ease-in-out';
          tickerRef.current.style.transform = `translateX(${position}px)`;
        });
      } else {
        tickerRef.current.style.transform = `translateX(${position}px)`;
      }

      requestAnimationFrame(moveTicker);
    };

    moveTicker();

    return () => {
      cancelAnimationFrame(moveTicker);
    };
  }, []);

  return (
    <div className="image-ticker-wrapper">
      <div className="image-ticker" ref={tickerRef}>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageTicker;

