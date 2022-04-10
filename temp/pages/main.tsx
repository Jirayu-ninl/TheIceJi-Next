import { useState } from 'react'
import dynamic from 'next/dynamic'

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from 'components/context/globalContext'

import CSS from 'components/css/main'

import FooterSocial from 'components/layout/footer/footerSocial'
import FooterText from 'components/layout/footer/footerText'
import About from 'components/layout/footer/about'
import Maintenance from 'components/maintenance'

const HomePage = dynamic(() => import('components/pages/home'))
const AboutPage = dynamic(() => import('components/pages/oldAbout'))

export default function Main({ title }) {
  const dispatch = useGlobalDispatchContext()

  // Cursor State
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  // State
  const [toggleAbout, setToggleAbout] = useState(false)
  const [ModalState, setModalState] = useState(true)
  // const [Page, setPage] = useState(`home`)
  const Page = 'home'

  return (
    <>
      {/* <NextSeo {...SEO} /> */}
      <div className={CSS.heroContainer}>
        <div style={{ position: 'absolute', width: '100%' }}>
          {/* {Page == `home` ? (
            <HomePage />
          ) : Page == `about` ? (
            <AboutPage />
          ) : null} */}
        </div>
        {/* <FooterSocial opacity={0.4} /> */}
        {/* <FooterText toggleAbout={toggleAbout} setToggleAbout={setToggleAbout} /> */}
        <About toggleAbout={toggleAbout} setToggleAbout={setToggleAbout} />
        {/* <Maintenance ModalState={ModalState} setModalState={setModalState} /> */}
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'TheIceJI | Home',
    },
  }
}
