import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('token');

  if (cookie) {
    console.log(cookie.value);
    console.log('Possui cookie e pode seguir adiante');

    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/user/:path*',
};
