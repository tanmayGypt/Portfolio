import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
function Project_card2() {
  return (
    <div className="flex space-x-4 mx-16 border-l-white mt-8 opacity-90">
      <div className="flex flex-col gap-y-6 my-auto">
        <div className="text-white  tracking-wide text-3xl">MERN Project</div>
        <div className="text-white  tracking-wide text-purple-200 font-bold text-2xl">
          Plex Garden
        </div>
        <div className="text-white  tracking-wide bg-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          distinctio voluptate itaque nulla nisi nostrum sunt sequi nihil ipsam
          exercitationem optio facere veritatis minima veniam rerum provident,
          tenetur illum, corporis neque, eius illo quasi libero. Expedita
          deleniti non numquam sunt officia dicta eligendi, provident, voluptate
          ratione voluptatibus magni tenetur eius!
        </div>
        <div className="text-white  tracking-wide flex flex-col gap-y-2">
          <div className="tracking-wide text-white opacity-80 flex  gap-x-2">
            <div className="border-2 bg-gray-700 opacity-90 tracking-wide w-min rounded p-1 border-gray-700">
              React
            </div>
            <div className="border-2 bg-gray-700 opacity-90 tracking-wide w-min rounded p-1 border-gray-700">
              Node.Js
            </div>
            <div className="border-2 bg-gray-700 opacity-90 tracking-wide w-min rounded p-1 border-gray-700">
              React.Js
            </div>
          </div>
          <div>
            <div className="mt-2 flex gap-x-2 opacity-90">
              <div to="#" className="tracking-wide opacity-90">
                Github
              </div>
              <div className="my-auto">
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="rounded w-2/5"
        src="https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg"
        alt=""
      />
    </div>
  );
}

export default Project_card2;
