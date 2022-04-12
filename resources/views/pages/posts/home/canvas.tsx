import { useRef } from 'react'
import { motion } from 'framer-motion'
import useStore from './store'
import Image from 'next/image'

export const App = () => {
  const setClicked = useStore((state) => state.setClicked)
  const projects = useStore((state) => state.projects)

  const constraintsRef = useRef(null)

  return (
    <motion.div ref={constraintsRef} className='w-screen h-screen'>
      <motion.div
        drag='x'
        dragConstraints={constraintsRef}
        className='flex justify-center items-center space-x-4 w-full h-full'
      >
        {projects.map((v, i) => (
          <Item project={v} key={i} />
        ))}
      </motion.div>
    </motion.div>
  )
}

const Item = ({ project }) => {
  return (
    <div className='overflow-hidden relative w-[110px] h-[400px]'>
      <Image
        className='pointer-events-none'
        src={project.coverImage.url}
        alt={project.title}
        layout='fill'
        objectFit='cover'
      />
    </div>
  )
}
