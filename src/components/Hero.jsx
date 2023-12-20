import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[150px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* the rounded circle above the line */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          {/* defining line at the top */}
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          {/* Main Text */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Arnav Arora!</span>
          </h1>
          {/* Sub Text */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in full-stack development, <br className='sm:block hidden'/> algorithm design and data science
          </p>
        </div>
      </div>

      {/* Computer Canvas Starts Here */}
      <ComputersCanvas />

    </section>
  )
}

export default Hero