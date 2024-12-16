import logo from "../assets/vikie.logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CONTACT } from "../constants/index.js";
import {motion} from "framer-motion";


const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
    <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
className="my-10 text-center text-4xl">Get in Touch</motion.h2>
    <div className="mb-8 mt-10">
      <motion.div
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1}}
      className="flex items-center justify-center">
        <img src={logo} width={150} className="my-10" />
      </motion.div>
      <div className="text-center tracking-tighter">
        <motion.p
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 1 }}
         className="my-4">{CONTACT.phoneNo}</motion.p>
        <motion.p
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration: 1 }}
         className="my-4">{CONTACT.email}</motion.p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href="https://www.linkedin.com/in/vignesh-m-216975276/"><FaLinkedin  /></a> 
       <a href="https://github.com/vikie16"><FaGithub /></a>
       <a href="https://github.com/vikie16"><FaSquareXTwitter /></a>
       <a href="https://github.com/vikie16"><FaInstagram /></a>
      </div>
     
      
  
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
      &copy;vikie. All rights reserved.</p>
      
    </div>
    </div>
    
  )
}

export default Footer
