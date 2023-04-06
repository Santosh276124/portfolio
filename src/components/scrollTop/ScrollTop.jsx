import React, { useEffect, useState } from 'react'
import './ScrollTop.css'
import { FaAngleUp } from 'react-icons/fa'

function ScrollTop() {

    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
      window.onscroll = () => {
        setIsActive(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
    }, [])

    const bottomToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    

  return (
    <button onClick={bottomToTop} className={`scroll-top ${ isActive ? "active":""} `} > <FaAngleUp className='fa'/> </button>
  )
}

export default ScrollTop
