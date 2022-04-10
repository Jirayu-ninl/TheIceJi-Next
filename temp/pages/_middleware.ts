import type { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(
  req: NextRequest,
  res: NextResponse,
  ev: NextFetchEvent
) {}
