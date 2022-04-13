import Image from 'next/image'

function SectionGallery({ content }) {
  return (
    <div className='grid grid-cols-1 gap-4 mb-24 md:grid-cols-2'>
      {content.map((v: any, i: number) => (
        <div
          className='overflow-hidden relative h-64 rounded-md xl:hover:scale-95 lg:h-80 Anim'
          key={i}
        >
          <Image
            className='Anim AnimScale-sm'
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

export default SectionGallery