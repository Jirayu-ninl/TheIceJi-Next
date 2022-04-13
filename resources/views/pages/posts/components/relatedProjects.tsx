import Image from 'next/image'
import Link from 'next/link'

function RelatedProjects({ content }) {
  return (
    <>
      <div className='pt-16 pb-48'>
        <h6 className='mb-14 font-semibold'>Related Projects</h6>
        {content?.map((v, i) => (
          <Link href={v.slug} key={i} passHref>
            <div className='overflow-hidden relative -mt-12 h-48 rounded-md drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.7)] cursor-pointer xl:drop-shadow-none Anim AnimTranslate-10 AnimSaturate-0'>
              <div className='absolute top-4 left-4 z-10'>
                <h5 className='text-2xl font-bold'>{v.title}</h5>
                <div>
                  {v.tag?.map((v, i) => (
                    <button
                      className='py-1 px-2 mr-2 text-xs hover:text-black uppercase bg-white/20 hover:bg-primary-0
                      rounded border border-white/40 backdrop-blur-md Anim AnimTranslate-4'
                      key={i}
                    >
                      {v}
                    </button>
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

export default RelatedProjects