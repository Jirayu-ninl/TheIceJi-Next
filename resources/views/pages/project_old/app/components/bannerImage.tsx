import * as CSS from '../styles'
import Image from 'next/image'

export default function BannerImage({ content, color }) {
  if (content.IsLogo) {
    return (
      <div
        className={CSS.BannerImage}
        style={{
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '40%' }}>
          <Image
            src={content.Image}
            alt={content.Title}
            width={content.width}
            height={content.height}
            placeholder='blur'
            blurDataURL={
              'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            }
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className={CSS.BannerImage}>
        <Image
          src={content.Image}
          alt={content.Title}
          layout='fill'
          objectFit='cover'
          quality={100}
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </div>
    )
  }
}
