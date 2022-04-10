import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { State } from '@store'

import { home as HomePage } from 'pages/home'
import SceneLayout from 'views/layouts/sceneLogoLayout'

export default function Main() {
  const _setPage = State((state) => state.setPage)

  useEffect(() => {
    _setPage('Home')
  }, [_setPage])

  return (
    <SceneLayout>
      <HomePage />
    </SceneLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'TheIceJI | Home',
    },
  }
}
