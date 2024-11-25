const Pointers = ({ cursorPosition }) => {
  return (
    <div
      className="fixed rounded-full pointer-events-none blur-[100px]" // Fixed positioning
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        width: "100px", // Add fixed size
        height: "100px",
        boxShadow: "10px 10px 60px #7d07ad",
        backgroundColor: "#7d07ad", // For testing visibility
      }}
    />
  );
};

export default Pointers;
