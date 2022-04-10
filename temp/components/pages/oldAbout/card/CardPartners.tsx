import { css } from '@emotion/css'

const CardPartners = () => {
  const Card = css`
    background-color: #1a1a1a;
    z-index: 50;
    /* grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 4; */
    grid-column-start: span 2;
    grid-row-start: span 1;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
    padding: 16px;
    text-align: center;
    transition-duration: 500ms;
    &:hover {
      background-color: #212121;
      transition-duration: 250ms;
    }
    & > h1 {
      fontSize: 44px;
      padding-bottom: 8px;
      @media(max-width: 1440px) {
        fontSize: 30px;
      }
      @media (max-width: 480px) {
        fontSize: 20px;
      }
    }
  `
  const Content = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 480px) {
        flex-direction: column;
      }
      & > svg {
        margin: 8px;
        opacity: 0.2;
        transition-duration: 750ms;
        @media (min-width: 2500px) {
          transform: scale(1.5);
          margin: 32px 64px;
        }
        @media(max-width: 1440px) {
          transform: scale(0.6);
          margin: 6px 0;
        }
        @media (max-width: 480px) {
          margin: 16px 0;
        }
        &:hover {
          opacity: 1;
          transition-duration: 200ms;
        }
      }
    }
  `

  const LogoGrowth = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='201'
      height='40.009'
      viewBox='0 0 201 40.009'
    >
      <g id='GV_Logo-White' transform='translate(-34.39 -81.92)'>
        <text
          id='Growth'
          transform='translate(34.39 111.92)'
          fill='#fff'
          fontSize='29'
          fontFamily='Poppins-Bold, Poppins'
          fontWeight='700'
        >
          <tspan x='0' y='0'>
            Growth
          </tspan>
        </text>
        <text
          id='alley'
          transform='translate(166.39 111.92)'
          fill='#fff'
          fontSize='29'
          fontFamily='Poppins-Regular, Poppins'
        >
          <tspan x='0' y='0'>
            alley
          </tspan>
        </text>
        <text
          id='V'
          transform='translate(144.939 111.929)'
          fill='#22b573'
          fontSize='29'
          fontFamily='Poppins-Bold, Poppins'
          fontWeight='700'
        >
          <tspan x='0' y='0'>
            V
          </tspan>
        </text>
      </g>
    </svg>
  )

  const LogoNextzy = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='112'
      height='22'
      viewBox='0 0 112 22'
    >
      <g id='Nextzy' transform='translate(-1 -1)'>
        <path
          id='Path_3433'
          data-name='Path 3433'
          d='M106.236,1c-1.891,2.34-3.84,4.567-5.731,6.906L94.83,1H49.377c-1.95,2.34-3.955,4.567-5.9,6.906L37.683,1H17.566V15.37a63.417,63.417,0,0,0-3.783-6.294L8.165,1H1V23H6.617V16.372c0-3.564-.057-6.683-.286-9.635H6.5a66.651,66.651,0,0,0,4.7,7.741L16.992,23H37.684l5.846-6.906L49.377,23h6.935L46.97,12.028l5.79-6.85h6.878V23h6.133V5.177H83.138l-12.9,15.094V23H93.913V18.878H78.437v-.11L90.76,4.285l6.65,8.02V23h6.247V12.306L113,1ZM34.187,18.934H23.641V14.09h8.6v3.62l4.815-5.681L32.238,6.348v3.62h-8.6v-4.9H34.187l5.847,6.906-5.847,6.962Z'
          fill='#fff'
        />
      </g>
    </svg>
  )

  const LogoArise = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='109.788'
      height='32.83'
      viewBox='0 0 109.788 32.83'
    >
      <g id='_2' data-name='2' transform='translate(-25.8 -199.7)'>
        <path
          id='Path_3449'
          data-name='Path 3449'
          d='M27.718,723.16h.445L30.08,727.4H29.57l-.49-1.112H26.792l-.5,1.112H25.8Zm1.172,2.7-.954-2.146-.964,2.146Z'
          transform='translate(0 -494.938)'
          fill='#fff'
        />
        <path
          id='Path_3450'
          data-name='Path 3450'
          d='M229.83,723.71h1.807a1.648,1.648,0,0,1,1.2.421,1.137,1.137,0,0,1,.327.829v.012a1.228,1.228,0,0,1-1.144,1.226l1.292,1.718h-.581l-1.22-1.635h-1.2v1.635h-.475Zm1.766,2.145c.625,0,1.082-.327,1.082-.865v-.011c0-.523-.4-.829-1.076-.829h-1.3v1.706Z'
          transform='translate(-192.913 -495.459)'
          fill='#fff'
        />
        <path
          id='Path_3451'
          data-name='Path 3451'
          d='M420.62,723.71h.475v4.206h-.475Z'
          transform='translate(-373.308 -495.459)'
          fill='#fff'
        />
        <path
          id='Path_3452'
          data-name='Path 3452'
          d='M557.15,726.254l.295-.349a1.979,1.979,0,0,0,1.442.6c.571,0,.937-.3.937-.715v-.012c0-.391-.21-.607-1.094-.8-.968-.21-1.412-.523-1.412-1.214v-.012A1.247,1.247,0,0,1,558.7,722.6a2.194,2.194,0,0,1,1.478.517l-.276.367a1.846,1.846,0,0,0-1.214-.456c-.553,0-.9.294-.9.679v.012c0,.4.21.625,1.142.817.938.21,1.37.545,1.37,1.19v.012c0,.721-.6,1.189-1.436,1.189A2.438,2.438,0,0,1,557.15,726.254Z'
          transform='translate(-502.399 -494.409)'
          fill='#fff'
        />
        <path
          id='Path_3453'
          data-name='Path 3453'
          d='M743.1,723.71h3.04v.433h-2.566v1.436h2.3v.436h-2.3v1.471h2.6v.433H743.1Z'
          transform='translate(-678.217 -495.459)'
          fill='#fff'
        />
        <path
          id='Path_3454'
          data-name='Path 3454'
          d='M1065.57,726.254l.294-.349a1.981,1.981,0,0,0,1.442.6c.571,0,.938-.3.938-.715v-.012c0-.391-.21-.607-1.094-.8-.968-.21-1.412-.523-1.412-1.214v-.012a1.247,1.247,0,0,1,1.382-1.148,2.195,2.195,0,0,1,1.478.517l-.277.367a1.846,1.846,0,0,0-1.214-.456c-.552,0-.9.294-.9.679v.012c0,.4.21.625,1.144.817.937.21,1.37.545,1.37,1.19v.012c0,.721-.6,1.189-1.436,1.189A2.438,2.438,0,0,1,1065.57,726.254Z'
          transform='translate(-983.116 -494.409)'
          fill='#fff'
        />
        <path
          id='Path_3455'
          data-name='Path 3455'
          d='M1247,724.2h-1.417v-.436h3.311v.436h-1.417v3.768H1247Z'
          transform='translate(-1153.318 -495.506)'
          fill='#fff'
        />
        <path
          id='Path_3456'
          data-name='Path 3456'
          d='M1431.28,726.156V723.71h.475v2.413c0,.914.475,1.417,1.286,1.417.775,0,1.268-.469,1.268-1.388V723.71h.475v2.409a1.754,1.754,0,1,1-3.5.036Z'
          transform='translate(-1328.9 -495.459)'
          fill='#fff'
        />
        <path
          id='Path_3457'
          data-name='Path 3457'
          d='M1626.48,723.71h1.46a2.1,2.1,0,0,1,2.234,2.091v.012a2.105,2.105,0,0,1-2.234,2.1h-1.46Zm.475.436v3.329h.986a1.625,1.625,0,0,0,1.744-1.653v-.012a1.638,1.638,0,0,0-1.744-1.665Z'
          transform='translate(-1513.464 -495.459)'
          fill='#fff'
        />
        <path
          id='Path_3458'
          data-name='Path 3458'
          d='M1823.78,723.71h.475v4.206h-.475Z'
          transform='translate(-1700.014 -495.459)'
          fill='#fff'
        />
        <path
          id='Path_3459'
          data-name='Path 3459'
          d='M1962,724.568v-.012a2.146,2.146,0,1,1,4.291-.012v.012a2.146,2.146,0,1,1-4.291.012Zm3.8,0v-.012a1.672,1.672,0,0,0-1.659-1.736,1.654,1.654,0,0,0-1.649,1.724v.012a1.672,1.672,0,0,0,1.659,1.737,1.653,1.653,0,0,0,1.647-1.724Z'
          transform='translate(-1830.703 -494.201)'
          fill='#fff'
        />
        <path
          id='Path_3460'
          data-name='Path 3460'
          d='M29.192,223.769a1.55,1.55,0,0,1-2.49,0,1.549,1.549,0,0,1,0-2.49L47.416,200.6a2.334,2.334,0,0,1,1.678-.9,1.534,1.534,0,0,1,1.713,1.713v21.242a1.766,1.766,0,1,1-3.532,0V205.722Z'
          transform='translate(-0.26)'
          fill='#fff'
        />
        <path
          id='Path_3461'
          data-name='Path 3461'
          d='M524.01,213.828h-8.088v8.827a1.766,1.766,0,1,1-3.532,0V201.466a1.561,1.561,0,0,1,1.766-1.766h15.893q7.064,0,7.064,7.064,0,7.047-7.064,7.064H528.99l7.505,7.488A1.761,1.761,0,1,1,534,223.8Zm6.039-3.532q3.532,0,3.532-3.532t-3.532-3.532H515.922V210.3Z'
          transform='translate(-460.077 0)'
          fill='#fff'
        />
        <path
          id='Path_3462'
          data-name='Path 3462'
          d='M998.54,201.466a1.766,1.766,0,0,1,3.532,0v21.189a1.766,1.766,0,1,1-3.532,0Z'
          transform='translate(-919.739 0)'
          fill='#fff'
        />
        <path
          id='Path_3463'
          data-name='Path 3463'
          d='M1113.43,220.891q3.531,0,3.532-3.532t-3.532-3.531h-10.6q-7.063,0-7.064-7.064t7.064-7.065h15.894a1.766,1.766,0,0,1,0,3.532h-15.894q-3.532,0-3.532,3.532t3.532,3.532h10.6q7.063,0,7.063,7.064t-7.063,7.064h-15.894a1.766,1.766,0,0,1,0-3.532Z'
          transform='translate(-1011.671 0)'
          fill='#fff'
        />
        <path
          id='Path_3464'
          data-name='Path 3464'
          d='M1581.93,201.466a1.561,1.561,0,0,1,1.766-1.766h21.191a1.766,1.766,0,0,1,0,3.532H1583.7A1.561,1.561,0,0,1,1581.93,201.466Zm0,10.6a1.561,1.561,0,0,1,1.766-1.766h21.191a1.766,1.766,0,0,1,0,3.533H1583.7A1.561,1.561,0,0,1,1581.93,212.061Zm0,10.6a1.561,1.561,0,0,1,1.766-1.766h21.191a1.766,1.766,0,0,1,0,3.532H1583.7a1.562,1.562,0,0,1-1.766-1.768Z'
          transform='translate(-1471.342 0)'
          fill='#fff'
        />
      </g>
    </svg>
  )

  const LogoRealMotion = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='75.025'
      height='32.83'
      viewBox='0 0 75.025 32.83'
    >
      <g id='RealMotion_Color' transform='translate(-122.08 -155.22)'>
        <path
          id='Path_3434'
          data-name='Path 3434'
          d='M649.25,361.89l.226-5.26,4.176,2.376-.154.656Z'
          transform='translate(-462.672 -176.768)'
          fill='#231f20'
        />
        <path
          id='Path_3435'
          data-name='Path 3435'
          d='M646.9,359.158l.264-6.158,4.732,2.692-.229.969Zm.763-5.261-.188,4.356,3.729-1.958.08-.341Z'
          transform='translate(-460.609 -173.582)'
          fill='#231f20'
        />
        <path
          id='Path_3436'
          data-name='Path 3436'
          d='M602.493,344.647h0a1.115,1.115,0,0,1-1.113-1.115v-8.467a1.112,1.112,0,0,1,1.614-.993l8.391,4.234a1.112,1.112,0,0,1,0,1.986l-8.391,4.233A1.094,1.094,0,0,1,602.493,344.647Zm0-9.981a.4.4,0,0,0-.4.4v8.467a.4.4,0,0,0,.4.4h0a.39.39,0,0,0,.179-.044l8.391-4.233a.4.4,0,0,0,0-.715l-8.391-4.232A.389.389,0,0,0,602.493,334.666Z'
          transform='translate(-420.658 -156.865)'
          fill='#231f20'
        />
        <path
          id='Path_3437'
          data-name='Path 3437'
          d='M600.571,342.99a1.384,1.384,0,0,1-1.381-1.383v-8.467a1.383,1.383,0,0,1,1.381-1.381,1.36,1.36,0,0,1,.62.149l8.392,4.234a1.379,1.379,0,0,1,0,2.463l-8.391,4.234A1.36,1.36,0,0,1,600.571,342.99Zm0-10.7a.848.848,0,0,0-.845.847v8.467a.847.847,0,0,0,.845.847h0a.807.807,0,0,0,.378-.093l8.392-4.232a.845.845,0,0,0,0-1.509l-8.391-4.233A.84.84,0,0,0,600.571,332.295Zm0,9.981a.669.669,0,0,1-.669-.668v-8.467a.669.669,0,0,1,.669-.668.679.679,0,0,1,.3.071l8.391,4.234a.667.667,0,0,1,0,1.192l-8.391,4.234A.662.662,0,0,1,600.571,342.276Zm0-9.268a.135.135,0,0,0-.132.133v8.467a.132.132,0,0,0,.132.132.168.168,0,0,0,.06-.013l8.389-4.234a.135.135,0,0,0,0-.239l-8.386-4.231a.138.138,0,0,0-.064-.01Z'
          transform='translate(-418.736 -154.941)'
          fill='#fff'
        />
        <path
          id='Path_3438'
          data-name='Path 3438'
          d='M647.451,344.646h0a1.115,1.115,0,0,1-1.111-1.115v-8.467a1.111,1.111,0,0,1,1.613-.993l8.392,4.234a1.112,1.112,0,0,1,0,1.986l-8.392,4.233A1.091,1.091,0,0,1,647.451,344.646Zm0-9.981a.4.4,0,0,0-.4.4v8.467a.4.4,0,0,0,.4.4h0a.4.4,0,0,0,.181-.044l8.391-4.233a.4.4,0,0,0,0-.715l-8.391-4.232A.4.4,0,0,0,647.451,334.665Z'
          transform='translate(-460.117 -156.864)'
          fill='#231f20'
        />
        <path
          id='Path_3439'
          data-name='Path 3439'
          d='M645.52,342.99a1.384,1.384,0,0,1-1.38-1.383v-8.467a1.383,1.383,0,0,1,1.38-1.381,1.366,1.366,0,0,1,.623.149l8.391,4.234a1.379,1.379,0,0,1,0,2.463l-8.391,4.234a1.373,1.373,0,0,1-.623.149Zm0-10.7a.845.845,0,0,0-.843.847v8.467a.844.844,0,0,0,.843.847.818.818,0,0,0,.38-.093l8.392-4.232a.846.846,0,0,0,0-1.509l-8.392-4.233A.825.825,0,0,0,645.52,332.295Zm0,9.981a.668.668,0,0,1-.667-.668v-8.467a.668.668,0,0,1,.667-.668.681.681,0,0,1,.3.071l8.392,4.234a.668.668,0,0,1,0,1.192l-8.391,4.234A.674.674,0,0,1,645.52,342.276Zm0-9.268a.133.133,0,0,0-.131.133v8.467a.131.131,0,0,0,.131.132.148.148,0,0,0,.06-.013l8.391-4.234a.13.13,0,0,0,0-.234l-8.391-4.236a.13.13,0,0,0-.06-.01Z'
          transform='translate(-458.187 -154.941)'
          fill='#fff'
        />
        <path
          id='Path_3440'
          data-name='Path 3440'
          d='M122.08,156.24h9.12c2.95,0,4.989.71,6.285,1.926a5.275,5.275,0,0,1,1.713,4.13v.051a5.634,5.634,0,0,1-3.968,5.448l4.6,6.186h-6.179l-3.887-5.372h-2.342v5.372H122.08Zm8.873,8.515c1.818,0,2.867-.81,2.867-2.1V162.6c0-1.395-1.1-2.1-2.894-2.1h-3.5v4.257Z'
          transform='translate(0 -0.895)'
          fill='#673090'
        />
        <path
          id='Path_3441'
          data-name='Path 3441'
          d='M284,156.24h15.52v4.181H289.3v2.692h9.264v3.877H289.3V169.8h10.365v4.182H284Z'
          transform='translate(-142.109 -0.895)'
          fill='#673090'
        />
        <path
          id='Path_3442'
          data-name='Path 3442'
          d='M429.882,155.22h5.153l8.213,17.863h-5.733l-1.4-3.164h-7.44l-1.379,3.168H421.67Zm4.685,10.871-2.147-5.043-2.179,5.043Z'
          transform='translate(-262.936)'
          fill='#673090'
        />
        <path
          id='Path_3443'
          data-name='Path 3443'
          d='M613.36,156.24h5.347v13.429h9.343v4.308H613.36Z'
          transform='translate(-431.173 -0.895)'
          fill='#673090'
        />
        <path
          id='Path_3444'
          data-name='Path 3444'
          d='M122.08,332.39H125.5l2.782,4.219,2.783-4.219h3.418v10.9h-3.214v-6.258l-2.985,4.266h-.066l-2.963-4.234v6.226H122.08Z'
          transform='translate(0 -155.494)'
          fill='#fff'
        />
        <path
          id='Path_3445'
          data-name='Path 3445'
          d='M237.08,336.307v-.031c0-3.128,2.7-5.666,6.3-5.666s6.269,2.506,6.269,5.628v.033c0,3.127-2.7,5.666-6.3,5.666S237.08,339.435,237.08,336.307Zm9.27,0v-.031a2.93,2.93,0,0,0-3-2.943,2.86,2.86,0,0,0-2.951,2.909v.033a2.923,2.923,0,0,0,2.984,2.946A2.878,2.878,0,0,0,246.35,336.307Z'
          transform='translate(-100.93 -153.931)'
          fill='#fff'
        />
        <path
          id='Path_3446'
          data-name='Path 3446'
          d='M347.692,335.034h-3.5V332.39h10.236v2.644h-3.5v8.25h-3.234Z'
          transform='translate(-194.935 -155.494)'
          fill='#fff'
        />
        <path
          id='Path_3447'
          data-name='Path 3447'
          d='M440,332.39h3.25v10.9H440Z'
          transform='translate(-279.023 -155.494)'
          fill='#fff'
        />
        <path
          id='Path_3448'
          data-name='Path 3448'
          d='M480.72,336.307v-.031c0-3.128,2.7-5.666,6.3-5.666s6.269,2.506,6.269,5.628v.033c0,3.127-2.7,5.666-6.3,5.666S480.72,339.435,480.72,336.307Zm9.27,0v-.031a2.93,2.93,0,0,0-3-2.943,2.86,2.86,0,0,0-2.951,2.909v.033a2.923,2.923,0,0,0,2.984,2.946A2.878,2.878,0,0,0,489.99,336.307Z'
          transform='translate(-314.761 -153.931)'
          fill='#fff'
        />
      </g>
    </svg>
  )

  const LogoAgital = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='137.213'
      height='36.91'
      viewBox='0 0 137.213 36.91'
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1='28.152'
          y1='-21.006'
          x2='1.438'
          y2='-0.229'
          gradientUnits='objectBoundingBox'
        >
          <stop offset='0' stopColor='#f7941e' />
          <stop offset='1' stopColor='#f15a29' />
        </linearGradient>
        <linearGradient
          id='linear-gradient-2'
          x1='34.292'
          y1='-25.772'
          x2='3.765'
          y2='-2.027'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-3'
          x1='31.633'
          y1='-23.714'
          x2='1.102'
          y2='0.031'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-4'
          x1='24.232'
          y1='-17.957'
          x2='-3.134'
          y2='3.326'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-5'
          x1='31.348'
          y1='-23.48'
          x2='0.816'
          y2='0.265'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-6'
          x1='25.571'
          y1='-19'
          x2='-1.14'
          y2='1.777'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-7'
          x1='28.619'
          y1='-21.374'
          x2='-1.908'
          y2='2.371'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-8'
          x1='21.802'
          y1='-16.07'
          x2='-5.561'
          y2='5.213'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-9'
          x1='21.53'
          y1='-15.856'
          x2='-5.832'
          y2='5.424'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-10'
          x1='21.568'
          y1='-15.877'
          x2='-5.83'
          y2='5.432'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-11'
          x1='28.333'
          y1='-21.14'
          x2='-2.194'
          y2='2.605'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-12'
          x1='28.143'
          y1='-21.006'
          x2='1.432'
          y2='-0.232'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-13'
          x1='34.278'
          y1='-25.772'
          x2='3.748'
          y2='-2.027'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-14'
          x1='31.633'
          y1='-23.728'
          x2='1.105'
          y2='0.014'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-15'
          x1='31.33'
          y1='-23.479'
          x2='0.803'
          y2='0.265'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-16'
          x1='21.802'
          y1='-16.07'
          x2='-5.564'
          y2='5.213'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-17'
          x1='21.533'
          y1='-15.857'
          x2='-5.829'
          y2='5.424'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-18'
          x1='28.32'
          y1='-21.139'
          x2='-2.208'
          y2='2.605'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-19'
          x1='-0.004'
          y1='0.5'
          x2='0.999'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-20'
          x1='0'
          y1='0.5'
          x2='1.001'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-21'
          x1='0'
          y1='0.504'
          x2='1.003'
          y2='0.504'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-22'
          x1='0'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-23'
          x1='0'
          y1='0.503'
          x2='1'
          y2='0.503'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-24'
          x1='-0.001'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-26'
          x1='-0.001'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-28'
          x1='0.002'
          y1='0.501'
          x2='1.001'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-29'
          x1='-0.001'
          y1='0.5'
          x2='0.998'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-30'
          x1='0'
          y1='0.501'
          x2='0.998'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-31'
          x1='0.001'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-34'
          x1='0.002'
          y1='0.498'
          x2='1'
          y2='0.498'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-36'
          x1='-0.001'
          y1='0.5'
          x2='0.998'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-37'
          x1='0'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-40'
          x1='0'
          y1='0.5'
          x2='1.001'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-41'
          x1='0'
          y1='0.5'
          x2='1.001'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-42'
          x1='0'
          y1='0.501'
          x2='1.001'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-43'
          x1='-0.002'
          y1='0.501'
          x2='0.996'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-44'
          x1='-0.001'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-46'
          x1='0.001'
          y1='0.501'
          x2='1'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-47'
          x1='0.011'
          y1='0.5'
          x2='1.011'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-48'
          x1='0'
          y1='0.498'
          x2='1'
          y2='0.498'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-49'
          x1='0'
          y1='0.5'
          x2='1.001'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-50'
          x1='0'
          y1='0.501'
          x2='0.994'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-51'
          x1='0'
          y1='0.499'
          x2='1'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-52'
          x1='0'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-53'
          x1='0'
          y1='0.5'
          x2='0.999'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-54'
          x1='0'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-55'
          x1='0'
          y1='0.5'
          x2='0.999'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-56'
          x1='0'
          y1='0.499'
          x2='1'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-57'
          x1='0'
          y1='0.499'
          x2='1'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-58'
          x1='0'
          y1='0.5'
          x2='0.999'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-59'
          x1='-0.002'
          y1='0.501'
          x2='1'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-60'
          x1='0'
          y1='0.504'
          x2='1'
          y2='0.504'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-61'
          x1='0.001'
          y1='0.5'
          x2='0.999'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-62'
          x1='0.002'
          y1='0.5'
          x2='1.002'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-64'
          x1='-0.002'
          y1='0.501'
          x2='0.997'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-65'
          x1='0.001'
          y1='0.499'
          x2='1'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-66'
          x1='0'
          y1='0.498'
          x2='1'
          y2='0.498'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-67'
          x1='0'
          y1='0.498'
          x2='1'
          y2='0.498'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-68'
          x1='0.001'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-69'
          x1='0'
          y1='0.498'
          x2='1'
          y2='0.498'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-70'
          x1='0'
          y1='0.501'
          x2='1'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-71'
          x1='0'
          y1='0.499'
          x2='0.999'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-73'
          x1='0.001'
          y1='0.5'
          x2='1.002'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-75'
          x1='-0.003'
          y1='0.5'
          x2='0.997'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-78'
          x1='0'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-80'
          x1='0.001'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-81'
          x1='0'
          y1='0.5'
          x2='0.997'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-82'
          x1='0.001'
          y1='0.499'
          x2='1'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-84'
          x1='-0.001'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-85'
          x1='-0.004'
          y1='0.496'
          x2='1.004'
          y2='0.496'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-91'
          x1='-0.001'
          y1='0.5'
          x2='0.999'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-92'
          x1='0'
          y1='0.499'
          x2='0.999'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-93'
          x1='0'
          y1='0.499'
          x2='0.999'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-95'
          x1='0'
          y1='0.499'
          x2='1'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-96'
          x1='0'
          y1='0.501'
          x2='0.998'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-97'
          x1='0.001'
          y1='0.5'
          x2='1.001'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-99'
          x1='0'
          y1='0.501'
          x2='1'
          y2='0.501'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-101'
          x1='-0.005'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-102'
          x1='-0.001'
          y1='0.499'
          x2='1'
          y2='0.499'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-103'
          x1='0'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-104'
          x1='-0.015'
          y1='0.502'
          x2='1'
          y2='0.502'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-105'
          x1='-0.001'
          y1='0.5'
          x2='1'
          y2='0.5'
          xlinkHref='#linear-gradient'
        />
        <linearGradient
          id='linear-gradient-106'
          x1='0'
          y1='0.506'
          x2='1'
          y2='0.506'
          xlinkHref='#linear-gradient'
        />
      </defs>
      <g id='Agital_Color' transform='translate(-4 -3.42)'>
        <path
          id='Path_3465'
          data-name='Path 3465'
          d='M848.372,71.705a.263.263,0,1,0-.263-.263A.263.263,0,0,0,848.372,71.705Z'
          transform='translate(-712.142 -57.166)'
          fill='url(#linear-gradient)'
        />
        <path
          id='Path_3466'
          data-name='Path 3466'
          d='M838.236,71.85a.23.23,0,1,0-.167-.065.23.23,0,0,0,.167.065Z'
          transform='translate(-703.613 -57.344)'
          fill='url(#linear-gradient-2)'
        />
        <path
          id='Path_3467'
          data-name='Path 3467'
          d='M844.108,63.3a.23.23,0,1,0-.228-.23A.23.23,0,0,0,844.108,63.3Z'
          transform='translate(-708.574 -50.13)'
          fill='url(#linear-gradient-3)'
        />
        <path
          id='Path_3468'
          data-name='Path 3468'
          d='M858.685,53.853a.256.256,0,1,0-.255-.253A.256.256,0,0,0,858.685,53.853Z'
          transform='translate(-720.849 -42.116)'
          fill='url(#linear-gradient-4)'
        />
        <path
          id='Path_3469'
          data-name='Path 3469'
          d='M838.236,53.97a.23.23,0,1,0-.165-.064.23.23,0,0,0,.165.064Z'
          transform='translate(-703.613 -42.259)'
          fill='url(#linear-gradient-5)'
        />
        <path
          id='Path_3470'
          data-name='Path 3470'
          d='M848.372,53.825a.263.263,0,1,0-.263-.26.263.263,0,0,0,.263.26Z'
          transform='translate(-712.142 -42.082)'
          fill='url(#linear-gradient-6)'
        />
        <path
          id='Path_3471'
          data-name='Path 3471'
          d='M844.108,45.03a.23.23,0,1,0-.164-.07A.23.23,0,0,0,844.108,45.03Z'
          transform='translate(-708.573 -34.717)'
          fill='url(#linear-gradient-7)'
        />
        <path
          id='Path_3472'
          data-name='Path 3472'
          d='M864.514,44.913a.256.256,0,1,0-.183-.078A.257.257,0,0,0,864.514,44.913Z'
          transform='translate(-725.767 -34.573)'
          fill='url(#linear-gradient-8)'
        />
        <path
          id='Path_3473'
          data-name='Path 3473'
          d='M858.685,35.583a.256.256,0,1,0-.255-.256A.256.256,0,0,0,858.685,35.583Z'
          transform='translate(-720.849 -26.702)'
          fill='url(#linear-gradient-9)'
        />
        <path
          id='Path_3474'
          data-name='Path 3474'
          d='M878.29,35.692a.286.286,0,1,0-.291-.278A.286.286,0,0,0,878.29,35.692Z'
          transform='translate(-737.359 -26.744)'
          fill='url(#linear-gradient-10)'
        />
        <path
          id='Path_3475'
          data-name='Path 3475'
          d='M838.236,35.7a.23.23,0,1,0-.167-.065A.23.23,0,0,0,838.236,35.7Z'
          transform='translate(-703.613 -26.846)'
          fill='url(#linear-gradient-11)'
        />
        <path
          id='Path_3476'
          data-name='Path 3476'
          d='M831.583,63.105a.263.263,0,1,0-.263-.263A.263.263,0,0,0,831.583,63.105Z'
          transform='translate(-697.977 -49.911)'
          fill='url(#linear-gradient-12)'
        />
        <path
          id='Path_3477'
          data-name='Path 3477'
          d='M814.028,61.68a.23.23,0,1,0-.228-.228.23.23,0,0,0,.228.228Z'
          transform='translate(-683.196 -48.764)'
          fill='url(#linear-gradient-13)'
        />
        <path
          id='Path_3478'
          data-name='Path 3478'
          d='M822.988,55.52a.23.23,0,1,0-.228-.23A.23.23,0,0,0,822.988,55.52Z'
          transform='translate(-690.756 -43.567)'
          fill='url(#linear-gradient-14)'
        />
        <path
          id='Path_3479'
          data-name='Path 3479'
          d='M814.028,44.97a.23.23,0,1,0-.228-.227A.23.23,0,0,0,814.028,44.97Z'
          transform='translate(-683.196 -34.666)'
          fill='url(#linear-gradient-15)'
        />
        <path
          id='Path_3480'
          data-name='Path 3480'
          d='M828.144,44.913a.256.256,0,1,0-.182-.078A.256.256,0,0,0,828.144,44.913Z'
          transform='translate(-695.083 -34.573)'
          fill='url(#linear-gradient-16)'
        />
        <path
          id='Path_3480'
          data-name='Path 3480'
          d='M822.306,35.583a.256.256,0,1,0-.256-.256A.256.256,0,0,0,822.306,35.583Z'
          transform='translate(-690.157 -26.702)'
          fill='url(#linear-gradient-17)'
        />
        <path
          id='Path_3482'
          data-name='Path 3482'
          d='M805.81,35.7a.23.23,0,1,0-.23-.23A.23.23,0,0,0,805.81,35.7Z'
          transform='translate(-676.262 -26.845)'
          fill='url(#linear-gradient-18)'
        />
        <path
          id='Path_3483'
          data-name='Path 3483'
          d='M249.133,105.144l-.805-1.8H245.12l-.791,1.8H243.4l3.344-7.5,3.318,7.5Zm-2.4-5.556-1.243,2.936h2.484Z'
          transform='translate(-201.972 -79.49)'
          fill='#f15a29'
        />
        <path
          id='Path_3484'
          data-name='Path 3484'
          d='M351.956,105.035a3.113,3.113,0,0,1-2.4,1.01,3.31,3.31,0,0,1-2.512-1.094,3.921,3.921,0,0,1,.028-5.284,3.358,3.358,0,0,1,2.566-1.119,3.528,3.528,0,0,1,2.853,1.393l-.6.6a2.756,2.756,0,0,0-2.211-1.174,2.594,2.594,0,0,0-1.993.858,2.867,2.867,0,0,0-.793,2.057,2.955,2.955,0,0,0,.782,2.032,2.472,2.472,0,0,0,1.939.911,2.326,2.326,0,0,0,1.563-.636,1.92,1.92,0,0,0,.71-1.493h-1.793v-.819h2.77v.288A3.535,3.535,0,0,1,351.956,105.035Z'
          transform='translate(-288.558 -80.254)'
          fill='#f15a29'
        />
        <path
          id='Path_3485'
          data-name='Path 3485'
          d='M468.23,106.747V99.54h.872v7.207Z'
          transform='translate(-391.653 -81.093)'
          fill='#f15a29'
        />
        <path
          id='Path_3486'
          data-name='Path 3486'
          d='M563.331,100.358v6.39h-.86v-6.39H560.82V99.54H565v.818Z'
          transform='translate(-469.767 -81.093)'
          fill='#fff'
        />
        <path
          id='Path_3487'
          data-name='Path 3487'
          d='M661.738,105.144l-.805-1.8H657.72l-.782,1.8H656l3.344-7.5,3.318,7.5Zm-2.4-5.556-1.241,2.936h2.484Z'
          transform='translate(-550.067 -79.49)'
          fill='#fff'
        />
        <path
          id='Path_3488'
          data-name='Path 3488'
          d='M761.73,106.747V99.54h.888v6.388h2.125v.819Z'
          transform='translate(-639.267 -81.093)'
          fill='#fff'
        />
        <path
          id='Path_3489'
          data-name='Path 3489'
          d='M4.633,234.61a.686.686,0,0,0-.289.063l-.344.7H5.338v-.063A.705.705,0,0,0,4.633,234.61Z'
          transform='translate(0 -195.046)'
          fill='url(#linear-gradient-19)'
        />
        <path
          id='Path_3490'
          data-name='Path 3490'
          d='M23.682,234.11a.782.782,0,0,0-.782.782v.063h1.563v-.063A.782.782,0,0,0,23.682,234.11Z'
          transform='translate(-15.945 -194.624)'
          fill='url(#linear-gradient-20)'
        />
        <path
          id='Path_3491'
          data-name='Path 3491'
          d='M183.867,230.43a1.363,1.363,0,0,0-.427.069,8.41,8.41,0,0,0,1.563.782v-.069A1.221,1.221,0,0,0,183.867,230.43Z'
          transform='translate(-151.386 -191.519)'
          fill='url(#linear-gradient-21)'
        />
        <path
          id='Path_3492'
          data-name='Path 3492'
          d='M43.12,233.61a.86.86,0,0,0-.86.86v.063h1.72v-.063A.86.86,0,0,0,43.12,233.61Z'
          transform='translate(-32.278 -194.202)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3493'
          data-name='Path 3493'
          d='M82.98,233.454a1.016,1.016,0,0,0-2.02.156v.063h.156A7.927,7.927,0,0,0,82.98,233.454Z'
          transform='translate(-64.928 -193.347)'
          fill='url(#linear-gradient-23)'
        />
        <path
          id='Path_3494'
          data-name='Path 3494'
          d='M63.5,234.048a.938.938,0,1,0-1.876,0v.063H63.5A.417.417,0,0,1,63.5,234.048Z'
          transform='translate(-48.612 -193.78)'
          fill='url(#linear-gradient-24)'
        />
        <path
          id='Path_3495'
          data-name='Path 3495'
          d='M102.148,232.11a1.094,1.094,0,0,0-.958.566,8.179,8.179,0,0,0,1.112-.553A1,1,0,0,0,102.148,232.11Z'
          transform='translate(-81.995 -192.937)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3496'
          data-name='Path 3496'
          d='M15.524,217.34a.7.7,0,1,0,.7.7A.7.7,0,0,0,15.524,217.34Z'
          transform='translate(-9.128 -180.476)'
          fill='url(#linear-gradient-26)'
        />
        <path
          id='Path_3497'
          data-name='Path 3497'
          d='M34.952,218.4a.782.782,0,1,0-.782-.782A.782.782,0,0,0,34.952,218.4Z'
          transform='translate(-25.453 -180.054)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3498'
          data-name='Path 3498'
          d='M54.36,218.043a.861.861,0,1,0-.86-.86A.861.861,0,0,0,54.36,218.043Z'
          transform='translate(-41.761 -179.615)'
          fill='url(#linear-gradient-28)'
        />
        <path
          id='Path_3499'
          data-name='Path 3499'
          d='M172.3,215.862a1.329,1.329,0,1,0-1.72-1.81A6.16,6.16,0,0,0,172.3,215.862Z'
          transform='translate(-140.537 -177.08)'
          fill='url(#linear-gradient-29)'
        />
        <path
          id='Path_3500'
          data-name='Path 3500'
          d='M93.246,217.355a1.018,1.018,0,1,0-1.016-1.016A1.018,1.018,0,0,0,93.246,217.355Z'
          transform='translate(-74.436 -178.772)'
          fill='url(#linear-gradient-30)'
        />
        <path
          id='Path_3501'
          data-name='Path 3501'
          d='M112.675,214.83a1.094,1.094,0,0,0-.605,2.007,8.482,8.482,0,0,0,1.479-1.563A1.094,1.094,0,0,0,112.675,214.83Z'
          transform='translate(-90.76 -178.358)'
          fill='url(#linear-gradient-31)'
        />
        <path
          id='Path_3502'
          data-name='Path 3502'
          d='M73.818,217.716a.938.938,0,1,0-.938-.938A.938.938,0,0,0,73.818,217.716Z'
          transform='translate(-58.111 -179.21)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3503'
          data-name='Path 3503'
          d='M23.682,200.373a.782.782,0,1,0-.782-.782A.782.782,0,0,0,23.682,200.373Z'
          transform='translate(-15.945 -164.843)'
          fill='url(#linear-gradient-20)'
        />
        <path
          id='Path_3504'
          data-name='Path 3504'
          d='M179.98,197.081v-1.14a1.218,1.218,0,0,0-1.141-.782,1.359,1.359,0,1,0,0,2.717A1.247,1.247,0,0,0,179.98,197.081Z'
          transform='translate(-146.358 -161.763)'
          fill='url(#linear-gradient-34)'
        />
        <path
          id='Path_3505'
          data-name='Path 3505'
          d='M43.98,199.17a.86.86,0,1,0-.86.86.86.86,0,0,0,.86-.86Z'
          transform='translate(-32.278 -164.421)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3506'
          data-name='Path 3506'
          d='M120.853,196.31a1.173,1.173,0,1,0,0,2.345,1.215,1.215,0,0,0,.156-.011,8.331,8.331,0,0,0,.733-1.931A1.171,1.171,0,0,0,120.853,196.31Z'
          transform='translate(-97.595 -162.734)'
          fill='url(#linear-gradient-36)'
        />
        <path
          id='Path_3507'
          data-name='Path 3507'
          d='M162.921,196.637a1.329,1.329,0,0,0-2.311-.9l1.094,2.22A1.329,1.329,0,0,0,162.921,196.637Z'
          transform='translate(-132.126 -161.888)'
          fill='url(#linear-gradient-37)'
        />
        <path
          id='Path_3508'
          data-name='Path 3508'
          d='M63.5,198.748a.938.938,0,1,0-.938.938A.938.938,0,0,0,63.5,198.748Z'
          transform='translate(-48.612 -163.999)'
          fill='url(#linear-gradient-24)'
        />
        <path
          id='Path_3509'
          data-name='Path 3509'
          d='M101.414,199a1.094,1.094,0,1,0-1.094-1.094A1.094,1.094,0,0,0,101.414,199Z'
          transform='translate(-81.261 -163.156)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3510'
          data-name='Path 3510'
          d='M81.978,199.342a1.016,1.016,0,1,0-.72-.3A1.016,1.016,0,0,0,81.978,199.342Z'
          transform='translate(-64.928 -163.577)'
          fill='url(#linear-gradient-40)'
        />
        <path
          id='Path_3511'
          data-name='Path 3511'
          d='M219.344,230.43a1.371,1.371,0,0,0-1.374,1.357v.063h2.636v-.625A1.283,1.283,0,0,0,219.344,230.43Z'
          transform='translate(-180.518 -191.519)'
          fill='url(#linear-gradient-41)'
        />
        <path
          id='Path_3512'
          data-name='Path 3512'
          d='M199.654,230.61a1.327,1.327,0,0,0-1.3,1.077,8.63,8.63,0,0,0,2.284.313h.347v-.063a1.33,1.33,0,0,0-1.327-1.327Z'
          transform='translate(-163.965 -191.671)'
          fill='url(#linear-gradient-42)'
        />
        <path
          id='Path_3513'
          data-name='Path 3513'
          d='M210.829,215.981a1.33,1.33,0,1,0-1.329-1.329,1.33,1.33,0,0,0,1.329,1.329Z'
          transform='translate(-173.372 -177.084)'
          fill='url(#linear-gradient-43)'
        />
        <path
          id='Path_3514'
          data-name='Path 3514'
          d='M192.611,215.091a1.251,1.251,0,1,0-1.251,1.251A1.251,1.251,0,0,0,192.611,215.091Z'
          transform='translate(-157.014 -177.523)'
          fill='url(#linear-gradient-44)'
        />
        <path
          id='Path_3515'
          data-name='Path 3515'
          d='M218.07,199.583a1.357,1.357,0,0,0,1.309,1.355L218.32,198.8A1.343,1.343,0,0,0,218.07,199.583Z'
          transform='translate(-180.602 -164.834)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3516'
          data-name='Path 3516'
          d='M200.841,196.622a1.329,1.329,0,1,0-.39.94A1.33,1.33,0,0,0,200.841,196.622Z'
          transform='translate(-163.822 -161.873)'
          fill='url(#linear-gradient-46)'
        />
        <path
          id='Path_3517'
          data-name='Path 3517'
          d='M237.983,237.063h.28l-.224-.453a1.293,1.293,0,0,0-.059.391A.427.427,0,0,1,237.983,237.063Z'
          transform='translate(-197.4 -196.733)'
          fill='url(#linear-gradient-47)'
        />
        <path
          id='Path_3518'
          data-name='Path 3518'
          d='M230.657,221.432,229.946,220a1.28,1.28,0,0,0-.036.292A1.251,1.251,0,0,0,230.657,221.432Z'
          transform='translate(-190.591 -182.72)'
          fill='url(#linear-gradient-48)'
        />
        <path
          id='Path_3519'
          data-name='Path 3519'
          d='M110.31,38.874A1.094,1.094,0,1,0,111.4,37.78,1.094,1.094,0,0,0,110.31,38.874Z'
          transform='translate(-89.69 -28.988)'
          fill='url(#linear-gradient-49)'
        />
        <path
          id='Path_3520'
          data-name='Path 3520'
          d='M98.212,41.245a1.008,1.008,0,0,0-.241-.655l-.832,1.67h.05a1.018,1.018,0,0,0,1.022-1.015Z'
          transform='translate(-78.579 -31.359)'
          fill='url(#linear-gradient-50)'
        />
        <path
          id='Path_3521'
          data-name='Path 3521'
          d='M129.67,38.453a1.173,1.173,0,0,0,2.3.313l-.689-1.4a1.157,1.157,0,0,0-.442-.088A1.173,1.173,0,0,0,129.67,38.453Z'
          transform='translate(-106.023 -28.566)'
          fill='url(#linear-gradient-51)'
        />
        <path
          id='Path_3522'
          data-name='Path 3522'
          d='M106.942,23.014a1.094,1.094,0,0,0-.247-.694l-.885,1.787h.038a1.094,1.094,0,0,0,1.094-1.093Z'
          transform='translate(-85.893 -15.945)'
          fill='url(#linear-gradient-52)'
        />
        <path
          id='Path_3523'
          data-name='Path 3523'
          d='M118.4,20.424a1.173,1.173,0,1,0,.343-.83,1.174,1.174,0,0,0-.343.83Z'
          transform='translate(-96.515 -13.355)'
          fill='url(#linear-gradient-53)'
        />
        <path
          id='Path_3524'
          data-name='Path 3524'
          d='M115.042,5.462a1.094,1.094,0,0,0,.547-2.042l-.969,1.957a1.082,1.082,0,0,0,.422.084Z'
          transform='translate(-93.326)'
          fill='url(#linear-gradient-54)'
        />
        <path
          id='Path_3525'
          data-name='Path 3525'
          d='M53.11,182.2a.861.861,0,1,0-.86-.861A.861.861,0,0,0,53.11,182.2Z'
          transform='translate(-40.707 -149.379)'
          fill='url(#linear-gradient-55)'
        />
        <path
          id='Path_3526'
          data-name='Path 3526'
          d='M33.682,182.563a.782.782,0,1,0-.782-.782A.782.782,0,0,0,33.682,182.563Z'
          transform='translate(-24.382 -149.817)'
          fill='url(#linear-gradient-56)'
        />
        <path
          id='Path_3527'
          data-name='Path 3527'
          d='M72.548,181.876a.938.938,0,1,0-.938-.938A.938.938,0,0,0,72.548,181.876Z'
          transform='translate(-57.04 -148.974)'
          fill='url(#linear-gradient-57)'
        />
        <path
          id='Path_3528'
          data-name='Path 3528'
          d='M169.709,180.141a1.329,1.329,0,1,0-.94-.39A1.33,1.33,0,0,0,169.709,180.141Z'
          transform='translate(-138.681 -146.848)'
          fill='url(#linear-gradient-58)'
        />
        <path
          id='Path_3529'
          data-name='Path 3529'
          d='M92.01,187.369a1.015,1.015,0,0,0,1.013-.949H91a1.015,1.015,0,0,0,1.01.949Z'
          transform='translate(-73.398 -154.39)'
          fill='url(#linear-gradient-59)'
        />
        <path
          id='Path_3530'
          data-name='Path 3530'
          d='M91.3,182.757l.1-.217A.99.99,0,0,0,91.3,182.757Z'
          transform='translate(-73.652 -151.116)'
          fill='url(#linear-gradient-60)'
        />
        <path
          id='Path_3531'
          data-name='Path 3531'
          d='M111.414,187.449a1.094,1.094,0,0,0,1.094-1.029H110.32a1.094,1.094,0,0,0,1.094,1.029Z'
          transform='translate(-89.698 -154.39)'
          fill='url(#linear-gradient-61)'
        />
        <path
          id='Path_3532'
          data-name='Path 3532'
          d='M153.779,179.251a1.252,1.252,0,0,0-2.079-.938l1.065,2.162A1.251,1.251,0,0,0,153.779,179.251Z'
          transform='translate(-124.609 -147.286)'
          fill='url(#linear-gradient-62)'
        />
        <path
          id='Path_3533'
          data-name='Path 3533'
          d='M130.354,187.411a8.02,8.02,0,0,0,.063-.991h-.727A1.174,1.174,0,0,0,130.354,187.411Z'
          transform='translate(-106.04 -154.39)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3534'
          data-name='Path 3534'
          d='M41.858,164.173a.861.861,0,1,0-.858-.855A.861.861,0,0,0,41.858,164.173Z'
          transform='translate(-31.215 -134.167)'
          fill='url(#linear-gradient-64)'
        />
        <path
          id='Path_3535'
          data-name='Path 3535'
          d='M159.761,160.812a1.33,1.33,0,1,0-1.33,1.329,1.33,1.33,0,0,0,1.33-1.329Z'
          transform='translate(-129.164 -131.662)'
          fill='url(#linear-gradient-65)'
        />
        <path
          id='Path_3536'
          data-name='Path 3536'
          d='M144.041,161.251A1.251,1.251,0,0,0,142.79,160a1.229,1.229,0,0,0-.55.13l1.105,2.242A1.251,1.251,0,0,0,144.041,161.251Z'
          transform='translate(-116.628 -132.1)'
          fill='url(#linear-gradient-66)'
        />
        <path
          id='Path_3537'
          data-name='Path 3537'
          d='M178.91,161.241V160.1a1.113,1.113,0,0,0-1.135-.782,1.318,1.318,0,0,0-1.309,1.359,1.3,1.3,0,0,0,1.285,1.357A1.166,1.166,0,0,0,178.91,161.241Z'
          transform='translate(-145.503 -131.527)'
          fill='url(#linear-gradient-67)'
        />
        <path
          id='Path_3538'
          data-name='Path 3538'
          d='M80.7,161.46a1.018,1.018,0,1,0,.72.3A1.018,1.018,0,0,0,80.7,161.46Z'
          transform='translate(-63.848 -133.332)'
          fill='url(#linear-gradient-68)'
        />
        <path
          id='Path_3539'
          data-name='Path 3539'
          d='M61.278,162a.938.938,0,1,0,.938.938A.938.938,0,0,0,61.278,162Z'
          transform='translate(-47.532 -133.788)'
          fill='url(#linear-gradient-69)'
        />
        <path
          id='Path_3540'
          data-name='Path 3540'
          d='M99.07,163.553l.352-.743A1.094,1.094,0,0,0,99.07,163.553Z'
          transform='translate(-80.207 -134.471)'
          fill='url(#linear-gradient-70)'
        />
        <path
          id='Path_3541'
          data-name='Path 3541'
          d='M52.25,146.05a.861.861,0,1,0,.86-.86A.861.861,0,0,0,52.25,146.05Z'
          transform='translate(-40.707 -119.606)'
          fill='url(#linear-gradient-71)'
        />
        <path
          id='Path_3542'
          data-name='Path 3542'
          d='M169.709,144.848a1.327,1.327,0,1,0-.94-.389A1.329,1.329,0,0,0,169.709,144.848Z'
          transform='translate(-138.681 -117.075)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3543'
          data-name='Path 3543'
          d='M150.251,145.191A1.251,1.251,0,1,0,149,143.941,1.251,1.251,0,0,0,150.251,145.191Z'
          transform='translate(-122.331 -117.497)'
          fill='url(#linear-gradient-73)'
        />
        <path
          id='Path_3544'
          data-name='Path 3544'
          d='M71.61,145.628a.938.938,0,1,0,.938-.938A.938.938,0,0,0,71.61,145.628Z'
          transform='translate(-57.04 -119.184)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3545'
          data-name='Path 3545'
          d='M91,145.206a1.016,1.016,0,1,0,1.016-1.016A1.016,1.016,0,0,0,91,145.206Z'
          transform='translate(-73.398 -118.762)'
          fill='url(#linear-gradient-75)'
        />
        <path
          id='Path_3546'
          data-name='Path 3546'
          d='M135.618,144.36a1.169,1.169,0,0,0-1.678-1.057l1.035,2.1A1.173,1.173,0,0,0,135.618,144.36Z'
          transform='translate(-109.625 -117.916)'
          fill='url(#linear-gradient-37)'
        />
        <path
          id='Path_3547'
          data-name='Path 3547'
          d='M61.278,126.66a.938.938,0,1,0,.938.938A.938.938,0,0,0,61.278,126.66Z'
          transform='translate(-47.532 -103.973)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3548'
          data-name='Path 3548'
          d='M177.451,124.24a1.329,1.329,0,0,0-.983,1.316,1.3,1.3,0,0,0,1.285,1.359,1.313,1.313,0,0,0,.866-.313Z'
          transform='translate(-145.504 -101.931)'
          fill='url(#linear-gradient-78)'
        />
        <path
          id='Path_3549'
          data-name='Path 3549'
          d='M140.261,125.911a1.251,1.251,0,1,0-1.251,1.251A1.251,1.251,0,0,0,140.261,125.911Z'
          transform='translate(-112.848 -102.285)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3550'
          data-name='Path 3550'
          d='M159.761,125.48a1.33,1.33,0,1,0-1.33,1.33A1.33,1.33,0,0,0,159.761,125.48Z'
          transform='translate(-129.164 -101.855)'
          fill='url(#linear-gradient-80)'
        />
        <path
          id='Path_3551'
          data-name='Path 3551'
          d='M125.73,127.183a1.169,1.169,0,0,0-.99-2.007Z'
          transform='translate(-101.864 -102.707)'
          fill='url(#linear-gradient-81)'
        />
        <path
          id='Path_3552'
          data-name='Path 3552'
          d='M80.7,126.16a1.018,1.018,0,1,0,1.016,1.016A1.018,1.018,0,0,0,80.7,126.16Z'
          transform='translate(-63.848 -103.551)'
          fill='url(#linear-gradient-82)'
        />
        <path
          id='Path_3553'
          data-name='Path 3553'
          d='M99.05,126.754a1.094,1.094,0,1,0,1.094-1.094A1.094,1.094,0,0,0,99.05,126.754Z'
          transform='translate(-80.19 -103.129)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3554'
          data-name='Path 3554'
          d='M169.718,110.542a1.327,1.327,0,0,0,.813-.278l-1.155-2.334a1.329,1.329,0,0,0,.342,2.612Z'
          transform='translate(-138.69 -88.171)'
          fill='url(#linear-gradient-84)'
        />
        <path
          id='Path_3555'
          data-name='Path 3555'
          d='M112.273,111.054a1.087,1.087,0,1,0-.313.245l.213-.45Z'
          transform='translate(-89.741 -89.285)'
          fill='url(#linear-gradient-85)'
        />
        <circle
          id='Ellipse_197'
          data-name='Ellipse 197'
          cx='1.016'
          cy='1.016'
          r='1.016'
          transform='translate(17.57 20.053) rotate(-1.52)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3556'
          data-name='Path 3556'
          d='M149,109.391a1.251,1.251,0,1,0,1.251-1.251A1.251,1.251,0,0,0,149,109.391Z'
          transform='translate(-122.331 -88.348)'
          fill='url(#linear-gradient-73)'
        />
        <path
          id='Path_3557'
          data-name='Path 3557'
          d='M71.61,111.078a.938.938,0,1,0,.938-.938A.938.938,0,0,0,71.61,111.078Z'
          transform='translate(-57.04 -90.035)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3558'
          data-name='Path 3558'
          d='M129.67,109.813a1.173,1.173,0,1,0,1.173-1.173,1.173,1.173,0,0,0-1.173,1.173Z'
          transform='translate(-106.023 -88.77)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3559'
          data-name='Path 3559'
          d='M137.76,91.361a1.251,1.251,0,1,0,1.251-1.251A1.251,1.251,0,0,0,137.76,91.361Z'
          transform='translate(-112.848 -73.137)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3560'
          data-name='Path 3560'
          d='M159.506,91.992l-1.057-2.112h0a1.312,1.312,0,0,0-1.329,1.309,1.329,1.329,0,0,0,2.387.8Z'
          transform='translate(-129.181 -72.942)'
          fill='url(#linear-gradient-91)'
        />
        <path
          id='Path_3561'
          data-name='Path 3561'
          d='M118.4,91.783a1.174,1.174,0,1,0,1.173-1.173,1.174,1.174,0,0,0-1.173,1.173Z'
          transform='translate(-96.515 -73.559)'
          fill='url(#linear-gradient-92)'
        />
        <path
          id='Path_3562'
          data-name='Path 3562'
          d='M79.69,92.626a1.016,1.016,0,1,0,.3-.719,1.018,1.018,0,0,0-.3.719Z'
          transform='translate(-63.857 -74.402)'
          fill='url(#linear-gradient-93)'
        />
        <path
          id='Path_3563'
          data-name='Path 3563'
          d='M99.05,92.2a1.094,1.094,0,1,0,1.094-1.094A1.094,1.094,0,0,0,99.05,92.2Z'
          transform='translate(-80.19 -73.981)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3564'
          data-name='Path 3564'
          d='M80.337,79.389a.947.947,0,0,0-.039-.269l-.568,1.146A.938.938,0,0,0,80.337,79.389Z'
          transform='translate(-63.89 -63.865)'
          fill='url(#linear-gradient-95)'
        />
        <path
          id='Path_3565'
          data-name='Path 3565'
          d='M91.976,76.355a1.018,1.018,0,1,0-1.016-1.016A1.018,1.018,0,0,0,91.976,76.355Z'
          transform='translate(-73.365 -59.815)'
          fill='url(#linear-gradient-96)'
        />
        <path
          id='Path_3566'
          data-name='Path 3566'
          d='M149,74.1a1.251,1.251,0,0,0,2.273.719L150.3,72.85h-.048A1.251,1.251,0,0,0,149,74.1Z'
          transform='translate(-122.331 -58.575)'
          fill='url(#linear-gradient-97)'
        />
        <path
          id='Path_3567'
          data-name='Path 3567'
          d='M110.31,74.934A1.094,1.094,0,1,0,111.4,73.84,1.094,1.094,0,0,0,110.31,74.934Z'
          transform='translate(-89.69 -59.411)'
          fill='url(#linear-gradient-49)'
        />
        <path
          id='Path_3568'
          data-name='Path 3568'
          d='M129.67,74.5a1.173,1.173,0,1,0,.343-.83A1.173,1.173,0,0,0,129.67,74.5Z'
          transform='translate(-106.023 -58.98)'
          fill='url(#linear-gradient-99)'
        />
        <path
          id='Path_3569'
          data-name='Path 3569'
          d='M137.76,56.054a1.251,1.251,0,0,0,2.453.342l-.747-1.509a1.251,1.251,0,0,0-1.706,1.165Z'
          transform='translate(-112.848 -43.349)'
          fill='url(#linear-gradient-99)'
        />
        <path
          id='Path_3570'
          data-name='Path 3570'
          d='M209.555,182.444a1.153,1.153,0,0,0,.128-.008l-1.094-2.226a1.329,1.329,0,0,0,.972,2.234Z'
          transform='translate(-172.303 -149.151)'
          fill='url(#linear-gradient-101)'
        />
        <path
          id='Path_3571'
          data-name='Path 3571'
          d='M191.341,179.251a1.251,1.251,0,1,0-1.251,1.251A1.251,1.251,0,0,0,191.341,179.251Z'
          transform='translate(-155.942 -147.286)'
          fill='url(#linear-gradient-102)'
        />
        <path
          id='Path_3572'
          data-name='Path 3572'
          d='M198.711,163.167,197.54,160.8a1.329,1.329,0,0,0,.713,2.45,1.308,1.308,0,0,0,.458-.083Z'
          transform='translate(-162.763 -132.775)'
          fill='url(#linear-gradient-103)'
        />
        <path
          id='Path_3573'
          data-name='Path 3573'
          d='M190.645,146.186l-1.094-2.226a1.251,1.251,0,0,0,1.094,2.226Z'
          transform='translate(-156.07 -118.568)'
          fill='url(#linear-gradient-104)'
        />
        <path
          id='Path_3574'
          data-name='Path 3574'
          d='M119.581,55.31a1.173,1.173,0,1,0,.83.343A1.173,1.173,0,0,0,119.581,55.31Z'
          transform='translate(-96.523 -43.778)'
          fill='url(#linear-gradient-105)'
        />
        <path
          id='Path_3575'
          data-name='Path 3575'
          d='M89.072,61.123a1.046,1.046,0,0,0-.047-.313L88.4,62.072A1.016,1.016,0,0,0,89.072,61.123Z'
          transform='translate(-71.205 -48.418)'
          fill='url(#linear-gradient-106)'
        />
        <path
          id='Path_3576'
          data-name='Path 3576'
          d='M99.05,56.9a1.094,1.094,0,1,0,1.094-1.094A1.094,1.094,0,0,0,99.05,56.9Z'
          transform='translate(-80.19 -44.199)'
          fill='url(#linear-gradient-22)'
        />
        <path
          id='Path_3577'
          data-name='Path 3577'
          d='M187.31,73.56h99.876V94.5H197.725'
          transform='translate(-154.651 -59.174)'
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='0.5'
        />
        <path
          id='Path_3578'
          data-name='Path 3578'
          d='M255.3,171.109a1.205,1.205,0,0,1-1.466,0,.782.782,0,0,1-.313-.638V168.62h.2v1.851a.587.587,0,0,0,.067.278.726.726,0,0,0,.181.216.871.871,0,0,0,.271.141,1.077,1.077,0,0,0,.649,0,.88.88,0,0,0,.266-.141.725.725,0,0,0,.181-.216.586.586,0,0,0,.067-.278V168.62h.2v1.851A.782.782,0,0,1,255.3,171.109Z'
          transform='translate(-210.51 -139.373)'
          fill='#fff'
        />
        <path
          id='Path_3579'
          data-name='Path 3579'
          d='M279.261,170.31a.782.782,0,0,1-.324.654,1.171,1.171,0,0,1-.732.222,1.191,1.191,0,0,1-.733-.222.782.782,0,0,1-.324-.653h.2a.578.578,0,0,0,.263.5,1.11,1.11,0,0,0,1.177,0,.589.589,0,0,0,.269-.5q0-.43-.821-.585c-.17-.031-.313-.061-.427-.091a1.8,1.8,0,0,1-.266-.084.482.482,0,0,1-.336-.436.625.625,0,0,1,.3-.519,1.159,1.159,0,0,1,.666-.188,1.279,1.279,0,0,1,.679.175.76.76,0,0,1,.377.532h-.214a.6.6,0,0,0-.33-.383,1.047,1.047,0,0,0-.511-.122,1.015,1.015,0,0,0-.511.134.394.394,0,0,0-.235.342c0,.127.094.227.281.3a1.3,1.3,0,0,0,.21.058l.363.077Q279.261,169.719,279.261,170.31Z'
          transform='translate(-230.445 -139.193)'
          fill='#fff'
        />
        <path
          id='Path_3580'
          data-name='Path 3580'
          d='M277.54,165.382v-.2h1.948v.2Z'
          transform='translate(-230.775 -136.471)'
          fill='#fff'
        />
        <path
          id='Path_3581'
          data-name='Path 3581'
          d='M302.811,169.986v.485a.782.782,0,0,1-.313.638,1.205,1.205,0,0,1-1.466,0,.781.781,0,0,1-.313-.638V168.62h.2v1.851a.568.568,0,0,0,.067.278.7.7,0,0,0,.181.216.862.862,0,0,0,.269.141,1.015,1.015,0,0,0,.324.05,1,1,0,0,0,.325-.05.845.845,0,0,0,.266-.141.709.709,0,0,0,.183-.216.586.586,0,0,0,.067-.278v-.485h-.782v-.3l.167.1h.613V168.62h.2v1.165h.269v.2Z'
          transform='translate(-250.33 -139.373)'
          fill='#fff'
        />
        <path
          id='Path_3582'
          data-name='Path 3582'
          d='M308.72,164.293v-.4h.2v.2h1.546v.2Z'
          transform='translate(-257.08 -135.382)'
          fill='#fff'
        />
        <path
          id='Path_3583'
          data-name='Path 3583'
          d='M326.252,171.032V169.25a.73.73,0,0,0-.208-.547.749.749,0,0,0-.552-.206,1.013,1.013,0,0,0-.618.217.657.657,0,0,0-.3.532v1.789h-.2v-2.692h.2v.372a.9.9,0,0,1,.389-.3,1.274,1.274,0,0,1,.532-.119,1.152,1.152,0,0,1,.388.064.9.9,0,0,1,.313.181.819.819,0,0,1,.2.286.954.954,0,0,1,.07.371v1.835Z'
          transform='translate(-270.284 -139.094)'
          fill='#fff'
        />
        <path
          id='Path_3584'
          data-name='Path 3584'
          d='M361.42,171.311V168.62h.2v2.691Z'
          transform='translate(-301.541 -139.373)'
          fill='#fff'
        />
        <path
          id='Path_3585'
          data-name='Path 3585'
          d='M374.111,169.726a1.437,1.437,0,0,1-.35,1,1.269,1.269,0,0,1-1.829,0,1.445,1.445,0,0,1-.349-1,1.345,1.345,0,0,1,.02-.236h.86v.2h-.678v.034a1.251,1.251,0,0,0,.3.854.983.983,0,0,0,.766.336.968.968,0,0,0,.761-.336,1.226,1.226,0,0,0,.3-.854,1.251,1.251,0,0,0-.3-.854.972.972,0,0,0-.768-.338.96.96,0,0,0-.961.653h-.214a1.2,1.2,0,0,1,.436-.625,1.224,1.224,0,0,1,.74-.225,1.172,1.172,0,0,1,.915.391A1.437,1.437,0,0,1,374.111,169.726Z'
          transform='translate(-310.115 -139.133)'
          fill='#fff'
        />
        <path
          id='Path_3586'
          data-name='Path 3586'
          d='M397.572,169.67a1.418,1.418,0,0,1-.424,1.057,1.324,1.324,0,0,1-1.094.363l-.324-1.446h-.271v-.2h.438l.322,1.452a1.018,1.018,0,0,0,.821-.342,1.232,1.232,0,0,0,.33-.882,1.144,1.144,0,0,0-.289-.813.938.938,0,0,0-.747-.324,1.3,1.3,0,0,0-.947.4l-.156-.134a1.449,1.449,0,0,1,1.123-.469,1.138,1.138,0,0,1,.888.377A1.394,1.394,0,0,1,397.572,169.67Z'
          transform='translate(-330.065 -139.131)'
          fill='#fff'
        />
        <path
          id='Path_3587'
          data-name='Path 3587'
          d='M397.09,165.382v-.2h1.95v.2Z'
          transform='translate(-331.635 -136.471)'
          fill='#fff'
        />
        <path
          id='Path_3588'
          data-name='Path 3588'
          d='M420.906,171.007v-1.876a.8.8,0,0,0-.12-.435.438.438,0,0,0-.313-.219l-.417.513-.444-.519a.88.88,0,0,0-.4.4,1.735,1.735,0,0,0-.234.833,1.546,1.546,0,0,0,.167.782.616.616,0,0,0,.564.344.446.446,0,0,0,.377-.209l.156.122a.639.639,0,0,1-.539.289.8.8,0,0,1-.705-.371,1.7,1.7,0,0,1-.228-.961,1.876,1.876,0,0,1,.281-.976.95.95,0,0,1,.613-.469l.383.438.356-.424a.614.614,0,0,1,.511.239.938.938,0,0,1,.188.6v1.876Z'
          transform='translate(-349.924 -139.069)'
          fill='#fff'
        />
        <path
          id='Path_3589'
          data-name='Path 3589'
          d='M444.933,169.7a1.445,1.445,0,0,1-.35,1,1.27,1.27,0,0,1-1.829,0,1.445,1.445,0,0,1-.35-1,1.345,1.345,0,0,1,.02-.236h.861v.2h-.68v.034a1.237,1.237,0,0,0,.3.854.982.982,0,0,0,.766.336.961.961,0,0,0,.76-.336,1.363,1.363,0,0,0,0-1.707,1.036,1.036,0,0,0-1.728.316h-.2a1.248,1.248,0,0,1,2.092-.464A1.445,1.445,0,0,1,444.933,169.7Z'
          transform='translate(-369.863 -139.106)'
          fill='#fff'
        />
        <path
          id='Path_3590'
          data-name='Path 3590'
          d='M468.046,171.056v-1.094a.877.877,0,0,0-.36-.386,1.1,1.1,0,0,0-.575-.156.9.9,0,0,0-.666.242.808.808,0,0,0-.242.593.665.665,0,0,0,.156.436.469.469,0,0,0,.383.189.591.591,0,0,0,.344-.094l.12.156a.8.8,0,0,1-.469.134.677.677,0,0,1-.538-.256.846.846,0,0,1-.2-.571,1.019,1.019,0,0,1,.3-.727,1.094,1.094,0,0,1,.815-.313,1.216,1.216,0,0,1,.938.391v-.394a.605.605,0,0,0-.269-.5,1.021,1.021,0,0,0-1.113-.034.724.724,0,0,0-.313.371h-.216a.91.91,0,0,1,.4-.519,1.234,1.234,0,0,1,.679-.2,1.127,1.127,0,0,1,.733.25.782.782,0,0,1,.313.638v1.849Z'
          transform='translate(-389.77 -139.118)'
          fill='#fff'
        />
        <path
          id='Path_3591'
          data-name='Path 3591'
          d='M489.63,171.311V168.62h.2v2.691Zm.605,0V168.62h.2v2.691Z'
          transform='translate(-409.707 -139.373)'
          fill='#fff'
        />
        <path
          id='Path_3592'
          data-name='Path 3592'
          d='M505.751,169.726a1.445,1.445,0,0,1-.349,1,1.269,1.269,0,0,1-1.829,0,1.437,1.437,0,0,1-.35-1,1.343,1.343,0,0,1,.02-.236h.86v.2h-.679v.034a1.251,1.251,0,0,0,.3.854.985.985,0,0,0,.768.336.966.966,0,0,0,.76-.336,1.226,1.226,0,0,0,.3-.854,1.251,1.251,0,0,0-.3-.854.972.972,0,0,0-.766-.338.96.96,0,0,0-.963.654h-.214a1.2,1.2,0,0,1,.436-.625,1.226,1.226,0,0,1,.741-.225,1.172,1.172,0,0,1,.915.391,1.444,1.444,0,0,1,.349,1Z'
          transform='translate(-421.174 -139.133)'
          fill='#fff'
        />
        <path
          id='Path_3593'
          data-name='Path 3593'
          d='M528.793,171.079V169.29a.712.712,0,0,0-.217-.535.782.782,0,0,0-.561-.213.879.879,0,0,0-.733.391,1.434,1.434,0,0,0-.283.874,1.337,1.337,0,0,0,.175.782.607.607,0,0,0,.558.33.447.447,0,0,0,.377-.209l.156.122a.638.638,0,0,1-.538.289.791.791,0,0,1-.707-.371,1.616,1.616,0,0,1-.228-.938,1.684,1.684,0,0,1,.35-1.029,1.094,1.094,0,0,1,1.268-.366.964.964,0,0,1,.313.194.835.835,0,0,1,.2.3.939.939,0,0,1,.072.372v1.8Z'
          transform='translate(-441.056 -139.141)'
          fill='#fff'
        />
        <path
          id='Path_3594'
          data-name='Path 3594'
          d='M550.45,171.311V168.62h.2v2.691Z'
          transform='translate(-461.018 -139.373)'
          fill='#fff'
        />
        <path
          id='Path_3595'
          data-name='Path 3595'
          d='M562.118,169.719a1.632,1.632,0,0,1-.283.976.965.965,0,0,1-.827.416,1.061,1.061,0,0,1-.333-.053,1.024,1.024,0,0,1-.3-.156,1.055,1.055,0,0,1-.233-.239.879.879,0,0,1-.138-.3h.208a.782.782,0,0,0,.313.4.858.858,0,0,0,.485.147.781.781,0,0,0,.68-.369,1.59,1.59,0,0,0,0-1.642.782.782,0,0,0-.68-.371.833.833,0,0,0-.477.156.794.794,0,0,0-.313.394H560a.9.9,0,0,1,.138-.3,1.084,1.084,0,0,1,.233-.238,1.022,1.022,0,0,1,.3-.156,1.061,1.061,0,0,1,.333-.055.966.966,0,0,1,.827.417A1.612,1.612,0,0,1,562.118,169.719Z'
          transform='translate(-469.075 -139.125)'
          fill='#fff'
        />
        <path
          id='Path_3596'
          data-name='Path 3596'
          d='M584.171,169.726a1.436,1.436,0,0,1-.35,1,1.269,1.269,0,0,1-1.829,0,1.445,1.445,0,0,1-.349-1,1.345,1.345,0,0,1,.02-.236h.86v.2h-.679v.034a1.251,1.251,0,0,0,.3.854.984.984,0,0,0,.766.336.968.968,0,0,0,.761-.336,1.226,1.226,0,0,0,.3-.854,1.251,1.251,0,0,0-.3-.854.972.972,0,0,0-.768-.338.96.96,0,0,0-.961.653h-.214a1.2,1.2,0,0,1,.436-.625,1.224,1.224,0,0,1,.739-.225,1.173,1.173,0,0,1,.915.391A1.437,1.437,0,0,1,584.171,169.726Z'
          transform='translate(-487.334 -139.133)'
          fill='#fff'
        />
        <path
          id='Path_3597'
          data-name='Path 3597'
          d='M606.361,170.31a.782.782,0,0,1-.322.654,1.179,1.179,0,0,1-.733.222,1.192,1.192,0,0,1-.733-.222.782.782,0,0,1-.324-.654h.2a.582.582,0,0,0,.261.5,1.11,1.11,0,0,0,1.177,0,.585.585,0,0,0,.269-.5q0-.43-.821-.585c-.17-.031-.313-.061-.427-.091a1.8,1.8,0,0,1-.266-.084.482.482,0,0,1-.336-.436.625.625,0,0,1,.3-.519,1.15,1.15,0,0,1,.664-.188,1.281,1.281,0,0,1,.68.175.764.764,0,0,1,.377.532h-.216a.6.6,0,0,0-.33-.383,1.04,1.04,0,0,0-.511-.122,1.024,1.024,0,0,0-.511.134.394.394,0,0,0-.235.342c0,.127.094.227.283.3a1.27,1.27,0,0,0,.208.058l.363.077Q606.361,169.719,606.361,170.31Z'
          transform='translate(-506.406 -139.193)'
          fill='#fff'
        />
        <path
          id='Path_3598'
          data-name='Path 3598'
          d='M614.781,164.026c-.139,0-.209.05-.209.156v.094h-.2v-.114c0-.2.1-.3.313-.3h.289v.174Z'
          transform='translate(-514.945 -135.357)'
          fill='#fff'
        />
        <path
          id='Path_3599'
          data-name='Path 3599'
          d='M625.842,160.156v3.114h-.2V160.2a.748.748,0,0,1,.3-.613l-.156-.188-.341.3-.578-.469.122-.142.456.364.377-.313.336.41A.791.791,0,0,0,625.842,160.156Z'
          transform='translate(-523.795 -131.333)'
          fill='#fff'
        />
        <path
          id='Path_3600'
          data-name='Path 3600'
          d='M645.31,171.032V169.25a.736.736,0,0,0-.208-.547.752.752,0,0,0-.552-.206,1.014,1.014,0,0,0-.625.216.661.661,0,0,0-.3.532v1.789h-.2v-2.691h.2v.372a.907.907,0,0,1,.391-.3,1.269,1.269,0,0,1,.532-.119,1.142,1.142,0,0,1,.386.064.92.92,0,0,1,.313.181.838.838,0,0,1,.2.286.954.954,0,0,1,.07.371v1.835Z'
          transform='translate(-539.453 -139.094)'
          fill='#fff'
        />
        <path
          id='Path_3601'
          data-name='Path 3601'
          d='M667.42,170.078a1.043,1.043,0,0,1-.3.782,1.28,1.28,0,0,1-.888.313,2,2,0,0,1-.782-.134V169.5a.506.506,0,0,1,.175-.356c.12-.117.181-.206.181-.269v-.214l-.313.242a2.424,2.424,0,0,0-.371-.356l.12-.134a1.111,1.111,0,0,1,.148.117,1.315,1.315,0,0,1,.12.131l.3-.216h.2v.458a.5.5,0,0,1-.181.3.53.53,0,0,0-.175.342v1.338a1.545,1.545,0,0,0,.591.094,1.048,1.048,0,0,0,.724-.249.851.851,0,0,0,.26-.652.966.966,0,0,0-.256-.68,1.317,1.317,0,0,0-.672-.349l.679-.639.142.12-.478.458A1.1,1.1,0,0,1,667.42,170.078Z'
          transform='translate(-557.761 -139.196)'
          fill='#fff'
        />
        <path
          id='Path_3602'
          data-name='Path 3602'
          d='M676.781,164.026c-.139,0-.209.05-.209.156v.094h-.2v-.114a.272.272,0,0,1,.313-.3h.289v.174Z'
          transform='translate(-567.252 -135.357)'
          fill='#fff'
        />
        <path
          id='Path_3603'
          data-name='Path 3603'
          d='M726.565,171.024v-1.735a.87.87,0,0,0-.189-.6.69.69,0,0,0-.55-.216.813.813,0,0,0-.525.156v-.208a1.1,1.1,0,0,1,.532-.142.922.922,0,0,1,.713.277.96.96,0,0,1,.222.666v1.795Z'
          transform='translate(-608.532 -139.086)'
          fill='#fff'
        />
        <path
          id='Path_3604'
          data-name='Path 3604'
          d='M746.842,171.07v-1.8a.67.67,0,0,0-.249-.55.917.917,0,0,0-.593-.183.958.958,0,0,0-.84.4v2.131h-.2v-2.189a1.2,1.2,0,0,1,1.041-.546,1.163,1.163,0,0,1,.727.222.769.769,0,0,1,.313.654v1.862Z'
          transform='translate(-625.119 -139.132)'
          fill='#fff'
        />
        <path
          id='Path_3605'
          data-name='Path 3605'
          d='M752.65,164.293v-.4h.2v.2H754.4v.2Z'
          transform='translate(-631.607 -135.382)'
          fill='#fff'
        />
        <path
          id='Path_3606'
          data-name='Path 3606'
          d='M770.472,171.082v-1.789a.706.706,0,0,0-.219-.535.773.773,0,0,0-.561-.213.883.883,0,0,0-.733.391,1.431,1.431,0,0,0-.281.874,1.349,1.349,0,0,0,.173.782.61.61,0,0,0,.56.33.449.449,0,0,0,.377-.209l.156.122a.638.638,0,0,1-.538.289.791.791,0,0,1-.707-.371,1.6,1.6,0,0,1-.228-.938,1.682,1.682,0,0,1,.349-1.029,1.063,1.063,0,0,1,.868-.438,1.049,1.049,0,0,1,.4.072.954.954,0,0,1,.313.194.835.835,0,0,1,.2.3.968.968,0,0,1,.07.372v1.8Z'
          transform='translate(-644.951 -139.144)'
          fill='#fff'
        />
        <path
          id='Path_3607'
          data-name='Path 3607'
          d='M706.072,169.67a1.418,1.418,0,0,1-.424,1.057,1.324,1.324,0,0,1-1.094.363l-.313-1.446h-.281v-.2h.438l.322,1.452a1.018,1.018,0,0,0,.821-.342,1.238,1.238,0,0,0,.33-.882,1.144,1.144,0,0,0-.289-.813.938.938,0,0,0-.747-.324,1.3,1.3,0,0,0-.947.4l-.156-.134a1.45,1.45,0,0,1,1.123-.469,1.138,1.138,0,0,1,.888.377A1.394,1.394,0,0,1,706.072,169.67Z'
          transform='translate(-590.335 -139.131)'
          fill='#fff'
        />
        <path
          id='Path_3608'
          data-name='Path 3608'
          d='M714.971,163.4a.277.277,0,0,0-.2-.088.283.283,0,0,0-.2.088.277.277,0,0,0-.088.2.269.269,0,0,0,.088.2.286.286,0,0,0,.2.084.28.28,0,0,0,.2-.084.263.263,0,0,0,.088-.2A.272.272,0,0,0,714.971,163.4Zm-.208.344a.142.142,0,1,1,.141-.142.125.125,0,0,1-.141.142Z'
          transform='translate(-599.404 -134.893)'
          fill='#fff'
        />
      </g>
    </svg>
  )

  return (
    <div className={Card}>
      <h1>Partners</h1>
      <div className={Content}>
        <div>
          <LogoGrowth />
          <LogoNextzy />
        </div>
        <div>
          <LogoArise />
          <LogoRealMotion />
          <LogoAgital />
        </div>
      </div>
    </div>
  )
}

export default CardPartners
