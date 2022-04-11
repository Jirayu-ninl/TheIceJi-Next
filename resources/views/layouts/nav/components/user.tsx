import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const User = ({ user, signOut }) => {
  const [OpenPanel, setOpenPanel] = useState(false)
  const displayUser =
    user.name.length > 10 ? user.name.slice(0, 10) + '..' : user.name

  return (
    <>
      <div
        className='flex relative cursor-pointer'
        onClick={() => setOpenPanel(!OpenPanel)}
      >
        <div className='mr-3'>
          <h5 className='text-base font-bold text-right'>{displayUser}</h5>
          <p className='-mt-1 text-xs text-right opacity-80'>admin</p>
        </div>
        <div className='absolute right-0 bottom-0 z-10 w-3 h-3 bg-green-500 rounded-full border-2 border-white' />
        <div className='overflow-hidden relative w-9 h-9 rounded-full'>
          <Image src={user.image} alt='Profile' layout='fill' />
        </div>
        <AnimatePresence>
          {OpenPanel && <Panel user={user} signOut={signOut} key='NAV_User'/>}
        </AnimatePresence>
      </div>
    </>
  )
}

const Panel = ({ user, signOut }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className='flex absolute top-14 right-0 flex-col p-4 w-48 max-h-64 drop-shadow-md Card-back-md-40'
      >
        <div className='text-center'>
          <h5 className='text-base font-semibold'>{user.name}</h5>
          <h6 className='text-xs opacity-80'>{user.email}</h6>
        </div>
        <div className='flex justify-center items-center h-24'>
          <p className='text-xs font-light text-center opacity-60'>
            Nothing here now
          </p>
        </div>
        <button
          onClick={() => signOut()}
          className='py-1 px-2 mx-auto text-xs text-center bg-white/20 rounded border border-white/40 backdrop-blur-md'
        >
          LOGOUT
        </button>
      </motion.div>
    </>
  )
}

export default User
