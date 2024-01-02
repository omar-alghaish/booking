import React from "react";
import { addIcon, earthIcon, longArrow } from "../../utils/icons";
import { footerLinks, socialLinks } from "../../utils/data";
import { Link } from "react-router-dom";
import img from "../../assets/images/i21.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="line1">
        <div className="left">
          <div className="add">
            {addIcon} <p>QUICK LINKS</p>
          </div>
          <p>Explore more categories</p>
        </div>
        <div className="right">
          <p>0123-456-324-54 | hello@entrada.com</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="line2">
        <div className="left">
          <p>Get in touch</p>
          <h2>Adventures Calling</h2>
          <h2>You Guys!</h2>
        </div>
        <div className="right">
          <div className="column1">{earthIcon}</div>
          <div className="column2">
            <p>Our Offices</p>
            <h5>Nepal, USA, India</h5>
            <div className="arrow"> {longArrow}</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="main">
        <div className="left">
          {footerLinks.map((list)=>(
            <div className="list-container">
                <h2>{list.title}</h2>
                {list.links.map((link)=>(
                  <p>{link}</p>
                ))}
            </div>
          
          ))}
        </div>
        <div className="right">
          <h5>Get In Touch</h5>
          <div className="link">Let’s Talk {longArrow}</div>
          <div className="input">
            <input type="email" name="" id="" placeholder="Enter your email"/>
            <button>Send</button>
        </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">Privacy Policy</div>

        <div className="right">{socialLinks.map((link)=>(
          <Link>{link.name}</Link>
        ))}</div>
      </div>
      <div className="payment">
        <p>2016-2021 © Emprise</p>
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Footer;
