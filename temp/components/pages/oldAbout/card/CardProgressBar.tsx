import { css } from '@emotion/css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const CardProgressBar = (Props) => {
  const {
    ColStart,
    ColEnd,
    RowStart,
    RowEnd,
    Value,
    Color,
    Title,
    Sub,
    BG,
    ID,
  } = Props

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
    transition-duration: 500ms;
    &:hover {
      background-color: #212121;
      transition-duration: 250ms;
    }
    @media (max-width: 480px) {
      padding: 40px 0;
    }
    & > div {
      width: 110px;
      position: relative;
      @media (min-width: 2500px) {
        width: 200px;
        font-size: 50px;
        color: rgba(255, 255, 255, 0.7);
      }
      & > div {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    & > h4 {
      padding-top: 16px;
      font-size: 20px;
      @media (min-width: 2500px) {
        font-size: 30px;
      }
    }
    & > p {
      font-size: 10px;
      opacity: 0.4;
      @media (min-width: 2500px) {
          font-size: 20px;
        }
    }
  `
  return (
    <div className={Card}>
      <div>
        <div>
          <h4>{`${Value}%`}</h4>
        </div>
        <CircularProgressbar
          value={Value}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: Color,
            trailColor: BG,
          })}
        />
      </div>
      <h4>{Title}</h4>
      <p>{Sub}</p>
    </div>
  )
}

export default CardProgressBar
