import { useState, useEffect } from 'react'

import { FreeTimeItemsType } from './Type'
import { config as animConf } from 'views/animations'
import { State } from '@store'

import Hero from './hero'
import CTA from './cta'
import Facts from './facts'
import FreeTime from './freeTime'
import Nav from './components/nav'

export default function About({ FreeTimeItems }: FreeTimeItemsType) {
  const [Page, setPage] = useState(0)
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    switch (Page) {
    case 0:
      _setPage('About - Introduction')
      break
    case 1:
      _setPage('About - Facts of me')
      break
    case 2:
      _setPage('About - My hobbies')
      break
    case 3:
      _setPage('About - More')
      break
    default:
      break
    }
  }, [Page, _setPage])

  return (
    <>
      {Page === 2 && <FreeTime data={FreeTimeItems} animConf={animConf} />}
      {!(Page === 2) && (
        <div className='items-start w-screen h-screen px-4 mx-auto overflow-hidden sm:container xxl:w-[1440px] sm:px-0'>
          {Page === 0 && <Hero />}
          {Page === 1 && <Facts animConf={animConf} />}
          {Page === 3 && <CTA animConf={animConf} />}
        </div>
      )}
      <Nav Page={Page} setPage={setPage} animConf={animConf} />
    </>
  )
}
