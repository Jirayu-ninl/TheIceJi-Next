import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Layout from 'views/app/layouts'
import { css } from '@emotion/css'

const Index = () => {
  const Container = css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h4 {
      padding-bottom: 24px;
    }
    & h6 {
      padding-bottom: 16px;
    }
    & pre {
      background-color: #1a1a1a;
      padding: 16px;
      border-radius: 10px;
    }
  `
  const { data: session } = useSession()
  const [JWTdata, setJWTdata] = useState()

  useEffect(() => {
    const getJWT = async () => {
      const { data: jwt } = await axios.get('/api/auth/jwt')
      if (jwt.content) {
        setJWTdata(JSON.stringify(jwt.content, null, 2))
        console.log(jwt.content)
      }
    }
    getJWT()
  }, [session])

  return (
    <div className={Container}>
      <h4>You are Login</h4>
      <h6>Session</h6>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <h6>JWT</h6>
      <pre>{JWTdata}</pre>
    </div>
  )
}

const App = () => {
  return (
    <Layout>
      <Index />
    </Layout>
  )
}

App.auth = true

export default App
