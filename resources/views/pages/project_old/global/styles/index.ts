import { css } from '@emotion/css'

export const ContentContainer = css`
  display: flex;
  justify-content: center;
  & > div {
    width: 1200px;
    @media (max-width: 1199.98px) {
      width: 992px;
      padding: 0 20px 80px 20px;
    }
    @media (max-width: 991.98px) {
      width: 768px;
    }
    @media (max-width: 767.98px) {
      width: 480px;
      padding: 32px 20px 80px 20px;
    }
    @media (max-width: 479.98px) {
      padding: 48px 20px 32px 20px;
    }
  }
`
