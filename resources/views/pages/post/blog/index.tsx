import { useEffect, useRef } from 'react'
import Smooth from 'smooth-scrollbar'
import Image from 'next/image'
import Link from 'next/link'
import * as CSS from './styles'
import Header from 'views/layouts/content/header'

import AvatarImg from 'public/page/about/Profile_Avatar@2x.png'

export default function Blog({ content }) {
  useEffect(() => {
    const SmoothContainer = document.querySelector('#SmoothScroll')
    Smooth.init(SmoothContainer).track.yAxis.element.remove()
  }, [])

  return (
    <div id='SmoothScroll' style={{ height: '100vh', overflow: 'hidden' }}>
      <Header
        Title={content.title}
        Img={content.coverImage.url}
        Tags={content.tag}
        lang='th'
      />
      {/* <ContentHTML dataHTML={content.content.html} /> */}
      <ContentRAW dataRAW={content.content.raw.children} />
      <BlogFooter data={content} />
    </div>
  )
}

// const ContentHTML = ({ dataHTML }) => {
//   const ref = useRef(null)
//   useEffect(() => {
//     ref.current.innerHTML = dataHTML
//   }, [dataHTML])
//   return (
//     <div className='container'>
//       <div className={CSS.Content} ref={ref}></div>
//     </div>
//   )
// }

export const ContentRAW = ({ dataRAW }) => {
  return (
    <>
      <div className='container'>
        <div className={CSS.Content}>
          <RawToHtml RAW={dataRAW} />
        </div>
      </div>
    </>
  )
}

export const RawToHtml = ({ RAW }) => {
  // const CreateHeadingTag = (h, content) => '<h' + h + '>' + content + '</h' + h + '>'
  return (
    <>
      {RAW.map((v, i: number) => {
        if (v.type == 'paragraph') {
          return (
            <p key={i}>
              &emsp;&emsp;&emsp;
              <ObjectText content={v.children} />
            </p>
          )
        } else if (v.type == 'heading-one') {
          return (
            <h1 key={i}>
              <ObjectText content={v.children} />
            </h1>
          )
        } else if (v.type == 'heading-two') {
          return (
            <h2 key={i}>
              <ObjectText content={v.children} />
            </h2>
          )
        } else if (v.type == 'heading-three') {
          return (
            <h3 key={i}>
              <ObjectText content={v.children} />
            </h3>
          )
        } else if (v.type == 'heading-four') {
          return (
            <h4 key={i}>
              <ObjectText content={v.children} />
            </h4>
          )
        } else if (v.type == 'heading-five') {
          return (
            <h5 key={i}>
              <ObjectText content={v.children} />
            </h5>
          )
        } else if (v.type == 'heading-six') {
          return (
            <h6 key={i}>
              <ObjectText content={v.children} />
            </h6>
          )
        } else if (v.type == 'image') {
          return (
            <div className={CSS.Image} key={i}>
              <Image
                src={v.src}
                alt={v.altText}
                height={v.height}
                width={v.width}
                // layout='fill'
                objectFit='cover'
                placeholder='blur'
                blurDataURL={
                  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                }
              />
            </div>
          )
        } else if (v.type == 'class') {
          return (
            <div className={v.className}>
              <RawToHtml RAW={v.children} key={i} />
            </div>
          )
        } else if (v.type == 'block-quote') {
          return (
            <blockquote key={i}>
              <ObjectText content={v.children} />
            </blockquote>
          )
        } else {
          return ''
        }
      })}
    </>
  )
}

export const ObjectText = ({ content }) => {
  return (
    <>
      {content.map((v, i) => {
        return v.bold ? <strong key={i}>{v.text}</strong> : v.text
      })}
    </>
  )
}

export const BlogFooter = ({ data }) => {
  return (
    <>
      <div className='container'>
        <div className={CSS.BlogFooter}>
          <div className={CSS.Author}>
            <div>
              {data.tag?.map((v, i) => (
                <button key={i}>{v}</button>
              ))}
            </div>
            <div>
              <div>
                <Image
                  placeholder='blur'
                  src={AvatarImg}
                  alt='IceJI Avatar image'
                  height={80}
                  width={80}
                />
              </div>
              <div>
                <h2>Jirayu Ninlapun</h2>
                <p>
                  Cinematic Art, Bangkok University. Experience: 7 years in
                  Graphics Design, 5 years in VFX & Editor, and 2 years in Web
                  Developer.
                </p>
              </div>
            </div>
          </div>
          <div className={CSS.RelatedContent}>
            {data.relatedContent.map((v, i) => (
              <Link href={v.slug} key={i} passHref>
                <div>
                  <Image
                    alt={v.title}
                    src={v.coverImage.url}
                    layout='fill'
                    objectFit='cover'
                    placeholder='blur'
                    blurDataURL={
                      'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                    }
                  />
                  <div>
                    <h3>{v.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
