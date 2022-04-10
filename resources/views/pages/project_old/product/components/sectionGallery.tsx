import * as CSS from '../styles'
import Image from 'next/image'

export default function SectionMockup({ content }) {
  return (
    <div
      className={CSS.Gallery}
      // style={{ height: 350 * Math.ceil(content.length / 2) + 'px' }}
    >
      {content.map((v: any, i: number) => (
        <div
          // style={{ height: 670, width: 350 }}
          key={i}
        >
          <Image
            src={v.url}
            alt={'Gallery_' + i}
            layout='fill'
            objectFit='cover'
            quality={100}
            placeholder='blur'
            blurDataURL={
              'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            }
          />
        </div>
      ))}
    </div>
  )
}
