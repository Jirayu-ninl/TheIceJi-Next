import { css } from '@emotion/css'
import Dashboard from './dashboard'

const Panel = css`
  width: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 50;
  & > div {
    width: 100%;
    height: 670px;
    border-radius: 0 20px 20px 0;
    background-color: #1a1a1a;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
    @media (max-width: 768px) {
      height: 550px;
    }
    @media (max-width: 480px) {
      height: 450px;
    }
    @media (max-width: 320px){
      height: 320px;
    }
    & img {
      @media (max-width: 320px) {
        display: none;
      }
    }
  }
`
const About = { Panel }
const CSS = { About, Dashboard }
export default CSS