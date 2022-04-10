import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { About } from 'pages/about/components'
import { FreeTimeItems } from 'contents/pages/about.index'
import { State } from '@store'

const AboutPage = () => {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage('About')
  }, [_setPage])

  return (
    <div className='flex relative justify-center items-center w-screen h-screen bg-gradient-to-r from-indigo-900 to-cyan-900'>
      <div className='flex absolute z-10 justify-end items-center w-full'>
        <About FreeTimeItems={FreeTimeItems} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'TheIceJI | About me',
    },
  }
}

export default AboutPage
