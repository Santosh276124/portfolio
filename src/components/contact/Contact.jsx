import React, {useRef} from 'react'
import './Contact.css'
import { FaCommentDots, FaEnvelope, FaHeadset, FaPaperPlane, FaUser } from 'react-icons/fa'
import contact_image from '../../assets/image/contact1.png'

import emailjs from '@emailjs/browser';


function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ial4rrw', 'template_e3jnvcg', form.current, '_DYUtVF_6RA9K59SR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id='Contact'>
        <h2 className='heading'>
            <FaHeadset className='fa'/> Get in <span>Touch</span>
        </h2>

        <div className="form-container">
            <div className="form-content">
                <div className="image-box">
                    <img src={contact_image} alt="" />
                </div>

                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">

                        <div className="field">
                            <input type="text" name="user_name" placeholder='Name' required/>
                            <FaUser className='fa'/>
                        </div>

                        <div className="field">
                            <input type="text" name="user_email" placeholder='Email' required/>
                            <FaEnvelope className='fa'/>
                        </div>
                        
                        <div className="message">
                            <textarea type="text" name="message" placeholder='Message' required/>
                            <FaCommentDots className='fa'/>
                        </div>

                    </div>

                    <div className="button-area">
                        <button type='submit'>
                            <span>Submit</span>  <FaPaperPlane className='fa'/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
