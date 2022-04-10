import { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from './components/header'

export default function FreeTime({ data, animConf }) {
  useLayoutEffect(() => {
    if (window.innerWidth > 1199) {
      document.addEventListener('mousemove', onMouseMove)
      return () => {
        document.removeEventListener('mousemove', onMouseMove)
      }
    }
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }

  }, [])

  const [Content, setContent] = useState('')

  const BigImg: any = useRef<HTMLDivElement>(null)

  const onMouseMove = (event) => {
    const { clientX, clientY } = event
    BigImg.current.style.transform = `translate3d(${20 + -clientX * 0.01}%, ${
      0 + (clientY - 150) * 0.005
    }%, 0px)`
  }

  const { parent, children: animChildren } = animConf.stagger_yUp
  animChildren.y = 200

  return (
    <>
      <div className='flex fixed bottom-48 flex-col justify-end items-center w-screen md:bottom-20'>
        <h1 className='text-base font-bold md:text-2xl xxl:text-4xl'>
          {Content.title}
        </h1>
      </div>
      <div className='overflow-hidden absolute w-screen h-screen xl:w-[180%] xl:translate-x-[12%]'>
        <motion.div
          variants={parent(0.3)}
          initial='hidden'
          animate='show'
          ref={BigImg}
          className='flex absolute justify-center items-center w-full h-full'
        >
          <CoverImg
            data={data[0]}
            setContent={setContent}
            animChildren={animChildren}
          />
          <CoverImg
            data={data[1]}
            setContent={setContent}
            animChildren={animChildren}
          />
          <CoverImg
            data={data[2]}
            setContent={setContent}
            animChildren={animChildren}
          />
        </motion.div>
      </div>
      <div className='overflow-hidden items-start px-4 mx-auto w-screen h-screen sm:container sm:px-0 xxl:w-[1440px]'>
        <Header title='HOBBIES' subTitle="What's my" icon className='-mt-36' />
      </div>
    </>
  )
}

const CoverImg = ({ data, setContent, animChildren }) => {
  return (
    <motion.div
      variants={animChildren}
      className='overflow-hidden relative mx-4 w-3/5 h-2/5 rounded-md opacity-10 hover:opacity-100 md:mx-8 md:h-3/5 Anim'
      onMouseOver={() => setContent(data)}
    >
      <Image
        src={data.coverImg}
        layout='fill'
        objectFit='cover'
        blurDataURL={
          'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
        }
        quality={100}
        alt='TheIceJI Singles and Alblums'
      />
    </motion.div>
  )
}
