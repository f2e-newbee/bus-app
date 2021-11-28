import React from "react";

export const MobileHeader = ({ title, children }) => {
  return (
    <div
      className="py-4 px-4 pb-8"
      style={{
        backgroundImage: ` linear-gradient(180deg, #151F56 0%, rgba(21, 31, 86, 0.8) 100%)`,
      }}
    >
      <h1 className="text-white font-semibold text-lg">WhereIsMyBus</h1>
      {title && (
        <h2 className="text-center text-white font-semibold my-5">{title}</h2>
      )}
      {children}
      {/* <div className="">{children}</div> */}
    </div>
  );
};
