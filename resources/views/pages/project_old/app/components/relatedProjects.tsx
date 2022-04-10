import * as CSS from '../styles'
import Image from 'next/image'
import Link from 'next/link'

export default function RelatedProjects({ content }) {
  return (
    <>
      <div className={CSS.relatedProjects}>
        <h6>Related Projects</h6>
        {content?.map((v, i) => (
          <Link href={v.slug} key={i} passHref>
            <div>
              <div>
                <h5>{v.title}</h5>
                <div>
                  {v.tag?.map((v, i) => (
                    <button key={i}>{v}</button>
                  ))}
                </div>
              </div>
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
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
