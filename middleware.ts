/* eslint-disable unicorn/consistent-destructuring */
import { NextRequest, NextResponse } from 'next/server';

// Check auth from server side here
// const PATH_AUTH = ['/auth/sign-in'];

export function middleware(request: NextRequest) {
  // const { cookies } = request;
  // const token = cookies.get('accessToken');

  // const isMatchPathAuth = PATH_AUTH.find((path: string) => request.nextUrl.pathname.includes(path));

  // const url = request.nextUrl.clone();

  // if (!token && !isMatchPathAuth) {
  //   url.pathname = '/auth/sign-in';
  //   return NextResponse.redirect(url);
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/((?!api|static|_next/static|_next/images|svgIcon|svg|logo|lottie|styles-antd|locales|/_next/data|robots.txt|public|images|manifest.json|sw.js|favicon.ico|workbox-*).*)',
    '/',
  ],
};
