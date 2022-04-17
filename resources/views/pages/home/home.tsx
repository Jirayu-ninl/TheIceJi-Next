import { motion } from 'framer-motion'
import Link from 'next/link'

const transition = (delay: number) => ({
  delay: delay,
})

export default function Home() {
  const Init: any = { visibility: 'hidden', y: 100 }
  const Animated: any = { visibility: 'visible', y: 0 }

  return (
    <>
      <div className='flex flex-col items-end pr-2 sm:pr-6 lg:pr-8'>
        <motion.h6
          initial={Init}
          animate={Animated}
          transition={transition(0)}
          className='-mb-1 text-base font-semibold text-primary-0 md:-mb-3 lg:text-2xl'
        >
          Greeting
        </motion.h6>
        <motion.h2
          initial={Init}
          animate={Animated}
          transition={transition(0.5)}
          className='text-5xl font-semibold sm:-mb-8 sm:text-6xl md:text-7xl lg:-mb-12 lg:text-8xl xl:-mb-24 xl:text-9xl xxl:text-10xl'
        >
          I AM
        </motion.h2>
        <AnimatedTitle />
        <div className='pointer-events-auto'>
          <Link href='/about' passHref>
            <motion.button
              initial={Init}
              animate={Animated}
              transition={transition(1.5)}
              className='Btn-white-40 Anim AnimOpacity-60 m-2'
            >
              About me
            </motion.button>
          </Link>
          <Link href='/about/skills' passHref>
            <motion.button
              initial={Init}
              animate={Animated}
              transition={transition(2)}
              className='Btn-white-40 Anim AnimOpacity-60 m-2'
            >
              Skill
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  )
}

const AnimatedTitle = () => {
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const letterAnim = {
    initial: { opacity: 0, y: 400 },
    animate: {
      opacity: 0.4,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }

  const TitleArr: string[] = ['T', 'h', 'e', 'I', 'c', 'e', 'J', 'i']

  return (
    <>
      <motion.div
        initial='initial'
        animate='animate'
        variants={banner}
        className='page-home-textOutline flex'
      >
        {[...TitleArr].map((letter, i) => (
          <motion.h1 variants={letterAnim} key={i}>
            {letter}
          </motion.h1>
        ))}
      </motion.div>
    </>
  )
}
