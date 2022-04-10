import { css } from '@emotion/css'
import Color from 'views/theme/color'

export const Info = css`
  margin: 200px 0 134px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  & > div {
    border: 1px solid ${Color.primary[0]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 0;
    transition-duration: 350ms;
    h4 {
      color: ${Color.primary[0]};
      font-size: 16px;
      font-weight: 600;
    }
    p {
      font-size: 20px;
      font-weight: 300;
    }
  }
  & > div:hover {
    background-color: ${Color.primary[0]};
    transform: translate3d(-5px, -5px, 0);
    h4,
    p {
      color: black;
      transition-duration: 150ms;
    }
  }
  @media (max-width: 991.98px) {
    margin: 160px 0 90px 0;
    gap: 24px;
    & > div {
      h4 {
        font-size: 12px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 767.98px) {
    margin: 60px 0 60px 0;
    grid-template-columns: repeat(2, 1fr);
    & > div {
      h4 {
        font-size: 12px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`

export const Section = css`
  display: grid;
  grid-template-columns: auto 60%;
  padding: 98px 0;
  @media (max-width: 991.98px) {
    grid-template-columns: auto 70%;
  }
  @media (max-width: 767.98px) {
    grid-template-columns: auto 60%;
  }
  @media (max-width: 479.98px) {
    padding: 64px 0;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const SectionTitle = css`
  h2 {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }
  span {
    color: ${Color.primary[0]};
    padding-right: 22px;
  }
  @media (max-width: 991.98px) {
  }
  @media (max-width: 479.98px) {
    padding-bottom: 24px;
    span {
      padding-right: 8px;
    }
  }
`

export const SectionContent = css`
  h3 {
    font-size: 32px;
    font-weight: 600;
    margin-top: -8px;
    margin-bottom: 30px;
  }
  p {
    opacity: 0.6;
  }
  @media (max-width: 991.98px) {
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 479.98px) {
    h3 {
      font-size: 24px;
      margin-bottom: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`

export const BannerImage = css`
  width: 100%;
  height: 240px;
  position: relative;
  @media (max-width: 1199.98px) {
    height: 198px;
  }
  @media (max-width: 991.98px) {
    height: 153px;
  }
  @media (max-width: 767.98px) {
    height: 96px;
  }
  @media (max-width: 479.98px) {
    height: 80px;
  }
`

export const MockupImageSection = css`
  overflow: scroll;
  & > div {
    width: 140%;
    margin-left: -20%;
    display: flex;
    justify-content: center;
    & > div:nth-child(n):not(:first-child) {
      margin-left: 16px;
    }
  }
  @media (min-width: 1699.98px) {
    overflow: visible;
  }
  @media (max-width: 991.98px) {
    & > div {
      width: 180%;
      margin-left: 0%;
    }
  }
  @media (max-width: 767.98px) {
    & > div {
      width: 290%;
    }
  }
  @media (max-width: 479.98px) {
    & > div {
      width: 450%;
    }
  }
`

export const SectionColor = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  & > div {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 32px 27px;
    transition-duration: 350ms;
    button {
      padding: 0 8px;
      opacity: 0.6;
      margin-bottom: 7px;
    }
    h6 {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 4px;
    }
  }
  div:hover {
    transform: translate3d(-10px, -10px, 0);
    transition-duration: 150ms;
  }
  @media (max-width: 1199.98px) {
    & > div {
      height: 250px;
      padding: 16px 20px;
      button {
        font-size: 12px;
      }
      h6 {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 991.98px) {
    & > div {
      height: 220px;
      h6 {
        letter-spacing: 3px;
      }
    }
  }
  @media (max-width: 767.98px) {
    & > div {
      height: 160px;
      button {
        font-size: 10px;
      }
      h6 {
        font-size: 14px;
      }
    }
  }
`

export const relatedProjects = css`
  padding: 60px 0 98px 0;
  h6 {
    text-align: end;
    font-weight: 600;
    letter-spacing: 4px;
    padding-bottom: 6px;
  }
  & > div {
    position: relative;
    width: 100%;
    height: 200px;
    padding: 16px 32px;
    background-color: #000;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 -5px 12px rgba(0, 0, 0, 0.16);
    transition-duration: 250ms;
    & > div:first-child {
      position: absolute;
      z-index: 2;
    }
    & h5 {
      font-size: 27px;
      font-weight: 600;
    }
    & button {
      font-size: 12px;
      border: solid 1px #fff;
      padding: 0 12px;
      border-radius: 3px;
    }
    & button:nth-child(n):not(:first-child) {
      margin-left: 6px;
    }
    & img {
      filter: grayscale(80%);
      opacity: 0.6;
      transition-duration: 550ms;
    }
    &:hover {
      transform: translate3d(-10px, -5px, 0);
      box-shadow: 0 -5px 24px rgba(0, 0, 0, 0.2);
      transition-duration: 150ms;
      img {
        filter: grayscale(0%);
        opacity: 1;
        transition-duration: 150ms;
      }
    }
  }
  & > div:nth-child(n + 3) {
    margin-top: -88px;
  }
  @media (max-width: 991.98px) {
  }
  @media (max-width: 479.98px) {
  }
`
