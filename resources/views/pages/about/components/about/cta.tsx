import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA({ animConf }) {
  const { parent, children } = animConf.stagger_yUp

  return (
    <motion.div
      variants={parent(0.2)}
      initial='hidden'
      animate='show'
      className='flex flex-col items-center justify-center w-full h-full'
    >
      <motion.h3
        variants={children}
        className='text-base font-semibold uppercase lg:text-3xl xxl:text-4xl text-primary-0'
      >
        Anything else?
      </motion.h3>
      <motion.div
        variants={children}
        className='flex flex-col items-center justify-center'
      >
        <Link href='about/skills' passHref>
          <a className='text-5xl font-bold uppercase text-outline lg:text-8xl xxl:text-10xl Anim-2 AnimOpacity-40 AnimScale-sm'>
            My skills?
          </a>
        </Link>
        <Link href='/project' passHref>
          <a className='text-5xl font-bold uppercase text-outline lg:text-8xl xxl:text-10xl Anim-2 AnimOpacity-40 AnimScale-sm'>
            projects
          </a>
        </Link>
      </motion.div>
    </motion.div>
  )
}
