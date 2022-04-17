import { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import { State } from '@store'
import { Blog } from 'pages/posts'

const graphcms = new GraphQLClient(process.env.GRAPHQL_CONTENT_URL)

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request(gql`
    {
      posts {
        slug
      }
    }
  `)

  return {
    paths: posts.map(({ slug }: { slug: string }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params
  const { post } = await graphcms.request(
    gql`
      query PostsPage($slug: String!) {
        post(where: { slug: $slug }) {
          title
          tag
          slug
          featured
          excerpt
          coverImage {
            url
            width
            height
          }
          date
          content {
            raw
            html
          }
          relatedContent {
            title
            slug
            tag
            coverImage {
              width
              url
              height
            }
          }
        }
      }
    `,
    {
      slug: slug,
    }
  )

  return {
    props: {
      title: `TheIceJI Blog | ${post.title}`,
      description: post.excerpt,
      coverImg: '',
      post,
    },
    revalidate: 180,
  }
}

export default function Post({ post }) {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage('BLOG | ' + post.title)
  }, [post, _setPage])

  return (
    <>
      <Blog content={post} />
    </>
  )
}

Post.disableFooter = true
