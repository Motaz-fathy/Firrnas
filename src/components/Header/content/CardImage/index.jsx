import React, { useRef } from 'react';

const CardImage = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // Calculate the tilt degrees based on mouse position
    const tiltX = (offsetY / height) * 30; // Tilt along X axis
    const tiltY = (offsetX / width) * -30; // Tilt along Y axis

    // Apply the 3D effect
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-96 max-md:h-42 bg-gradient-to-t hover:scale-110 transform duration-300 cursor-pointer from-white/20 to-black/30 rounded-md border-gray-500 border-[1px] p-2 shadow-xl"
    >
      {/* Placeholder for the image */}
      <img
        src="/assets/images/cardimage.avif"
        alt="cardimage.avif"
        className="w-full h-full rounded-lg"
      />
    </div>
  );
};

export default CardImage;
