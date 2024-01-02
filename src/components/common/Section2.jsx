import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { nextIcon, prevIcon } from "../../utils/icons";
import { categories } from "../../utils/data";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="first-row">
        <div className="left">
          <h1>Select Category</h1>
          <p>Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
        </div>
        <div className="right"></div>
        <div className="swiper-container catagory-swiper">
          <Swiper
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            slidesPerView={"auto"}
            spaceBetween={10}
            modules={[Navigation]}
          >
            {categories.map((catagory) => (
              <SwiperSlide>
                <div className="catagory-item">
                  <div className="number">{catagory.Number}</div>
                  <div className="content">
                    {catagory.icon}
                    <h3>{catagory.name}</h3>
                    <p>{catagory.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="icons-container">
            
          <div className="custom-prev">{prevIcon}</div>
          <div className="custom-next">{nextIcon}</div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Section2;
