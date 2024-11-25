import React, { useEffect, useState } from "react";

const BackGround = () => {
  const [currentSquare, setCurrentSquare] = useState(null); // Current square position
  const [phase, setPhase] = useState(0); // 0 = top edge, 1 = right edge

  useEffect(() => {
    const interval = setInterval(() => {
      if (phase < 1) {
        setPhase(phase + 1); // Move to the next edge
      } else {
        setPhase(0); // Reset phase and select a new square
        setCurrentSquare({
          x: Math.floor(Math.random() * 29), // Random vertical line index
          y: Math.floor(Math.random() * 19), // Random horizontal line index
        });
      }
    }, 800); // Change every second

    // Initialize with a random square
    if (!currentSquare) {
      setCurrentSquare({
        x: Math.floor(Math.random() * 29),
        y: Math.floor(Math.random() * 19),
      });
    }

    return () => clearInterval(interval);
  }, [phase, currentSquare]);

  return (
    <div className="absolute inset-0 w-full h-[120vh] overflow-hidden ">
      {/* Vertical Lines */}
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={`v-${index}`}
          className="absolute top-0 h-full border-l border-gray-700 shadow-lg opacity-20 "
          style={{ left: `${index * 50}px` }}
        ></div>
      ))}
      {/* Horizontal Lines */}
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={`h-${index}`}
          className="absolute left-0 w-full border-t border-gray-700 shadow-lg opacity-20 "
          style={{ top: `${index * 50}px` }}
        ></div>
      ))}

      {/* Thunder Animation */}
      {currentSquare && (
        <>
          {/* Top Edge Thunder */}
          {phase === 0 && (
            <div
              className="absolute bg-indigo-500 thunder-animation"
              style={{
                left: `${currentSquare.x * 50}px`,
                top: `${currentSquare.y * 50}px`,
                height: "2px",
                width: "70px",
                animation: "travel-horizontal 1.5s linear",
              }}
            ></div>
          )}
          {/* Right Edge Thunder */}
          {phase === 1 && (
            <div
              className="absolute bg-indigo-500 thunder-animation"
              style={{
                left: `${(currentSquare.x + 1) * 50}px`,
                top: `${currentSquare.y * 50}px`,
                width: "2px",
                height: "70px",
                animation: "travel-vertical 1.5s linear",
              }}
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default BackGround;
