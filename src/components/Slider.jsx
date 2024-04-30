import { useEffect, useRef, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


import "./Slider.css";

export const Slider = ({data}) => {
  
  const [slide, setSlide] = useState(0);
  
  const timeout = useRef(null);

  const nextSlide = () => {
    if (timeout.slide) {
      clearTimeout(timeout.slide);
    }
    setSlide(slide === 7 - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    if (timeout.slide) {
      clearTimeout(timeout.slide);
    }
    setSlide(slide === 0 ? 7 - 1 : slide - 1);
  };

  useEffect(() => {
    const nextSlide = () => {
      setSlide((slide) => (slide === - 1 ? 0 : slide +1 ));
    }
    
    timeout.slide = setTimeout(nextSlide, 4000);

    return function () {
if (timeout.slide) {
  clearTimeout(timeout.slide);
}
    };
  }, [slide, data]);

  // const nextSlide = () => {
  //   setSlide(slide === 3 - 1 ? 0 : slide + 1);
  // };

  // const prevSlide = () => {
  //   setSlide(slide === 0 ? 3 - 1 : slide - 1);
  // };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {data.slides.map((item, idx) => {
      return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
    })}
    <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
    <span className="indicators">
      {data.slides.map((_, idx) => {
        return <button key={idx} onClick={null} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
      })}
    </span>
    </div>
  );
};