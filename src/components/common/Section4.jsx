import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { nextIcon, prevIcon } from "../../utils/icons";
import { topDestData } from "../../utils/data";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Section4 = () => {
  const [box, setBox] = useState(null);
  const [i, setI] = useState(null);
  const [j, setJ] = useState(null);

  const arrayImags = topDestData.map((item) => item.data.map((obj) => obj.img));

  const lightboxRef = useRef(null);

  const handleOpen = (i, j) => {
    setBox(arrayImags[i - 1][j]);
    setI(i - 1);
    setJ(j);
  };

  if (box) {
    const contaianer = document.querySelector("body");
    contaianer.style.height = "100vh";
    contaianer.style.overflow = "hidden";
  } else {
    const contaianer = document.querySelector("body");
    contaianer.style.height = "max-content";
    contaianer.style.overflow = "scroll";
  }

  const handleNext = () => {
    if (j + 1 < arrayImags[i].length) {
      setJ(j + 1);
      setBox(arrayImags[i][j + 1]);
    } else if (i + 1 < arrayImags.length) {
      setI(i + 1);
      setJ(0);
      setBox(arrayImags[i + 1][0]);
    }
  };

  const handlePrev = () => {
    if (j - 1 >= 0) {
      setJ(j - 1);
      setBox(arrayImags[i][j - 1]);
    } else if (i - 1 >= 0) {
      setI(i - 1);
      setJ(arrayImags[i - 1].length - 1);
      setBox(arrayImags[i - 1][arrayImags[i - 1].length - 1]);
    }
  };

  const handleClose = () => {
    setBox(null);
    setI(null);
    setJ(null);
  };

  return (
    <div className="section4">
      <div className="first-row">
        <div className="left">
          <h1>Top Destinations</h1>
          <p>Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
        </div>
        <div className="right"></div>
      </div>

      <div className="swiper-container catagory-swiper">
        <Swiper
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          spaceBetween={32}
          modules={[Navigation]}
        >
          {topDestData.map((item) => (
            <SwiperSlide key={item.slide}>
              <div className="topDest-items">
                <div className="squar squar1">
                  <div className="first-column">
                    <div
                      className="row first-row item"
                      onClick={() => handleOpen(item.slide, 0)}
                    >
                      <img src={item.data[0].img} alt={item.data[0].name} />
                      <div className="number">{item.data[0].number}</div>
                      <div className="name">
                        <h2>{item.data[0].name}</h2>
                        <p>{item.data[0].desc}</p>
                      </div>
                    </div>
                    <div
                      className="row second-row item"
                      onClick={() => handleOpen(item.slide, 1)}
                    >
                      <img src={item.data[1].img} alt={item.data[1].name} />
                      <div className="number">{item.data[1].number}</div>
                      <div className="name">
                        <h2>{item.data[1].name}</h2>
                        <p>{item.data[1].desc}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="second-column item"
                    onClick={() => handleOpen(item.slide, 2)}
                  >
                    <img src={item.data[2].img} alt={item.data[2].name} />
                    <div className="number">{item.data[2].number}</div>
                    <div className="name">
                      <h2>{item.data[2].name}</h2>
                      <p>{item.data[2].desc}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="squar squar2"
                  onClick={() => handleOpen(item.slide, 3)}
                >
                  <div className="row first-row item">
                    <img src={item.data[3].img} alt={item.data[3].name} />
                    <div className="number">{item.data[3].number}</div>
                    <div className="name">
                      <h2>{item.data[3].name}</h2>
                      <p>{item.data[3].desc}</p>
                    </div>
                  </div>
                  <div
                    className="row second-row"
                    onClick={() => handleOpen(item.slide, 4)}
                  >
                    <div className="first-column item">
                      <img src={item.data[4].img} alt={item.data[4].name} />
                      <div className="number">{item.data[4].number}</div>
                      <div className="name">
                        <h2>{item.data[4].name}</h2>
                        <p>{item.data[4].desc}</p>
                      </div>
                    </div>
                    <div
                      className="second-column item"
                      onClick={() => handleOpen(item.slide, 5)}
                    >
                      <img src={item.data[5].img} alt={item.data[5].name} />
                      <div className="number">{item.data[5].number}</div>
                      <div className="name">
                        <h2>{item.data[5].name}</h2>
                        <p>{item.data[5].desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {box && (
          <div className="lightbox-overlay" role="presentation">
            <div className="light-box" ref={lightboxRef}>
              <div className="background" onClick={handleClose}></div>

              <button className="lightbox-prev" onClick={handlePrev}>
                <GrPrevious />
              </button>
              <img className="" src={box} alt={`lightbox-${i + 1}-${j + 1}`} />

              <button className="lightbox-next" onClick={handleNext}>
                <GrNext />
              </button>
            </div>
          </div>
        )}
        <div className="icons-container">
          <div className="custom-prev">{prevIcon}</div>
          <div className="custom-next">{nextIcon}</div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
