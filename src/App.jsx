import Particles from "./Components/Background/particles";
import { motion } from "framer-motion";
import { useScroll, useSpring } from "framer-motion";
import Heading from "./Components/Heading/heading";
import "./App.css";
import Icons from "./Components/Icons.jsx/Icons";
import Navbar from "./Components/Navbar/Navbar";
import Project_Section from "./Components/Project Section/Project Section";
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Navbar />
      <Particles />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Icons />
      <Project_Section />
    </>
  );
}
