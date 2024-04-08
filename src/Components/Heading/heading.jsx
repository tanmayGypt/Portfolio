import { useRef } from "react";
import { useInView } from "framer-motion";
import "./styles.css";
import Heading2 from "./Heading2";
import { FaLinkedin } from "react-icons/fa";
import Icons from "../Icons.jsx/Icons";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "translateY(0)" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition:
            "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          display: "inline-block", // Ensuring span takes up space even when invisible
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Heading() {
  return (
    <div className="mt-56 text-left text-white flex flex-col gap-y-6">
      <Section>
        <h1
          draggable
          className="text-6xl hover:scale-110 transition-all hover:underline transition-all"
        >
          Tanmay Gupta
        </h1>
      </Section>

      <Section>
        <Heading2 />
      </Section>
    </div>
  );
}
