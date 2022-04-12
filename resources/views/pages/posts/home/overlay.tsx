import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Store from './store'

const Overlay = () => {
  const projects = Store((state) => state.projects)
  const clicked = Store((state) => state.clicked)
  const contentInit = {
    title: '',
    tag: [''],
    tagline: '',
    slug: '',
  }
  const content = clicked === null ? contentInit : projects[clicked]

  return (
    <>
      <div className='flex flex-col items-center pt-24 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-20 xxl:pt-24'>
        <AnimatePresence>
          {clicked !== null && (
            <>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                className='text-sm uppercase md:text-lg lg:text-xl'
              >
                {content.tagline}
              </motion.h2>
              <motion.h1
                initial={{ scaleX: 0.8, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0.8, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className='text-4xl font-semibold md:text-6xl lg:text-7xl x;:text-8xl sm:text-5xl xxl:text-9xl'
              >
                {content.title}
              </motion.h1>
            </>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {clicked !== null && (
          <div className='pb-24 cursor-pointer pointer-events-auto xl:pb-12 xxl:pb-24'>
            <Link href={'/project/' + content.slug} passHref>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                className='overflow-hidden Btn-white-40'
              >
                <motion.p
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.5,
                  }}
                >
                  View project
                </motion.p>
              </motion.button>
            </Link>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {clicked !== null && (
          <div className='absolute flex flex-col items-end bottom-16 right-16'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='flex pr-1 mb-3 space-x-6'
            >
              <Arrow left />
              <Arrow />
            </motion.div>
            {/* <div className='h-1 w-8 my-2 bg-white' /> */}
            <div className='overflow-hidden'>
              <motion.h3
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ duration: 0.5 }}
                className='text-base uppercase tracking-[0.1rem] opacity-60'
              >
                App UI Design
              </motion.h3>
            </div>
            <div className='overflow-hidden'>
              <motion.h4
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='-mt-1 text-base uppercase tracking-[0.1rem] opacity-80'
              >
                KANDA Assistant
              </motion.h4>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

const Arrow = ({ left = false }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='9.195'
      height='16.39'
      viewBox='0 0 9.195 16.39'
      className={left && 'rotate-180'}
    >
      <path
        d='M-11983.253,5011.845l6.781,6.781-6.781,6.781'
        transform='translate(11984.667 -5010.431)'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}

export default Overlay
