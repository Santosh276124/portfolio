import React from 'react'
import './Footer.css'
import { FaChevronCircleRight, FaEnvelope, FaGithub, FaHeart, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhone, FaTelegram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <section className='footer'>

      <div className="box-container">

        <div className="box">
            <h3>Santosh' Portfolio</h3>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/></p>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href=""><FaChevronCircleRight className='fa'/> home</a>
          <a href=""><FaChevronCircleRight className='fa'/> about</a>
          <a href=""><FaChevronCircleRight className='fa'/> skills</a>
          <a href=""><FaChevronCircleRight className='fa'/> education</a>
          <a href=""><FaChevronCircleRight className='fa'/> work</a>
        </div>
        <div className="box">
          <h3>Contact info</h3>
          <p> <FaPhone className='fa'/> +91 7052275659 </p>
          <p> <FaEnvelope/> csantosh350@gmail.com </p>
          <p> <FaMapMarkedAlt/> UP, India-276124 </p>

          <div className="share">
              <a
                href="https://www.linkedin.com/in/santosh-chauhan-743b65246/"
                target="_blank"
                className="icon linkedin"
              >
                <FaLinkedin className='fas'/>
              </a>

              <a
                href="https://github.com/Santosh276124"
                target="_blank"
                className="icon github"
              >
                <FaGithub className='fas'/>
              </a>

              <a
                href="https://www.instagram.com/ig_santosh0021/"
                className="icon instagram"
                target="_blank"
              >
                <FaInstagram className='fas'/>
              </a>

              <a className="icon telegram" aria-label="Telegram" href="https://t.me/SNT_santosh" target="_blank"> 
              <FaTelegram/> </a>

              <a className=" icon whatsapp" aria-label="Whatsapp" href="https://wa.me/917052275659" target="_blank">
              <FaWhatsapp/>
            </a>


          </div>

        </div>

      </div>

      <h1 className='credit'>
        Designed with <FaHeart className='fa pulse'/> by <a href=""> Santosh Chauhan</a>
       </h1>
        

    </section>
  )
}

export default Footer
