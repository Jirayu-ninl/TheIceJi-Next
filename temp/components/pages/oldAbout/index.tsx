/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { css } from '@emotion/css'
// Icon
import PanelIconList from 'components/assets/icon/about'
// CSS
import CSS from 'components/css/oldAbout'
// Components
import Card from './card'

export default function about() {
  const PanelIcon = css`
    opacity: 0.2;
    transition-duration: 500ms;
    &:hover {
      opacity: 1;
      transition-duration: 250ms;
    }
    &:active {
      opacity: 1;
      transition-duration: 250ms;
    }
  `

  const FixDisplay = css`
    display: none;
    grid-column-start: span 6;
    @media (min-width: 2500px) {
      display: block;
      height: 82px;
    }
    @media (max-width: 768px) {
      display: block;
      height: 82px;
    }
  `

  const CardProgressBarArr = [
    {
      ColStart: 2,
      ColEnd: 3,
      Value: 96,
      Color: `#FF5B31`,
      BG: `rgba(255, 91, 49, 0.1)`,
      Title: `Front-end`,
      Sub: `HTML, CSS, SCSS, jQuery`,
      Key: 1,
    },
    {
      ColStart: 3,
      ColEnd: 4,
      Value: 90,
      Color: `#31DCFF`,
      BG: `rgba(49, 220, 255, 0.1)`,
      Title: `Framework`,
      Sub: `React, NextJS, Adonis`,
      Key: 2,
    },
    {
      ColStart: 4,
      ColEnd: 5,
      Value: 92,
      Color: `#F9D395`,
      BG: `rgba(249, 211, 149, 0.1)`,
      Title: `Animation`,
      Sub: `GSAP, Farmer Motion`,
      Key: 3,
    },
    {
      ColStart: 2,
      ColEnd: 3,
      Value: 40,
      Color: `#00FFBD`,
      BG: `rgba(0, 255, 189, 0.1)`,
      Title: `Back-end`,
      Sub: `NodeJS, Express`,
      Key: 4,
    },
    {
      ColStart: 3,
      ColEnd: 4,
      Value: 60,
      Color: `#9177FF`,
      BG: `rgba(145, 119, 255, 0.1)`,
      Title: `Database`,
      Sub: `GraphQL, MongoDB, MySQL`,
      Key: 5,
    },
    {
      ColStart: 4,
      ColEnd: 5,
      Value: 76,
      Color: `#46F540`,
      BG: `rgba(70, 245, 64, 0.1)`,
      Title: `Responsive`,
      Sub: `Media Query & Design`,
      Key: 6,
    },
  ]

  const BookmarkLinkArr = [
    {
      Name: `Blog`,
      Link: ``,
      Img: `Test001.jpg`,
      ColStart: 5,
      ColEnd: 6,
      Key: 1,
    },
    {
      Name: `Youtube`,
      Link: ``,
      Img: `Test002.jpg`,
      ColStart: 6,
      ColEnd: 7,
      Key: 2,
    },
    {
      Name: `Portfolio`,
      Link: ``,
      Img: `Test003.jpg`,
      ColStart: 5,
      ColEnd: 5,
      Key: 3,
    },
    {
      Name: `Contact`,
      Link: ``,
      Img: `Test004.jpg`,
      ColStart: 6,
      ColEnd: 7,
      Key: 4,
    },
  ]

  return (
    <>
      <div
        className='flex flex-row h-screen'
        style={{ backgroundColor: `#161616` }}
      >
        <div className={CSS.About.Panel}>
          <div>
            <div className='flex flex-col items-center w-full space-y-8'>
              <div className={PanelIcon} style={{ opacity: 1 }}>
                <PanelIconList.Icon1 />
              </div>
              <div className={PanelIcon}>
                <PanelIconList.Icon2 />
              </div>
              <div className={PanelIcon}>
                <PanelIconList.Icon3 />
              </div>
              <div className={PanelIcon}>
                <PanelIconList.Icon4 />
              </div>
              <div className={PanelIcon}>
                <PanelIconList.Icon5 />
              </div>
            </div>
            <div className='flex flex-col items-center w-full space-y-8'>
              <a>
                <img
                  alt='Panel Avatar photo'
                  src='/page/about/Panel_avatar@2x.png'
                />
              </a>
            </div>
          </div>
        </div>
        <div className={CSS.Dashboard.Grid}>
          <div>
            <Card.Profile />
            {CardProgressBarArr.map((i) => (
              <Card.ProgressBar
                ColStart={i.ColStart}
                ColEnd={i.ColEnd}
                Value={i.Value}
                Color={i.Color}
                BG={i.BG}
                Title={i.Title}
                Sub={i.Sub}
                key={i.Key}
              />
            ))}
            <Card.Skills />
            <Card.Bio />
            <Card.Partners />
            {/* {BookmarkLinkArr.map((i) => (
              <Card.Bookmark
                ColStart={i.ColStart}
                ColEnd={i.ColEnd}
                Name={i.Name}
                Img={i.Img}
                key={i.key}
              />
            ))} */}
            <div className={FixDisplay}></div>
          </div>
        </div>
      </div>
    </>
  )
}
