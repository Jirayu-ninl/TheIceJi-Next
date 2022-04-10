import { css } from '@emotion/css'

const Grid = css`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 96px 32px 64px 32px;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 480px) {
    padding: 96px 32px 32px 32px;
  }
  & > div {
    /* background-color: #1a1a1a; */
    border-radius: 20px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 32px 32px;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
        display: block;
        & > div {
            margin-bottom: 32px;
        }
    }
  }
`

const Dashboard = { Grid }
export default Dashboard