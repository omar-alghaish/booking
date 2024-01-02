import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { alarm, nextIcon, prevIcon, right, start } from "../../utils/icons";
import { categories, trendingData } from "../../utils/data";
import { CiHeart } from "react-icons/ci";
import Card1 from "./Card1";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="first-row">
        <div className="left">
          <h1>Trending 2021</h1>
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
            {trendingData.map((trend) => (
              <SwiperSlide>
                <Card1 data={trend} />
                {/* <div className="trending-item">
                  <img src={trend.img} alt="" />
                  <div className="number">{trend.number}</div>
                  <div className="name">
                    <div className="left">
                      <h3>{trend.name}</h3>
                      <p>{trend.desc}</p>
                    </div>
                    <div className="right">
                      <CiHeart />
                    </div>
                  </div>
                  <div className="price">
                    <p>from</p>
                    <div className="center">
                      <h2>$895.00</h2>
                      <div className="right">
                        <div className="stars-container">
                          {start}
                          {start}
                          {start}
                          {start}
                          {start}
                        </div>
                        <p>4.7 (108)</p>
                      </div>
                    </div>
                    <p>price varies</p>
                  </div>
                  <div className="bottom">
                    <div className="text-icon">{alarm } <p>7 days</p></div>
                    <div className="text-icon2"><div className="text-icon">{right } <p>Free Concellation</p></div><div className="text-icon">{right} New on Entrada</div></div>

                  </div>
                </div> */}
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

export default Section3;
