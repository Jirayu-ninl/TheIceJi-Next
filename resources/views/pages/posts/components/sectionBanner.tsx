import Image from 'next/image'

function SectionBanner({ content, color }) {
  if (content.IsLogo) {
    return (
      <div
        className='flex relative justify-center items-center w-full h-32 md:h-48 lg:h-60'
        style={{ backgroundColor: color }}
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
      <div className='relative w-full h-32 md:h-48 lg:h-60'>
        <Image
          src={content.Image}
          alt={content.Title}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </div>
    )
  }
}

export default SectionBanner
