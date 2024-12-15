
import React, { useEffect, useRef } from "react";
import "./style.css";

const imagePaths = [
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img31.jpg",
    "/images/img37.jpg",
  ];

const ImageCaoursel = (props) => {

  const imagesRef = useRef(null);
  let scrollTimeout = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (imagesRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = imagesRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScrollLeft) {
          imagesRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          imagesRef.current.scrollTo({ left: scrollLeft + clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    return (
      <div className={props.className}>
        <div className="images" ref={imagesRef}>
          {imagePaths.map((path, index) => (
            <img key={index} src={path} alt={`Image ${index + 1}`} className="image" />
          ))}
        </div>
      </div>
    )

}

export default ImageCaoursel