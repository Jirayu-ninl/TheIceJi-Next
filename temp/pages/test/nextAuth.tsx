import { useSession, signIn, signOut } from 'next-auth/client'

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div style={{paddingTop: 250}}>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div style={{paddingTop: 500}}>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
