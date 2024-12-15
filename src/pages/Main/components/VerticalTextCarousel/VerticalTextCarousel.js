import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

const VerticalTextCarousel = (props) => {

    const words = ["hacer", "crear", "diseñar", "planear"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, [words.length]);

    return (
        <div className={"text-carousel " + props.className} >
            lo que sabemos {" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                className="highlight"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1, duration: 0.15 }}
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
    );
};

export default VerticalTextCarousel;