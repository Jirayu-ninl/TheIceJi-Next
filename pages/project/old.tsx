import { GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'

import { Cards, Card } from 'pages/project_old/home'

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

export default function Page({ projects }) {
  return (
    <>
      {/* <Header /> */}
      <Cards>
        {projects.map((v: never, i: number) => (
          <Card data={v} key={i} slugPrefix='/project/' />
        ))}
      </Cards>
    </>
  )
}
