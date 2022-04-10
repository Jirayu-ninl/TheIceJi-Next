/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useOnClickOutside } from '@libs/hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { State, User, UI } from '@store'
import { useSession, signOut } from 'next-auth/react'
import Notification from './notification'
import Cart from './cart'
import {
  MenuIcon,
  CloseIcon,
  UserIcon,
  SoundOn,
  SoundOff,
  NotiIcon,
  CartIcon,
} from '../assets'

export default function IJNnav({
  setToggleMenu,
  toggleMenu,
  useAudio,
}: {
  setToggleMenu: any
  toggleMenu: boolean
  useAudio: any
}) {
  const _setCursor = UI((state) => state.setCursor)
  const _page = State((state) => state.page)
  const _Notification = User((state) => state.notification)
  const _Cart = User((state) => state.cart)

  const [OpenNoti, setOpenNoti] = useState(false)
  const [OpenCart, setOpenCart] = useState(false)

  const NavRef = useRef(null)
  useOnClickOutside(NavRef, () => resetPopup())

  const resetPopup = () => {
    setOpenNoti(false)
    setOpenCart(false)
  }

  const [audioPlaying, toggleAudio] = useAudio()
  const audioToggle = () => {
    toggleAudio()
    _setCursor(false)
  }

  const { data: session } = useSession()

  return (
    <nav className='fixed top-0 left-0 z-80 py-4 px-5 w-screen' ref={NavRef}>
      <div className='bg-black/40 rounded-md shadow-xl backdrop-blur-md'>
        <div className='flex justify-between items-center px-6 h-16'>
          <div className='flex items-center h-full'>
            <motion.div
              className='flex items-center py-3 pr-6 h-full cursor-pointer'
              onMouseEnter={() => {
                _setCursor('logo')
              }}
              onMouseLeave={() => {
                _setCursor(false)
              }}
            >
              <Link href='/home' passHref>
                <img
                  className='h-full'
                  src='/logo_white.svg'
                  alt='TheIceJI logo'
                />
              </Link>
            </motion.div>
            <svg
              className='hidden sm:block'
              xmlns='http://www.w3.org/2000/svg'
              width='2'
              height='23'
              viewBox='0 0 2 23'
            >
              <rect width='2' height='23' rx='1' fill='#fff' opacity='0.2' />
            </svg>
            <h6 className='hidden px-5 sm:block'>{_page}</h6>
          </div>
          <div className='flex items-center h-full'>
            <motion.div className='hidden space-x-7 fill-white md:flex'>
              <span
                className='flex relative items-center h-full cursor-pointer'
                // onClick={() => toast('Cart, coming soon!')}
                onClick={() => {
                  setOpenCart(!OpenCart)
                  setOpenNoti(false)
                }}
              >
                <div className='w-6 h-6 Anim AnimScale'>
                  <CartIcon />
                  {_Cart !== 0 && _Cart && (
                    <span className='NotiBadge-primary'>{_Cart}</span>
                  )}
                </div>
                <AnimatePresence>
                  {OpenCart && <Cart key='NAV_Cart' />}
                </AnimatePresence>
              </span>
              <span
                className='flex relative items-center h-full cursor-pointer'
                onClick={() => {
                  setOpenNoti(!OpenNoti)
                  setOpenCart(false)
                }}
              >
                <div className='w-6 h-6 Anim AnimScale'>
                  <NotiIcon />
                  {_Notification !== 0 && _Notification && (
                    <span className='NotiBadge-primary '>{_Notification}</span>
                  )}
                </div>
                <AnimatePresence>
                  {OpenNoti && <Notification key='NAV_Noti' />}
                </AnimatePresence>
              </span>
            </motion.div>
            <div className='hidden px-8 sm:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='2'
                height='23'
                viewBox='0 0 2 23'
              >
                <rect width='2' height='23' rx='1' fill='#fff' opacity='0.2' />
              </svg>
            </div>
            <motion.div
              className='flex space-x-4 fill-white'
              onMouseEnter={() => _setCursor('logo')}
              onMouseLeave={() => _setCursor(false)}
              onClick={() => {
                _setCursor(false)
              }}
            >
              <a className='cursor-pointer' onClick={audioToggle}>
                {audioPlaying ? <SoundOn /> : <SoundOff />}
              </a>
              <Link href={session ? '/app/dashboard' : '/app/portal'}>
                <a>
                  <UserIcon />
                </a>
              </Link>
              <div
                className='cursor-pointer'
                onClick={() => {
                  setToggleMenu(!toggleMenu)
                  _setCursor(false)
                  resetPopup()
                }}
              >
                {toggleMenu ? <CloseIcon /> : <MenuIcon />}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  )
}
