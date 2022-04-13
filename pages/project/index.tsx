import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import { Home, Store } from 'pages/posts'
import { State } from '@store'

const graphcms = new GraphQLClient(process.env.GRAPHQL_PROJECT_URL)

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await graphcms.request(
    gql`
      {
        projects {
          title
          slug
          featured
          tagline
          tag
          coverImage {
            url
            width
            height
          }
        }
      }
    `
  )

  return {
    props: {
      title: 'TheIceJI Project',
      projects,
    },
    revalidate: 180,
  }
}

export default function Index({ projects }) {
  const setProjects = Store((state) => state.setProjects)
  const _setPage = State((state) => state.setPage)

  useEffect(() => {
    setProjects([...projects, ...projects])
    _setPage('Projects')
  }, [projects, _setPage, setProjects])

  return (
    <div className='relative w-screen h-screen bg-gradient-to-r from-black via-background-2 to-black'>
      <div className='flex absolute z-10 flex-col justify-between items-center w-screen h-full pointer-events-none'>
        <Home.Projects.Overlay />
      </div>
      <div className='flex justify-center items-end pb-16 w-full h-full md:pb-0'>
        <Home.Projects.Canvas3D />
      </div>
    </div>
  )
}
