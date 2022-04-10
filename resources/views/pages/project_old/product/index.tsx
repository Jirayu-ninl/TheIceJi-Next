import * as React from 'react'
import Smooth from 'smooth-scrollbar'
import * as CSS from '../global/styles'
import Header from 'views/layouts/content/header'
import ProjectInfo from '../app/components/projectInfo'
import SectionContent from '../app/components/sectionContent'
import BannerImage from '../app/components/bannerImage'
// import SectionColor from '../app/components/sectionColor'
import SectionGallery from './components/sectionGallery'
import RelatedProjects from '../app/components/relatedProjects'

export default function Index({ content }) {
  React.useEffect(() => {
    const SmoothContainer = document.querySelector('#SmoothScroll')
    Smooth.init(SmoothContainer).track.yAxis.element.remove()
  }, [])
  const Data = {
    Info: [
      { title: 'Client', description: content.client },
      { title: 'Industry', description: content.industry },
      { title: 'Date', description: content.projectDate },
      { title: 'Services', description: content.services },
    ],
    Banner: {
      Title: content.title,
      IsLogo: content.bannerOption,
      Image: content.bannerImage.url,
      width: content.bannerImage.width,
      height: content.bannerImage.height,
    },
    Introduction: {
      number: '01',
      title: 'Introduction',
      content: content.introduction,
    },
    About: {
      number: '02',
      title: 'About',
      content: content.about,
    },
    Identities: {
      number: '03',
      title: 'Identities',
      content: content.identities,
    },
    Conclusion: {
      number: '04',
      title: 'Conclusion',
      content: content.conclusion,
    },
  }
  return (
    <div id='SmoothScroll' style={{ height: '100vh', overflow: 'hidden' }}>
      <Header
        Title={content.title}
        Img={content.coverImage.url}
        Tags={content.tag}
      />
      <div className={CSS.ContentContainer}>
        <div>
          <ProjectInfo content={Data.Info} />
          <SectionContent content={Data.Introduction} />
          <BannerImage
            content={Data.Banner}
            color={content.colorIdentity.hex}
          />
          <SectionContent content={Data.About} />
          <SectionGallery content={content.gallery} />
          {/* <SectionContent content={Data.Identities} /> */}
          {/* <SectionColor content={content.color} /> */}
          {/* <SectionContent content={Data.Conclusion} /> */}
        </div>
      </div>
      <div className={CSS.ContentContainer}>
        <RelatedProjects content={content.relatedProject} />
      </div>
    </div>
  )
}
