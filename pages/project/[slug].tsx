import { GetStaticProps, GetStaticPaths } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import { ParsedUrlQuery } from 'querystring'
import { AppLayout, ProductLayout } from 'pages/project_old'

const graphcms = new GraphQLClient(process.env.GRAPHQL_PROJECT_URL)

interface IParams extends ParsedUrlQuery {
  slug: string
}

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
  const { slug } = context.params as IParams
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
    }
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
  if (project.projectType == 'App') {
    return (
      <>
        <AppLayout content={project} />
      </>
    )
  } else if (project.projectType == 'Product') {
    return (
      <>
        <ProductLayout content={project} />
      </>
    )
  } else {
    return <h1>Nothing</h1>
  }
}
