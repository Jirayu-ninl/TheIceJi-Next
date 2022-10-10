import type { NextRequest } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/app/admin')) {
    withAuth({
      callbacks: {
        authorized: ({ token }) => token?.userRole === 'admin',
      },
    })
  }

  if (request.nextUrl.pathname.startsWith('/app/user')) {
    withAuth()
  }
}
