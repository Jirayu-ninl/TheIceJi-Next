import { GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'

import { Cards, Card } from 'pages/project_old/home'

const graphcms = new GraphQLClient(process.env.GRAPHQL_CONTENT_URL)

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await graphcms.request(
    gql`
      {
        posts {
          slug
          title
          excerpt
          date
          featured
          tag
          coverImage {
            height
            url
            width
          }
        }
      }
    `
  )

  return {
    props: {
      title: 'TheIceJI Blog',
      posts,
    },
    revalidate: 180,
  }
}

export default function Page({ posts }) {
  return (
    <Cards>
      {posts.map((v: never, i: number) => (
        <Card data={v} key={i} slugPrefix='/post/' />
      ))}
    </Cards>
  )
}
