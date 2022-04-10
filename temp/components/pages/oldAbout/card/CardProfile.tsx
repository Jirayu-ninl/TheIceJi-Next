/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/css'

const CardProfile = () => {
  const Card = css`
    background-color: #1a1a1a;
    z-index: 50;
    /* grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3; */
    grid-row-start: span 2;
    grid-column-start: span 1;
    border-radius: 20px;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
    transition-duration: 500ms;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
      background-color: #212121;
      transition-duration: 250ms;
    }
  `
  const Header = css`
    & > .CardProfileCover {
      width: 100%;
    }
    & > .CardProfileAvatar {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: -50px;
    }
  `

  const content = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0 32px 0;
    min-height: 350px;
    @media (min-width: 2500px) {
      min-height: 600px;
    }
    @media (max-width: 768px) {
      height: 350px;
      width: 40vw;
    }
    @media (max-width: 480px) {
      height: 370px;
      width: 100%;
    }
  `

  const Name = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & > h2 {
      font-size: 24px;
      @media (min-width: 2500px) {
        font-size: 35px;
      }
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
    & > h3 {
      font-size: 12px;
      font-weight: 500;
      opacity: 0.6;
      transition-duration: 400ms;
      @media (min-width: 2500px) {
        font-size: 15px;
      }
      @media (max-width: 768px) {
        font-size: 10px;
      }
      & > span {
        opacity: 0.5;
        font-weight: 300;
      }
      &:hover {
        opacity: 1;
        transition-duration: 200ms;
      }
    }
  `

  const Static = css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4 {
        font-size: 47px;
        font-weight: 200;
        @media (min-width: 2500px) {
          font-size: 70px;
        }
      }
      h5 {
        font-size: 16px;
        @media (min-width: 2500px) {
          font-size: 24px;
        }
      }
      p {
        font-size: 10px;
        opacity: 0.6;
        @media (min-width: 2500px) {
          font-size: 14px;
        }
      }
    }
  `

  const Rank = css`
    width: 100%;
    padding: 0 32px;
    @media (max-width: 768px) {
      padding: 0 24px;
    }
    & h4 {
      padding-bottom: 8px;
      @media (min-width: 2500px) {
        font-size: 24px;
        padding-bottom: 16px;
        width: 100%;
        text-align: right;
      }
    }
  `

  const Progress = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 2500px) {
      display: block;
    }
    & > h6 {
      font-size: 12px;
      width: 110px;
      @media (min-width: 2500px) {
          font-size: 20px;
        }
    }
    & > p {
      text-align: right;
      width: 60px;
      font-size: 11px;
      @media (min-width: 2500px) {
          font-size: 15px;
          width: 100%;
        }
    }
  `

  const HobbiesArr = [
    { Name: `Coding`, Percent: 100, Bar: 100, Color: `#00FFBD`, Key: 0 },
    { Name: `Learning`, Percent: 80, Bar: (80 / 100) * 120, Color: `#F9D395`, Key: 1 },
    { Name: `Singing`, Percent: 60, Bar: (60 / 100) * 120, Color: `#FF5B31`, Key: 2 },
    { Name: `Coffee`, Percent: 50, Bar: (50 / 100) * 120, Color: `#31DCFF`, Key: 3 },
    { Name: `Travel`, Percent: 40, Bar: (40 / 100) * 120, Color: `#9177FF`, Key: 4 },
  ]

  return (
    <div className={Card}>
      <div className={Header}>
        <img
          className='CardProfileCover'
          alt='CardProfileCover'
          src='/page/about/Card_Profile_Cover@2x.png'
        />
        <div className='CardProfileAvatar'>
          <img alt='CardProfileAvatar' src='/page/about/Card_Profile_Avatar@2x.png' />
        </div>
      </div>
      <div className={content}>
        <div className={Name}>
          <h2>Jirayu Ninlapun</h2>
          <h3>
            Interactive Developer<span> in Bangkok</span>
          </h3>
        </div>
        <div className={Static}>
          <div>
            <h4>5</h4>
            <h5>Projects</h5>
            <p>in progress</p>
          </div>
          <div>
            <h4>4</h4>
            <h5>Teams</h5>
            <p>working with</p>
          </div>
        </div>
        <div className={Rank}>
          <h4>Hobbies</h4>
          {HobbiesArr.map((props) => (
            <div className={Progress} key={props.Key}>
              <h6 style={{ color: props.Color }}>{props.Name}</h6>
              <div
                className={css`
                  height: 5px;
                  width: 100%;
                  background-color: rgba(255, 255, 255, 0.1);
                  border-radius: 5px;
                  position: relative;
                  &:after {
                    content: '';
                    height: 5px;
                    width: ${props.Percent}%;
                    background-color: ${props.Color};
                    border-radius: 5px;
                    position: absolute;
                  }
                `}
              ></div>
              <p>{`${props.Percent}%`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardProfile
