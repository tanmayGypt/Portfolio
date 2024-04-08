import { TypeAnimation } from "react-type-animation";
export default function Heading2() {
  return (
    <>
      <div draggable className="hover:transition-all hover:scale-110">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Aspiring to be a Software Developer and Full Stack Engineer",
            900,
            "Aspiring to be Software Developer I Have Done Web Development",
            900,
            "Aspiring to be Software Developer I Have Listed My Projects",
            900,
            "Aspiring to be Software Developer I Have Listed My Tech Stack",
            900,
            "Aspiring to be Software Developer I Have Listed My Profile Links",
            900,
            "Aspiring to be Software Developer I Have Listed My Achievements",
            900,
          ]}
          style={{
            fontSize: "25px",
            letterSpacing: 1,
            opacity: 0.8,
          }}
          speed={20}
          repeat={Infinity}
        />
      </div>
    </>
  );
}
