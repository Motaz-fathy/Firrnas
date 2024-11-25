import React, { useState, useEffect } from "react";

const IconsAnimation = () => {
  const [scrolled, setScrolled] = useState(false);

  const icons = [
    { src: "/assets/images/icon1.avif", alt: "Icon 1", transXStart: -50, transXEnd: 30 },
    { src: "/assets/images/icon2.avif", alt: "Icon 2", transXStart: 50, transXEnd: -40 },
    { src: "/assets/images/icon3.avif", alt: "Icon 3", transXStart: -50, transXEnd: 30 },
    { src: "/assets/images/icon4.avif", alt: "Icon 4", transXStart: 50, transXEnd: -40 },
  ];

  // Scroll event listener to update state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      {icons.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.alt}
          width={50}
          className={`transition-transform transform duration-700 ease-in-out ${
            scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } hover:scale-110 rotate-45 border-[1px] border-gray-600 rounded-lg bg-gradient-to-t my-8 from-white/30 to-black/50`}
          style={{
            transform: scrolled
              ? `translateY(0px) translateX(${item.transXEnd}px)`
              : `translateY(40px) translateX(${item.transXStart}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default IconsAnimation;
