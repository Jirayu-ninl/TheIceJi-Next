import { css } from '@emotion/css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const CardSkills = () => {
  const Card = css`
    background-color: #1a1a1a;
    z-index: 50;
    /* grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2; */
    grid-column-start: span 2;
    grid-row-start: span 1;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transition-duration: 500ms;
    @media (min-width: 2500px) {
      grid-column-start: span 4;
    }
    @media(max-width: 1440px) {
      grid-column-start: span 4;
    }
    @media(max-width: 1025px) {
      grid-column-start: span 2;
    }
    &:hover {
      background-color: #212121;
      transition-duration: 250ms;
    }
    h1 {
      font-size: 27px;
      @media (min-width: 2500px) {
        font-size: 40px;
      }
      @media (max-width: 480px) {
        font-size: 20px;
      }
    }
  `
  const Content = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      margin-top: 16px;
    }
    @media (max-width: 480px) {
      margin-top: 16px;
      height: 320px;
      flex-wrap: wrap;
    }
    @media (max-width: 320px) {
      justify-content: center;
      height: 620px;
    }
  `

  const Progress = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
    text-align: center;
    @media (min-width: 2500px) {
      width: 400px;
    }
    @media (max-width: 480px) {
      width: 115px;
    }
    @media (max-width: 412px) {
      width: 80px;
    }
    @media (max-width: 320px) {
      margin: 12px 0;
    }
    & > div {
      width: 75px;
      position: relative;
      @media (min-width: 2500px) {
        width: 150px;
      }
      & > div {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: 2500px) {
          font-size: 30px;
        }
      }
    }
    & > h4 {
      font-size: 14px;
      padding-top: 12px;
      @media (min-width: 2500px) {
        font-size: 24px;
      }
      @media (max-width: 480px) {
        font-size: 10px;
      }
    }
    & > p {
      font-size: 8px;
      opacity: 0.4;
      @media (min-width: 2500px) {
        font-size: 18px;
      }
    }
  `

  const HideMobile = css`
    display: none;
    @media (max-width: 480px) {
      display: block;
    }
  `

  const SkillsProgressArr = [
    {
      Name: `Video & Motion`,
      Text: `Editing, Motion Graphics`,
      Percent: 100,
      key: 1,
    },
    {
      Name: `Sound & Music`,
      Text: `Editing, Mix & Mastering`,
      Percent: 80,
      key: 2,
    },
    {
      Name: `Graphics De.`,
      Text: `XD, Illustrator, Photoshop`,
      Percent: 62,
      key: 3,
    },
    {
      Name: `3D & LookDev`,
      Text: `Autodesk MAYA, vRay, Arnold`,
      Percent: 42,
      key: 4,
    },
  ]

  return (
    <div className={Card}>
      <h1>Other Skills</h1>
      <div className={Content}>
        {SkillsProgressArr.map((i) => (
          <div className={Progress} key={i.key}>
            <div>
              <div>
                <h4>{i.Percent}%</h4>
              </div>
              <CircularProgressbar
                value={i.Percent}
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  pathColor: '#9D9D9D',
                  trailColor: 'rgba(157, 157, 157, 0.05)',
                })}
              />
            </div>
            <h4>{i.Name}</h4>
            {/* <br className={HideMobile}/> */}
            <p>{i.Text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardSkills
