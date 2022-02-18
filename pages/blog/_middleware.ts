import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // pegar o cookie de autenticação
  // chamar alguma api (opcional)

  return NextResponse.redirect(req.nextUrl.origin)
}