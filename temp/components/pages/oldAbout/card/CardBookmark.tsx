import { css } from '@emotion/css'

const CardBookmark = ({
  ColStart,
  ColEnd,
  RowStart,
  RowEnd,
  Name,
  Link,
  Img,
}) => {
  const Card = css`
    background-color: #1a1a1a;
    z-index: 50;
    /* grid-column-start: ${ColStart};
    grid-column-end: ${ColEnd};
    grid-row-start: ${RowStart};
    grid-row-end: ${RowEnd}; */
    grid-column-start: span 1;
    grid-row-start: span 1;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
    background-image: url(/page/about/${Img});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    & > div {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > h2 {
      font-size: 37px;
      position: absolute;
      left: 32px;
      bottom: 32px;
    }
  `

  return (
    <div className={Card}>
      <div></div>
      <h2>{Name}</h2>
    </div>
  )
}

export default CardBookmark
