import { NextRequest, NextResponse } from 'next/server';
import { cookiesExpireDate } from './utils/cookies-object-format';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('token');

  if (cookie) {
    const cookieExpire = cookiesExpireDate(cookie.value);

    if (cookieExpire) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/user/:path*',
};
