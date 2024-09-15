import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export const getAccessToken = (res?: any, req?: any) => {
  if (res && req) {
    return getCookie('accessToken', { req, res });
  }
  return getCookie('accessToken') || '';
};

export const getRefreshToken = (res?: any, req?: any) => {
  if (res && req) {
    return getCookie('accessRefreshToken', { req, res });
  }
  return (
    getCookie('accessRefreshToken') ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTZhYTRjZDJmYjQ3YWRlMDViNGY0ZCIsImVtYWlsIjpudWxsLCJ1c2VybmFtZSI6ImR1Y3RoYW5oIiwiZmlyc3ROYW1lIjpudWxsLCJsYXN0TmFtZSI6bnVsbCwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MjYzOTI5MTcsImV4cCI6MTcyNjM5NjUxN30.rIohIE_mJBuhSUqJvJfQ17VX5TQ85FdXdXvJwYyVWxg'
  );
};

export const setAuthCookies = (
  {
    token,
    refreshToken,
    expiredTime,
  }: {
    token: string;
    refreshToken: string;
    expiredTime: number;
  },
  reqOnServer?: any,
) => {
  setCookie('accessToken', token, {
    maxAge: 2_147_483_647,
    res: reqOnServer?.res,
    req: reqOnServer?.req,
  });
  setCookie('accessRefreshToken', refreshToken, {
    maxAge: 2_147_483_647,
    res: reqOnServer?.res,
    req: reqOnServer?.req,
  });
  setCookie('tokenExpiredTime', expiredTime, {
    maxAge: 2_147_483_647,
    res: reqOnServer?.res,
    req: reqOnServer?.req,
  });
};

export const deleteAuthCookies = () => {
  deleteCookie('accessToken');
  deleteCookie('accessRefreshToken');
  deleteCookie('tokenExpiredTime');
};
