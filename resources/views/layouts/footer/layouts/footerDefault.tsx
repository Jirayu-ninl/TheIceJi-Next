import { motion, AnimatePresence } from 'framer-motion'
import { config as animationConfig } from 'views/animations'
import { Footer as SocialItems } from 'contents/global/contract.socials'
import { SocialLinkIcon } from '../components'
import { UI } from '@store'

export default function Footer({ toggleAbout, setToggleAbout, toggleMenu }) {
  const { Init, Animated, transition } = animationConfig.footerAnimation
  const _setCursor = UI((state) => state.setCursor)
  return (
    <>
      <AnimatePresence>
        {!toggleMenu && (
          <motion.div
            initial={{ y: '100%' }}
            exit={{ y: '100%' }}
            animate={{ y: !toggleMenu ? 0 : '100%' }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className='fixed bottom-0 left-0 flex flex-col items-center justify-between w-screen px-5 py-3 md:flex-row z-10'
          >
            <div
              className='flex items-center space-x-4 md:space-x-7'
              onMouseEnter={() => {
                _setCursor('logo')
              }}
              onMouseLeave={() => {
                _setCursor(false)
              }}
              onClick={() => {
                _setCursor(false)
              }}
            >
              {SocialItems.map((v, i) => (
                <SocialLinkIcon
                  name={v.name}
                  icon={v.icon}
                  link={v.link}
                  animationDelay={v.animationDelay}
                  key={i}
                />
              ))}
            </div>
            <div className='flex items-center mt-2 text-xs md:mt-0 md:text-base'>
              <motion.p
                initial={Init}
                animate={Animated}
                transition={transition(1)}
              >
                <a
                  className='pr-2 cursor-pointer Anim AnimOpacity-60'
                  onClick={() => {
                    setToggleAbout(!toggleAbout)
                  }}
                >
                  TheIceJI Next
                </a>
                <span className='opacity-40'>
                  | Copyright©{new Date().getFullYear()} by{' '}
                </span>
                <a
                  href='http://TheIceJI.com/home'
                  className='Anim AnimOpacity-60'
                >
                  Jirayu Ninlapun
                </a>
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
