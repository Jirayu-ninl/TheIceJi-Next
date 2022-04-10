/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps } from 'next'
import { useState, useEffect } from 'react'
import { State } from '@store'

import { skills as Section } from 'pages/about/components'
import Layout from 'views/layouts/scenceBubbleLayout'
import * as mySkills from 'contents/pages/about.skills'

const MySkill = () => {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage('My skills')
  }, [_setPage])

  const [MenuSection, setMenuSection] = useState(0)

  return (
    <>
      <Layout>
        <div className='flex overflow-hidden flex-col items-start px-4 mx-auto h-screen sm:container sm:px-0 md:flex-row xxl:w-[1440px]'>
          <div className='mx-0 mt-28 w-full md:mx-5 md:w-1/2 Card-back-md-40'>
            <Section.Header
              MenuSection={MenuSection}
              setMenuSection={setMenuSection}
            />
          </div>
          <div className='overflow-auto z-10 pt-6 mx-0 w-full h-full md:px-5 md:pt-28 md:w-1/2'>
            <Section.SkillSection MenuSection={MenuSection} data={mySkills} />
            <div className='w-full h-[60px]'></div>
          </div>
        </div>
      </Layout>
      <div className='fixed bottom-0 z-10 w-screen h-12 Card-back-md-40'></div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'TheIceJI | About me - Skills',
    },
  }
}

export default MySkill
