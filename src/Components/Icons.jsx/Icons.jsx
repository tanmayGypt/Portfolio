import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Heading from "../Heading/heading";
import { SiLeetcode } from "react-icons/si";
// import Animation from "../Animation/Animation";
export default function Icons() {
  return (
    <div className="mx-36 flex gap-y-4">
      <div className="w-2/3 flex gap-y-4 flex-col">
        <Heading />

        <div className="flex gap-x-5 mt-5" draggable>
          <FaLinkedin className="w-10 h-10 text-white hover:scale-110 transition-all" />
          <FaGithub className="w-10 h-10 text-white hover:scale-110 transition-all" />
          <SiLeetcode className="w-10 h-10 text-white hover:scale-110 transition-all" />
        </div>
        <button
          draggable
          className="bg-red-500 tracking-wide hover:bg-red-700 hover:scale-90 text-white text-lg font-bold py-2 px-4 rounded w-36 h-12 mt-6 opacity-90 scale-10 hover:scale-110 transition-all active:opacity-50"
        >
          Resume
        </button>
      </div>
    </div>
  );
}
