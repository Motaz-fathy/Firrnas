import React from "react";
import BackGround from "./BackGound/BackGround";
import Content from "./content/Content";

const Header = () => {
  return (
    <header className="relative block w-full h-auto md:h-[700px] max-sm:min-h-screen bg-transparent">
      {/* Content Layer */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <Content />
      </div>

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <BackGround />
      </div>
    </header>
  );
};

export default Header;
