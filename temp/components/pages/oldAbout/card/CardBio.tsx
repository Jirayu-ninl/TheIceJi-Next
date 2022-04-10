/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/css'

const CardBio = () => {
  const Card = css`
    background-color: #1a1a1a;
    z-index: 50;
    /* grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3; */
    grid-column-start: span 2;
    grid-row-start: span 1;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
    padding: 32px;
    text-align: center;
    transition-duration: 500ms;
    &:hover {
      background-color: #212121;
      transition-duration: 250ms;
    }
    & > h1 {
      font-size: 44px;
      @media(max-width: 1440px) {
        font-size: 30px;
      }
      @media (max-width: 480px) {
        font-size: 20px;
      }
    }
  `
  const Content = css`
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (min-width: 2500px) {
      height: 200px;
    }
    @media (max-width: 480px) {
      height: 150px;
    }
    @media (max-width: 320px) {
      height: 280px;
    }
    & > p {
      font-size: 14px;
      font-weight: 300;
      opacity: 0.6;
      @media (min-width: 2500px) {
        font-size: 24px;
      }
      @media (max-width: 480px) {
        font-size: 12px;
      }
    }
    & > img {
      position: absolute;
      margin-top: -15px;
    }
  `
  return (
    <div className={Card}>
      <h1>About me</h1>
      <div className={Content}>
        <p>
          Born in 1996, born to be an expert. I can&apos;t stop develope and enhance
          my skill sets. I have 3 years experience in Video Editing and Motion
          Graphics, 2 years experience in Web Development and Design.
        </p>
        <img alt='Quote BG' src='/page/about/CardBioQuote@2x.png' />
      </div>
    </div>
  )
}

export default CardBio
