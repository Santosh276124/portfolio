import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import hero from "../../assets/image/hero.png";

import Typed from "typed.js";




function Hero() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Development ", "Web Designing ", "Programming "], 
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "!",
      autoInsertCss: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="Home">
      <div className="particles-js"></div>

      <div className="content">
        <h2>
          Hi There, <br /> I'm Santosh
          <span> Chauhan</span>
        </h2>
        <div className="typing">

        <p>
          i am into <span className="typing-text" ref={el} ></span>
        </p>
        </div>
        <button className="btn hero-btn">About</button>

        <div className="socials">
          <ul
            className="social-icons"
            style={{ listStyle: "none", paddingLeft: "0", marginBottom: "0" }}
          >
            <li>
              <a
                href="https://www.linkedin.com/in/santosh-chauhan-743b65246/"
                target="_blank"
                className="icon linkedin"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Santosh276124"
                target="_blank"
                className="icon github"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              
              <a
                href="https://www.instagram.com/ig_santosh0021/"
                className="icon instagram"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a className="icon telegram" aria-label="Telegram" href="https://t.me/SNT_santosh" target="_blank"> <FaTelegram/> </a>
            </li>
            <li><a className=" icon whatsapp" aria-label="Whatsapp" href="https://wa.me/917052275659" target="_blank">
              <FaWhatsapp/>
            </a>
            </li>

          </ul>
        </div>
      </div>

      <div className="images">
        
        <img src={hero} className="tilt" alt="" />
      </div>
    </section>
  );
}

export default Hero;
