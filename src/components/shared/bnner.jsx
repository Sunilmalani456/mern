import React from "react";

const Banner = ({ name, title, childStyles, parentStyles }) => (
  <div
    className={`relative w-full flex flex-col items-center z-0 justify-around overflow-hidden bg-gradient-to-r from-sky-500 to-blue-500 ${parentStyles}`}
  >
    <p
      className={`font-bold text-4xl text-white sm:text-5xl font font-poppins leadinfg-70 ${childStyles}`}
    >
      {title}
    </p>
    <p
      className={`font-bold text-white text-center text-4xl sm:text-5xl font font-poppins leadinfg-70 ${childStyles}`}
    >
      {name}
    </p>
    <div className="absolute w-32 h-32 sm:w-32 sm:h-32 rounded-full bg-neutral-100/50 -top-9 -left-16 -z-5" />
    <div className="absolute w-56 h-56 sm:w-56 sm:h-56 rounded-full bg-neutral-100/50 -bottom-24 -right-14 -z-5" />
  </div>
);

export default Banner;
