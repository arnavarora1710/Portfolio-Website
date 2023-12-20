import React from "react";

import { BallCanvas } from "./canvas";
import {motion} from 'framer-motion';
import {fadeIn, textVariant} from '../utils/motions.js'
import {styles} from '../styles';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Let's Get Techy!</p>
        <h5 className={`${styles.sectionHeadText} text-center`}>Software Knowledge</h5>
      </motion.div>
      <div className='mt-10 flex flex-row flex-wrap justify-center gap-9'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")