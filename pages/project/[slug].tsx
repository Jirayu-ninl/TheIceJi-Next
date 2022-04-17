import { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import { Project } from 'pages/posts'

import { State } from '@store'

const graphcms = new GraphQLClient(process.env.GRAPHQL_PROJECT_URL)

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await graphcms.request(gql`
    {
      projects {
        slug
      }
    }
  `)

  return {
    paths: projects.map(({ slug }: { slug: string }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params
  const { project } = await graphcms.request(
    gql`
      query Page($slug: String!) {
        project(where: { slug: $slug }) {
          title
          projectType
          featured
          excerpt
          tagline
          slug
          tag
          projectCategory {
            title
            slug
          }
          coverImage {
            url
          }
          colorIdentity {
            rgba {
              g
              b
              r
            }
            hex
          }
          client
          industry
          projectDate
          services
          introduction {
            html
          }
          bannerOption
          bannerImage {
            url
            height
            width
          }
          about {
            html
          }
          gallery {
            url
            height
            width
          }
          identities {
            html
          }
          color
          conclusion {
            html
          }
          relatedProject {
            title
            tagline
            tag
            slug
            coverImage {
              url
              width
              height
            }
          }
        }
      }
    `,
    {
      slug: slug,
    },
  )

  return {
    props: {
      title: `${project.title} - TheIceJI Project`,
      description: project.tagline + ' | ' + project.excerpt,
      coverImg: project.coverImage.url,
      project,
    },
    revalidate: 180,
  }
}

// Main UI

export default function Post({ project }) {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage('PROJECT | ' + project.title)
  }, [project, _setPage])

  return (
    <>
      <Project content={project} type={project.projectType} />
    </>
  )
}

Post.disableFooter = true
