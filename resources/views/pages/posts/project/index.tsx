import { useRef, useEffect } from 'react'
import { dataMap } from '../utils'
import { UseSmoothScroll } from 'views/animations/hooks'
import {
  Header,
  ProjectInfo,
  SectionContent,
  SectionBanner,
  SectionMockup,
  SectionColor,
  RelatedProjects,
  SectionGallery
} from '../components'

export default function Index({ content, type }) {
  const Data = dataMap(content)
  const refIntroduction = useRef(null)
  const refAbout = useRef(null)
  const refIdentities = useRef(null)
  const refConclusion = useRef(null)

  useEffect(() => {
    if (Data.Introduction.content[0]) {
      refIntroduction.current.innerHTML = Data.Introduction.content[0].html
    }
    if (Data.About.content[0]) {
      refAbout.current.innerHTML = Data.About.content[0].html
    }
    if (Data.Identities.content[0]) {
      refIdentities.current.innerHTML = Data.Identities.content[0].html
    }
    if (Data.Conclusion.content[0]) {
      refConclusion.current.innerHTML = Data.Conclusion.content[0].html
    }
  }, [Data])

  return (
    <>
      <UseSmoothScroll physics={{ damping: 9.5, mass: 0.4, stiffness: 70 }}>
        <Header
          Title={content.title}
          Img={content.coverImage.url}
          Tags={content.tag}
          ColorBg={content.color[1]?.codeColor}
        />
        <div className='flex w-screen' style={{ overflowX: 'hidden' }}>
          <div className='container z-10 px-4 w-screen xxl:w-[1440px]'>
            <ProjectInfo content={Data.Info} />
            <SectionContent
              content={Data.Introduction}
              refElement={refIntroduction}
            />
            <SectionBanner
              content={Data.Banner}
              color={content.colorIdentity.hex}
            />
            <SectionContent content={Data.About} refElement={refAbout} />
            {type === 'App' && (
              <>
                <SectionMockup content={content.gallery} />
                <SectionContent
                  content={Data.Identities}
                  refElement={refIdentities}
                />
                <SectionColor content={content.color} />
                <SectionContent
                  content={Data.Conclusion}
                  refElement={refConclusion}
                />
              </>
            )}
            {type === 'Product' && (
              <>
                <SectionGallery content={content.gallery} />
              </>
            )}
            <RelatedProjects content={content.relatedProject} />
          </div>
        </div>
      </UseSmoothScroll>
    </>
  )
}