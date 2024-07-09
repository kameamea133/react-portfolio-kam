import  logo  from '../assets/portfolio-logo.png'
import {FaLinkedin} from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6' >
        <div className='flex flex-shrink-0 items-center w-[80px]'>
            <img src={logo} alt="logo" className='mx-2 top-10'/>
        </div>
        <div className="m-8 flex justify-center items-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <BsTwitterX />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar