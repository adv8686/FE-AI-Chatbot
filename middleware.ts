/* eslint-disable unicorn/consistent-destructuring */
import { NextRequest, NextResponse } from 'next/server';

const PATH_AUTH = ['/auth/sign-in', '/google-authentication-success', '/'];

const AUTH_PATH: any = { '/auth/sign-in': true };

const HOME_PATH: any = { '/': true };

const PATH: any = ['/template-bot'];

export function middleware(request: NextRequest) {
  const { cookies } = request;
  const token = cookies.get('accessToken');

  const isMatchPathAuth = PATH_AUTH.find((path: string) => request.nextUrl.pathname.includes(path));
  const isMatchHomePath = HOME_PATH[request.nextUrl.pathname];
  const isMatchAuthPath = AUTH_PATH[request.nextUrl.pathname];

  const isMatchPath = PATH.find((path: string) => request.nextUrl.pathname.includes(path));

  const url = request.nextUrl.clone();

  if (token && isMatchHomePath) {
    url.pathname = '/template-bot';
    return NextResponse.redirect(url);
  }

  if (token && isMatchAuthPath) {
    url.pathname = '/template-bot';
    return NextResponse.redirect(url);
  }

  if (!token && !isMatchPathAuth) {
    url.pathname = '/auth/sign-in';
    return NextResponse.redirect(url);
  }

  if (!token && isMatchPath) {
    url.pathname = '/auth/sign-in';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/template-bot'],
};
