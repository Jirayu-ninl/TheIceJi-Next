import Image from 'next/image'
import { motion } from 'framer-motion'
import ImgHeader from 'public/page/about/Header@2x.png'
import Header from './components/header'

export default function Hero() {
  return (
    <div className='relative flex items-center w-full h-full'>
      <motion.div
        initial={{ visibility: 'hidden', y: 50, opacity: 0 }}
        animate={{ visibility: 'visible', y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className='absolute flex items-start justify-center w-3/5 -mb-16 md:-mb-0 right-16 md:right-32 xxl:right-6 xxl:justify-end md:items-center xxl:w-full h-2/5 xxl:h-full'
      >
        <Image src={ImgHeader} width={1160} height={712} alt='IceJI Photo' />
      </motion.div>
      <Header title='ABOUT' subTitle='Me?'>
        <p className='text-xs font-light md:text-xl xxl:text-2xl'>
          &emsp;&emsp;&emsp;Expertise was instilled in me at a young age. I'm
          unable to quit learning new things and expanding my skills. Front-end,
          WebGL, and animation are my areas of expertise. ThreeJS, GSAP, and
          Framer Motion are the most common tools I utilize.
        </p>
      </Header>
    </div>
  )
}
