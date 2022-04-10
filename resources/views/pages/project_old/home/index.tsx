import Link from 'next/link'
import Image from 'next/image'
import * as CSS from './styles'

export const Header = () => {
  return (
    <div className={CSS.ContentContainer}>
      <div>
        <h1 className={CSS.HeaderTitle}>LATEST</h1>
      </div>
    </div>
  )
}

export const Cards = ({ children }) => (
  <>
    <div className={CSS.ContentContainer} style={{ paddingTop: '7%' }}>
      <div className={CSS.Cards}>{children}</div>
    </div>
  </>
)

export const Card = ({ data, slugPrefix }) => {
  return (
    <>
      <Link href={slugPrefix + data.slug} passHref>
        <div className={CSS.Card}>
          <Image
            alt={data.title}
            src={data.coverImage.url}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={
              'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            }
          />
          <div className={CSS.TextBackdrop}></div>
          <div className={CSS.CardInfo}>
            <div>
              {/* {data.tag?.map((v, i) => (
                <button key={i}>{v}</button>
              ))} */}
              <button>{data.tag?.[0]}</button>
            </div>
            <h2>{data.title}</h2>
          </div>
        </div>
      </Link>
    </>
  )
}
