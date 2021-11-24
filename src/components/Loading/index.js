import React from "react";

export const Loading = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col  text-white items-center justify-center z-50"
      style={{
        backgroundImage: ` linear-gradient(360deg, rgba(5, 11, 41, 0.9) 0%, #151F56 48.01%, #151F56 99.99%)`,
      }}
    >
      <h2 className="font-semibold text-5xl mb-1">WhereIsMyBus</h2>
      <h4 className="text-xl">Never miss the bus again.</h4>
    </div>
  );
};
