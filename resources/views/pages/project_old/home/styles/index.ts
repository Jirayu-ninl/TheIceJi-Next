import { css } from '@emotion/css'
export { ContentContainer } from '../../global/styles'

export const HeaderTitle = css`
  padding-top: 150px;
  font-size: 96px;
`

export const Cards = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  @media (max-width: 767.98px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 479.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Card = css`
  position: relative;
  height: 350px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  transition-duration: 350ms;
  & img {
    filter: saturate(20%) opacity(0.4) blur(4px) !important;
    transition-duration: 250ms;
  }
  &:hover {
    transition-duration: 150ms;
    transform: translate3d(-5px, -5px, 0);
    & img {
      filter: saturate(100%) opacity(1) blur(0px) !important;
    }
  }
  &:first-child {
    grid-column: 1 / span 2;
  }
  @media (max-width: 1199.98px) {
    height: 280px;
  }
  @media (max-width: 991.98px) {
    height: 200px;
  }
  @media (max-width: 767.98px) {
    & img {
    filter: saturate(80%) opacity(0.5) blur(0px) !important;
    transition-duration: 250ms;
  }
  }
`

export const TextBackdrop = css`
  position: absolute;
  background: linear-gradient(rgba(34, 34, 34, 0), rgba(34, 34, 34, 1));
  height: 120px;
  width: 100%;
`

export const CardInfo = css`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  h2 {
    font-size: 28px;
    font-family: Athiti;
  }
  & > div {
    button {
      font-size: 12px;
      border: solid 1px #fff;
      padding: 0 12px;
      border-radius: 3px;
      float: right;
    }
  }
  @media (max-width: 1199.98px) {
    h2 {
      font-size: 22px;
    }
  }
  @media (max-width: 991.98px) {
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 767.98px) {
    h2 {
      font-size: 12px;
    }
    & > div {
      button {
        font-size: 8px;
        padding: 0 6px;
        border-radius: 2px;
      }
    }
  }
`
