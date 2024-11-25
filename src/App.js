import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

import Pointers from "./shared/Pointers";
import Loader from "./components/Loader/Loader";
const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position when mouse moves
  const handleMouseMove = e => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative w-full flex flex-col items-center overflow-hidden  "
      onMouseMove={handleMouseMove} // Attach mouse move listener
    >
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map((route, index) =>
              <Route key={index} path={route.path} element={route.element} />
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* Pass cursor position to Pointers */}
      <Pointers cursorPosition={cursorPosition} />
    </div>
  );
};

export default App;
