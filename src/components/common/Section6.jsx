import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { alarm, nextIcon, prevIcon, right, start } from "../../utils/icons";
import { categories, tourGuidesData, trendingData } from "../../utils/data";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Section6 = () => {
  return (
    <div className="section6">
      <div className="first-row">
        <div className="left">
          <h1>Tour Guides</h1>
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
            {tourGuidesData.map((guide) => (
              <SwiperSlide>
                <div className="tour-guide-item">
                  <div className="profile-img">
                    <img src={guide.img}></img>
                    <div className="slide-number">{guide.slide}</div>
                  </div>
                  <div className="info">
                    <div className="top">
                      <p className="title">Adventure Guru</p>
                      <div className="first-name">{guide.firstName}</div>
                      <div className="last-name">{guide.lastName}</div>
                    </div>
                    <div className="middle">
                      <div className="about">
                        <h3>About</h3>
                        <p>{guide.about}</p>
                      </div>
                      <div className="journey">
                        <h3>Journey</h3>
                        <p>{guide.journey}</p>
                      </div>
                    </div>
                    <div className="bottom">
                      {guide.links.map((link) => (
                        <Link>{link.name.toUpperCase()}</Link>
                      ))}
                    </div>
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

export default Section6;
