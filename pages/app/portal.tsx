import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SignIn, SignUp } from 'views/app/portal'
import { getProviders } from 'next-auth/react'
import { getCsrfToken } from 'next-auth/react'
import { toast } from 'react-toastify'
import { State } from '@store'

const Portal = ({ providers, csrfToken }) => {
  const _setPage = State((state) => state.setPage)
  const [IsSignIn, setIsSignIn] = useState(true)
  const router = useRouter()
  useEffect(() => {
    _setPage('Login')
  }, [_setPage])
  useEffect(() => {
    if (router.query.error === 'CredentialsSignin') {
      toast.error('Invalid username or password')
    }
  }, [router.query.error])
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-tl from-indigo-500 to-cyan-500'>
      <div className='flex h-2/5'>
        <div className='overflow-hidden relative w-96 h-full rounded-lg'>
          <Image
            src='/cover.jpg'
            layout='fill'
            alt='TheIceJI'
            objectFit='cover'
            quality={100}
          />
        </div>
        <div className='h-full'>
          {IsSignIn ? (
            <SignIn
              setIsSignIn={setIsSignIn}
              providers={providers}
              csrfToken={csrfToken}
            />
          ) : (
            <SignUp setIsSignIn={setIsSignIn} csrfToken={csrfToken} />
          )}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: { providers, csrfToken },
  }
}

export default Portal
