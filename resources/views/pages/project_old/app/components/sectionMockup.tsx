import * as CSS from '../styles'
import Image from 'next/image'

export default function SectionMockup({ content }) {
  return (
    <div className={CSS.MockupImageSection}>
      <div>
        {content.map((v: any, i: number) => (
          <div
            // style={{ height: 670, width: 350 }}
            key={i}
          >
            <Image
              src={v.url}
              alt={'Gallery_' + i}
              width={v.width}
              height={v.height}
              placeholder='blur'
              blurDataURL={
                'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}
