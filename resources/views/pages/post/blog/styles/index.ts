import { css } from '@emotion/css'
import Color from 'views/theme/color'

export const Content = css`
  padding-top: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  blockquote {
    font-family: athiti;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
  }

  h1 {
    padding-top: 105px;
    font-size: 64px;
  }
  h2 {
    padding-top: 65px;
    font-size: 48px;
  }
  h3 {
    padding-top: 48px;
    font-size: 36px;
  }
  h4 {
    padding-top: 32px;
    padding-left: 32px;
  }
  h5 {
    padding-top: 32px;
    padding-left: 48px;
    opacity: 0.8;
  }
  h6 {
    padding: 120px 64px;
    font-size: 48px;
    font-weight: 300;
    font-style: italic;
  }

  p {
    padding-top: 16px;
    font-size: 24px;
    color: #d2d2d2;
    line-height: 42px;
    /* & > span {
      padding-left: 86px;
      color: #a7a7a7;
    } */
  }
  p.PostTextQuote {
    width: 100%;
    padding: 24px 24px 24px 32px;
    border: 6px solid #3cf8a7;
    border-style: none none none solid;
    border-radius: 5px;
    font-size: 24px;
    background-color: rgba(255, 255, 255, 0.05);
    margin-bottom: 42px;
  }
  .PostTextTab > p {
    padding-left: 86px;
    color: #a7a7a7;
  }
  strong {
    font-weight: 600;
    color: #fff;
  }
  b {
    font-weight: 600;
    color: #f8de3c;
  }
  blockquote {
    margin: 64px 0;
    padding-left: 32px;
    border: 6px solid #f8de3c;
    border-style: none none none solid;
    font-size: 32px;
    font-weight: 300;
  }
  /* img {
    margin: 32px 0;
    width: 100%;
    border-radius: 10px;
  } */
  @media (max-width: 1199.98px) {
    padding: 60px 48px 0 48px;
    p {
      font-size: 16px;
      line-height: 24px;
    }
    h1 {
      padding-top: 80px;
      font-size: 48px;
    }
    h2 {
      padding-top: 65px;
      font-size: 40px;
    }
    h3 {
      padding-top: 48px;
      font-size: 32px;
    }
    h4 {
      padding-top: 32px;
      padding-left: 28px;
    }
    h5 {
      padding-top: 32px;
      padding-left: 48px;
    }
    h6 {
      padding: 60px 32px;
      font-size: 32px;
    }
    blockquote {
      margin: 48px 0;
      padding-left: 24px;
      font-size: 24px;
    }
  }
  @media (max-width: 991.98px) {
  }
  @media (max-width: 767.98px) {
    padding: 48px 24px 0 24px;
    h1 {
      padding-top: 64px;
      font-size: 32px;
    }
    h2 {
      padding-top: 28px;
    }
    h3 {
      padding-top: 24px;
    }
    h4 {
      padding-top: 24px;
      padding-left: 24px;
    }
    h6 {
      padding: 48px 24px;
      font-size: 24px;
    }
    .PostTextTab > p {
      padding-left: 48px;
    }
  }
  @media (max-width: 479.98px) {
    .PostTextTab > p {
      padding-left: 32px;
    }
  }
`

export const Image = css`
  margin: 32px 0;
  width: 100%;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
`

export const BlogFooter = css`
  padding: 120px 0;
  display: flex;
  justify-content: space-between;
  & > div {
    width: 47%;
  }
  @media (max-width: 1199.98px) {
    height: 100%;
    padding: 100px 24px 64px 24px;
    & > div {
      width: 48%;
    }
  }
  @media (max-width: 991.98px) {
  }
  @media (max-width: 767.98px) {
    flex-direction: column;
    padding: 80px 16px 48px 16px;
    height: 100%;
    & > div {
      width: 100%;
    }
  }
`
export const Author = css`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div:first-child {
    padding: 0 0 32px 0;
    button {
      font-size: 13px;
      color: ${Color.Primary};
      background-color: ${Color.Primary}0d;
      padding: 2px 6px;
      border-radius: 5px;
      transition-duration: 350ms;
    }
    button:nth-child(n):not(:first-child) {
      margin-left: 5px;
    }
    button:hover {
      background-color: ${Color.Primary};
      color: #000;
      transition-duration: 150ms;
    }
  }
  & > div:last-child {
    display: flex;
    align-items: center;
    & > div:first-child {
      width: 200px;
      position: relative;
    }
    h2 {
      font-size: 24px;
      margin-bottom: 6px;
    }
    p {
      font-size: 16px;
      opacity: 0.7;
      font-weight: 300;
    }
  }
  @media (max-width: 1199.98px) {
    padding: 0;
    & > div:first-child {
      button {
        margin-bottom: 6px;
      }
    }
    & > div:last-child {
      display: flex;
      align-items: center;
      & > div:last-child {
        padding-left: 16px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 991.98px) {
  }
  @media (max-width: 767.98px) {
    padding: 0 0 32px 0;
    flex-direction: column-reverse;
    & > div:first-child {
      padding: 16px 0 0 82px;
      button {
        font-size: 10px;
        padding: 2px 6px;
      }
    }
  }
`

export const RelatedContent = css`
  & > div {
    position: relative;
    height: 80%;
    border-radius: 10px;
    box-shadow: 0 -5px 12px rgba(0, 0, 0, 0.16);
    background-color: #000;
    overflow: hidden;
    transition-duration: 350ms;
    & > div:last-child {
      position: absolute;
      width: 100%;
      padding: 32px;
      h3 {
        font-family: Athiti;
      }
    }
    & img {
      filter: grayscale(80%);
      opacity: 0.6;
      transition-duration: 550ms;
    }
    &:hover {
      transform: translate3d(-10px, -10px, 0);
      transition-duration: 150ms;
      box-shadow: 6px 6px 24px #0000003a;
      img {
        filter: grayscale(0%);
        opacity: 1;
        transition-duration: 150ms;
      }
    }
  }
  & > div:nth-child(n + 2) {
    margin-top: -150px;
  }
  @media (max-width: 1199.98px) {
    & > div {
      height: 180px;
      & > div:last-child {
        padding: 16px 24px 0 24px;
        h3 {
          font-size: 24px;
        }
      }
    }
    & > div:nth-child(n + 2) {
      margin-top: -100px;
    }
  }
  @media (max-width: 991.98px) {
    & > div {
      & > div:last-child {
        h3 {
          font-size: 16px;
        }
      }
    }
    & > div:nth-child(n + 2) {
      margin-top: -100px;
    }
  }
  @media (max-width: 767.98px) {
    & > div {
      height: 160px;
      & > div:last-child {
        h3 {
          font-size: 16px;
        }
      }
    }
    & > div:nth-child(n + 2) {
      margin-top: -100px;
    }
  }
`
