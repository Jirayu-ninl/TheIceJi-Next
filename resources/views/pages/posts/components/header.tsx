import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'

const Header = ({ Title, Img, Tags, lang = 'en', ColorBg = '#000000' }) => {
  const { scrollY } = useViewportScroll()
  const Y = useTransform(scrollY, [0, 2000], [0, 1000])
  const springY = useSpring(Y, { damping: 20, mass: 0.1, stiffness: 60 })

  const animList = {
    initial: { x: 100 },
    animate: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        delay: 0,
        staggerChildren: 0.2,
      },
    },
  }

  const animItem = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { type: 'tween' },
  }

  return (
    <div
      className='flex overflow-hidden relative justify-center items-end h-screen'
      style={{ backgroundColor: ColorBg }}
    >
      <div className='container z-10 px-4 w-screen xxl:w-[1440px]'>
        <motion.div
          variants={animList}
          initial='initial'
          animate='animate'
          className='uppercase'
        >
          {Tags.map((v: string, i: number) => (
            <motion.button
              className='mr-2 hover:text-black uppercase hover:bg-primary-0 Btn-white-40 Anim AnimTranslate-4'
              key={i}
              variants={animItem}
            >
              {v}
            </motion.button>
          ))}
        </motion.div>
        <motion.h1
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ fontFamily: lang === 'en' ? 'poppins' : 'athiti' }}
          className='mt-1 mb-6 text-6xl font-bold md:mt-0 md:text-7xl xxl:text-8xl'
        >
          {Title}
        </motion.h1>
      </div>
      <motion.div className='absolute w-screen h-screen' style={{ y: springY }}>
        <Image
          src={Img}
          alt={Title}
          layout='fill'
          objectFit='cover'
          quality={100}
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </motion.div>
      <div className='absolute w-screen h-80 bg-gradient-to-t from-background-1 to-background-1/0'></div>
    </div>
  )
}

export default Header
