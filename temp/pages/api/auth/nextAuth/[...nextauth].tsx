import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { auth as Config } from '@config'
import clientPromise from '@database/mongo/legacy'
import axios from 'axios'

export default NextAuth({
  cookies: {
    sessionToken: {
      name: 'theiceji-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    callbackUrl: {
      name: 'theiceji-auth.callback-url',
      options: {
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    csrfToken: {
      name: 'theiceji-auth.csrf-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    pkceCodeVerifier: {
      name: 'theiceji-auth.pkce.code_verifier',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    state: {
      name: 'theiceji-auth.state',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
  },
  providers: [
    GoogleProvider({
      clientId: Config.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: Config.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: Config.AUTH_GITHUB_CLIENT_ID,
      clientSecret: Config.AUTH_GITHUB_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: Config.AUTH_FB_APP_ID,
      clientSecret: Config.AUTH_FB_APP_SECRET,
    }),
    CredentialsProvider({
      name: 'Email',
      id: 'TheIceJi-Credentials',
      type: 'credentials',
      credentials: {
        email: { label: 'E-mail', type: 'text', placeholder: 'E-mail' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req) {
        const getToken = await axios.post('/api/auth/token', { setHeader: true })
        const csrfToken = getToken.data.token
        const body = {
          type: 'signin',
          token: csrfToken,
          ...credentials,
        }
        try {
          const res = await axios.post(
            'http://localhost:3000/api/auth/user',
            body
          )
          if (res.status === 201) {
            const user = res.data
            return user
          }
        } catch (error) {
          console.log(error)
        }
        return null
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: Config.TOKEN,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // jwt: {
  //   maxAge: 60 * 60 * 24 * 30,
  //   secret: Config.TOKEN,
  // },
  theme: {
    colorScheme: 'dark',
  },
  callbacks: {
    async signIn({ user, account }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        try {
          const getToken = await axios.post('http://localhost:3000/api/auth/token', { setHeader: true })
          const csrfToken = getToken.data.token
          const body = {
            type: 'oauth',
            token: csrfToken,
            email: user.email,
            provider: account.provider,
          }
          const res = await axios.post(
            'http://localhost:3000/api/auth/user',
            body
          )
          const success = res.status === 201
          if (res.status === 201 && res.data.newUser === true) {
            account.userID = res.data.userID
            account.email = user.email
            user.userID = res.data.userID
            user.userRole = 'user'
            user.active = 1
            // await Cookies.remove('tempToken')
            return true
          } else if (res.status === 201 && res.data.newUser === false) {
            // await Cookies.remove('tempToken')
            return true
          } else {
            console.log(res)
            // await Cookies.remove('tempToken')
            return false
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        return false
      }
    },
    // async session({ session, user }) {
    //   session.userID = user.userID
    //   return session
    // },
    // async jwt({ token, user }) {
    //   token.userID = user.userID
    //   token.userRole = 'user'
    //   token.active = 1
    //   return token
    // },
  },
})
