import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./style.css";
import { ReactComponent as Logo } from "./../../images/LOGO.svg";
import { ReactComponent as Cad} from "./../../images/cad.svg";

import ImageCaoursel from "./components/ImageCarousel/ImageCarousel";
import VerticalTextCarousel from "./components/VerticalTextCarousel/VerticalTextCarousel";
import BottomArrow from "./components/BottomArrow/BottomArrow";

const Main = () => {

  const logoRef = useRef(null);
  const cadRef = useRef(null);
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <motion.div
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      {/* HEADER */}
      <div className={'top'}>
        <Logo className="logo" ref={logoRef} />
        <div className="text">
          granitos <br /> y marmoles
        </div>
      </div>

      {/* IMAGE CAROUSEL SECTION */}
      <div className="section">
        <ImageCaoursel className="carousel" />
        <VerticalTextCarousel/>
        <BottomArrow />
      </div>


      <div className="section" ref={sectionRef}>
        <div className="text">
          llevamos desde 19XX  haciendo <br /> tus proyectos <br /> realidad
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
