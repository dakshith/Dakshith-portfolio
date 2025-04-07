import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Dakshith Thior Narayana | Senior Full Stack Developer";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
