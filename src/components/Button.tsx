import React from "react";

const Button = ({ children }: any) => {
  return (
    <button className="btn text-2xl px-6 py-2 outline text-blue-custom hover:text-morado-custom transition-colors duration-300">
      {children}
    </button>
  );
};

export default Button;
