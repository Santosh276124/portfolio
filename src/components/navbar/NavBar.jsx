
import { useState } from 'react';
import './navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';



function NavBar() {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header >

        <Link to='Home' smooth={true} duration={50} >
        <li style={{listStyle:'none'}} className='logo'>logo</li>
        </Link>

      

        <button  onClick={() => setIsExpanded(!isExpanded)} className="menu ">
          {
              isExpanded ? <FaTimes/> : <FaBars />
          }
            
            
        </button>


        <nav className={ isExpanded ? 'navbar nav-expanded' : ' navbar nav-hide'}>
            <ul>
              <Link  to='Home' smooth={true} duration={50}>
                <li> Home </li>
              </Link>
              <Link  to='About' smooth={true} duration={50}>
              <li> About </li>
              </Link>
              <Link  to='Skills' smooth={true} duration={50}>
              <li> Skills </li>
              </Link>
              <Link  to='Education' smooth={true} duration={50} >
              <li> Education </li>
              </Link>
              <Link  to='Work' smooth={true} duration={50} >
              <li> Work </li>
              </Link>
              <Link  to='Contact' duration={50} smooth={true} >
                <li> Contact </li>
              </Link>
              
                
                
              
                
            </ul>
        </nav>
    </header>
  )
}

export default NavBar
