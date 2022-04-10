import { motion } from 'framer-motion'
import Arrow from './iconArrow'

const Nav = ({ Page, setPage, animConf }) => {
  const PageHandler = (method) => {
    if (Page < 3 && Page > 0) {
      if (method == 'increase') {
        setPage(Page + 1)
      } else if (method == 'decrease') {
        setPage(Page - 1)
      }
    } else if (Page === 3 && method == 'decrease') {
      setPage(Page - 1)
    } else if (Page === 0 && method == 'increase') {
      setPage(Page + 1)
    }
  }

  const { parent, children } = animConf.stagger_xRight
  const transitionL = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <motion.div
      variants={parent(0.3)}
      initial='hidden'
      animate='show'
      className='fixed flex flex-col justify-center w-screen md:w-auto md:h-screen bottom-16 md:bottom-0 md:left-4 xxl:left-8'
    >
      <div className='flex flex-row items-center justify-center md:flex-col'>
        <motion.div
          variants={children}
          onClick={() => PageHandler('decrease')}
          className='flex items-center justify-center w-8 h-8 border-2 border-white rounded-full md:w-12 md:h-12 xxl:w-16 xxl:h-16 bg-white/20 backdrop-filter backdrop-blur-md Anim AnimOpacity-40'
        >
          <Arrow left />
        </motion.div>
        <motion.div
          variants={children}
          onClick={() => PageHandler('increase')}
          className='flex items-center justify-center w-8 h-8 ml-6 border-2 border-white rounded-full md:ml-0 md:w-12 md:h-12 xxl:w-16 xxl:h-16 md:mt-3 bg-white/20 backdrop-filter backdrop-blur-md Anim AnimOpacity-40'
        >
          <Arrow />
        </motion.div>
      </div>
      <motion.div
        variants={children}
        transition={{ delay: 1 }}
        className='flex items-center justify-center pt-4 md:pt-0 md:flex-col'
      >
        <div className='hidden h-16 bg-white md:block md:relative md:mx-auto md:my-12 xxl:my-16 md:rotate-0'>
          <motion.div
            initial={{ height: 16 }}
            exit={{ height: 16 }}
            animate={{ height: 16 * (Page + 1) }}
            transition={transitionL}
            className='absolute h-4 bg-white w-0.5'
          ></motion.div>
          <div className='absolute h-16 bg-white/20 w-0.5'></div>
        </div>
        <p className='md:rotate-90 md:pr-4'>0{Page + 1}</p>
        <p className='md:rotate-90 opacity-40'>/ 04</p>
      </motion.div>
    </motion.div>
  )
}

export default Nav
