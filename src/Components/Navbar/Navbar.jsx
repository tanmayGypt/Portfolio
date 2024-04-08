import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="text-white flex gap-x-10 text-2xl justify-end mx-20 mt-10 opacity-80">
        <li
          draggable
          className="tracking-wide hover:text-red-500 hover:font-black hover:underline-offset-1 hover:underline transition-transform hover:scale-115 active:opacity-40 hover:cursor-pointer hover:opacity-100"
        >
          Home
        </li>
        <li
          draggable
          className="tracking-wide hover:text-red-500 hover:font-black hover:underline-offset-1 hover:underline transition-all hover:scale-115 active:opacity-40 hover:cursor-pointer"
        >
          Projects
        </li>
        <li
          draggable
          className="tracking-wide hover:text-red-500 hover:font-black hover:underline-offset-1 hover:underline transition-all hover:scale-115 active:opacity-40 hover:cursor-pointer"
        >
          {" "}
          Contact
        </li>
        <li
          draggable
          className="tracking-wide hover:text-red-500 hover:font-black hover:underline-offset-1 hover:underline transition-all hover:scale-115 active:opacity-40 hover:cursor-pointer"
        >
          About Me
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
