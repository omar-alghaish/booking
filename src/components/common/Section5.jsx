import React from "react";
import i1 from "../../assets/images/i1.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoShareSocialSharp } from "react-icons/io5";
import { bestSeller } from "../../utils/data";

const Section5 = ({style, title} ) => {
  return (
    <div className="section5" style={style}>
      <div className="header">
        <div className="left">
          <h1> {title || "Best Seller"}</h1>{" "}
          <p>Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
        </div>
        <div className="right">
          <button>Check All</button>
        </div>
      </div>

      <div className="items-container">
      <Swiper
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            slidesPerView={"auto"}
            spaceBetween={10}
            // modules={[Navigation]}
          >

        {bestSeller.map((item) => (
                        <SwiperSlide style={{width:"max-content"}}>

          <div className="item">
            <div className="top">
              <div className="background">
                <img src={item} alt="" />
              </div>
              <div className="number">30%</div>
              <div className="content">
                <p>10 Days | 09 Night</p>
                <div className="price">
                  {" "}
                  <h1>$895.50</h1>{" "}
                  <div className="buttons">
                    <div className="shareIcon">
                      <IoShareSocialSharp />
                    </div>
                    <button>Explore</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <h2>Train Tour Skyline</h2>
              <p>
                Check Out Daily Deals and Promotion on Hotels. Easy & Fast
                Booking
              </p>
            </div>
          </div>              </SwiperSlide>


        ))}

</Swiper>

      </div>
    </div>
  );
};

export default Section5;
