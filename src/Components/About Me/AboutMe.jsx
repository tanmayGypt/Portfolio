import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongoose } from "react-icons/si";

import { SiDjango } from "react-icons/si";

function AboutMe() {
  return (
    <div className="mb-12 mx-14 bg-black">
      <h1 className="text-white text-3xl my-12 flex flex-col gap-y-2 mb-12">
        <h1 className=" tracking-wide text-5xl text-center  transition-all view">
          About Me
        </h1>
        <hr className="w-24 border-red-500 mx-auto" />
      </h1>
      <div className="flex gap-x-8 flex-wrap justify-center">
        <img
          className="w-1/3 rounded-md mx-1"
          src="src\Components\About Me\20211210_222138.jpg"
          alt=""
        />

        <div className=" w-1/2 flex flex-col gap-y-4 flex-wrap">
          <div className="text-white tracking-wide tracking-widest">
            I am a Computer Science student at BPIT (IPU) with a passion for
            technology and a drive to learn new things. Currently, I am a Tech
            Team Member at NSCC-BPIT and IEEE-BPIT, where I work on exciting
            projects and collaborate with other like-minded individuals.
          </div>
          <div className="text-white tracking-wide text-2xl">
            Tech Stack <hr className="w-16 mt-1 border-red-500 border-y-2 " />
          </div>
          <div className="text-white tracking-wide flex flex-col gap-y-2">
            <div className="tracking-wide">Lanuages</div>
            <div>
              <div className="text-white  tracking-wide flex flex-col gap-y-2">
                <div className="tracking-wide text-white opacity-80 flex  gap-x-2 flex-wrap gap-y-2">
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    C/C++
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide w-min rounded p-1 border-gray-700">
                    JavaScript
                  </div>
                  <div className="border-2 bg-gray-700 flex gap-x-2 opacity-90 tracking-wide w-min rounded p-1 border-gray-700">
                    <div className="my-auto">
                      <FaPython />
                    </div>
                    Python
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="tracking-wide">Technologies</div>

              <div className="text-white  tracking-wide flex flex-col">
                <div className="tracking-wide text-white opacity-80 flex  gap-x-2 flex-wrap gap-y-2">
                  <div className="border-2 bg-gray-700 opacity-90 gap-x-2 my-auto tracking-wide w-min rounded p-1 border-gray-700 flex ">
                    <div className="my-auto">
                      <FaHtml5 />
                    </div>{" "}
                    HTML
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 gap-x-2 my-auto tracking-wide w-min rounded p-1 border-gray-700 flex ">
                    <div className="my-auto">
                      <FaCss3Alt />
                    </div>{" "}
                    CSS
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide w-min rounded  border-gray-700 flex gap-x-2 my-auto p-1">
                    <div className="my-auto ">
                      <FaReact />
                    </div>{" "}
                    React.js
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    Next.Js
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    JsonWebTokens
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    Auth0
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    Quill
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    Tailwind
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-1 my-auto w-min rounded p-1 border-gray-700">
                    <div className="my-auto">
                      <SiDjango />
                    </div>{" "}
                    Django
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    ShadCN
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    VSCode
                  </div>
                </div>
              </div>
            </div>

            <div className="tracking-wide">Developer Tools</div>

            <div>
              <div className="text-white  tracking-wide flex flex-col gap-y-2">
                <div className="tracking-wide text-white opacity-80 flex  gap-x-2 flex-wrap gap-y-2">
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    Node.js
                  </div>

                  <div className="border-2 bg-gray-700 opacity-90 flex gap-x-2 my-auto tracking-wide w-min rounded p-1 border-gray-700">
                    Express.Js
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide w-min rounded  border-gray-700 flex gap-x-2 my-auto p-1">
                    <div className="my-auto ">
                      <SiMongoose />
                    </div>{" "}
                    Mongoose
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    Prisma
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    GraphQL
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    Postman
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    <div></div> Redis
                  </div>
                  <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                    Socket.io
                  </div>
                </div>

                <div className="tracking-wide">Database</div>
                <div className="text-white  tracking-wide flex flex-col gap-y-2">
                  <div className="tracking-wide text-white opacity-80 flex  gap-x-2">
                    <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                      MySQL
                    </div>

                    <div className="border-2 bg-gray-700 opacity-90 flex gap-x-2 my-auto tracking-wide w-min rounded p-1 border-gray-700">
                      MongoDB
                    </div>
                    <div className="border-2 bg-gray-700 opacity-90 tracking-wide flex gap-x-2 my-auto w-min rounded p-1 border-gray-700">
                      PostgreSQL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
