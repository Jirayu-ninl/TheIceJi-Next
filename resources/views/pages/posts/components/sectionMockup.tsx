import Image from 'next/image'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion'

function SectionMockup({ content }) {
  const { scrollY } = useViewportScroll()
  const X = useTransform(scrollY, [2000, 2800], [0, -820])
  const springX = useSpring(X, { damping: 20, mass: 0.1, stiffness: 60 })
  return (
    <motion.div className='w-full'>
      <motion.div
        style={{x: springX}}
        className='inline-flex overflow-visible space-x-6'
      >
        {content.map((v: any, i: number) => (
          <div className='relative w-[140px] sm:w-[180px] h-[300px] sm:h-[380px] xxl:w-[300px] xxl:h-[600px]' key={i}>
            <Image
              className='pointer-events-none'
              src={v.url}
              alt={'Gallery_' + i}
              //   width={v.width}
              //   height={v.height}
              layout='fill'
              objectFit='scale-down'
              placeholder='blur'
              blurDataURL={
                'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
              }
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default SectionMockup