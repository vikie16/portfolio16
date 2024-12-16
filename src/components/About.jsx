
import AboutPic from '../assets/ProfilePic.jpg'
import { ABOUT_TEXT } from '../constants';
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span> </h1>
        <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
        <img className='w-3/4 h-3/4 rounded-2xl' src={AboutPic} alt='ProfilePic' /></div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}

         className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
                <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
               
                  </div>
                  <a href="/Resume.pdf"
                target='_blank'
                rel="noopener noreferrer"
                download
                className='bg-white rounded-full p-4 text-sm
                text-stone-800 mb-10'
                >Download Resume</a>
        </motion.div>
         </div>
    </div>
  );
}

export default About