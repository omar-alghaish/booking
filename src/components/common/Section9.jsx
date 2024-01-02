import React, { useEffect } from "react";
import img from "../../assets/images/i20.png";
import i22 from "../../assets/images/i22.png";
import i23 from "../../assets/images/i23.png";
import i24 from "../../assets/images/i24.png";
import i25 from "../../assets/images/i25.png";
import i26 from "../../assets/images/i26.png";
import i27 from "../../assets/images/i27.png";

import ImageTicker from "./ImgTricker";
const Section9 = () => {
  const images = [i22, i23, i24, i25, i26, i27];
  useEffect(() => {
    const ticker = document.querySelector(".section9");
    const list = document.querySelector(".tricker");
    const clone = list.cloneNode(true);
    ticker.append(clone);
  }, []);
  return (
    <div className="section9">
      <div className="tricker">
        <div className="ticker__item">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section9;

// import React, { useEffect } from "react";
// import { Slide } from "react-awesome-reveal";
// import { useSelector } from "react-redux";

// function BannerTicker() {
//   // Use useSelector safely by providing a default value
//   const language = useSelector((state) => state?.language?.lang || "");

//   useEffect(() => {
//     const ticker = document.querySelector(".ticker");
//     const list = document.querySelector(".ticker__list");
//     const clone = list.cloneNode(true);
//     ticker.append(clone);
//   }, []);

//   // Check if the language object is defined before accessing 'lang'
//   const languageText =
//     language && language.lang ? language.lang : "Some default text";

//   return (
//     <div className="smallTicker">
//       <h2>
//         {languageText === "ar" ? "بعض من" : "Some Of Our"}{" "}
//         <span style={{ color: "var(--main-color-one)" }}>
//           {languageText === "ar" ? "عملائنا" : "Clients"}{" "}
//         </span>
//       </h2>
//       <div className="ticker">
//         <Slide direction="left" triggerOnce>
//           <div className="ticker__list">
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//           </div>
//           <div className="ticker__list">
//           <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//             <div className="ticker__item">
//               <img src={img} alt="" />
//             </div>
//           </div>
//         </Slide>
//       </div>
//     </div>
//   );
// }

// export default BannerTicker;
