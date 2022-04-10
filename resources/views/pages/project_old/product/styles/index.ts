import { css } from '@emotion/css'

export const Gallery = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  /* position: relative; */
  & > div {
    width: 100%;
    height: 350px;
    position: relative;
    transition-duration: 250ms;
    overflow: hidden;
    & > span {
      transition-duration: 250ms;
    }
  }
  & > div:hover {
    transform: scale3d(0.95, 0.95, 1);
    transition-duration: 150ms;
    & > span {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
  @media (max-width: 991.98px) {
    & > div {
      height: 260px;
    }
  }
  @media (max-width: 767.98px) {
    & > div {
      height: 156px;
    }
  }
  @media (max-width: 479.98px) {
    grid-template-columns: repeat(1, 1fr);
    & > div {
      height: 255px;
    }
  }
`
