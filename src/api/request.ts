/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
import TokenManager, { injectBearer } from 'brainless-token-manager';
import { extend } from 'umi-request';

import { getAccessToken } from '@store/auth';
import { ENV } from 'src/utils/env';

const REQ_TIMEOUT = 25 * 1000;
export const isDev = ENV.NODE_ENV === 'development';

export const PREFIX_API = ENV.APP_API_URL;

const request = extend({
  prefix: PREFIX_API,
  timeout: REQ_TIMEOUT,
  errorHandler: (error) => {
    throw error?.data || error?.response;
  },
});

const tokenManager = new TokenManager({
  getAccessToken: async () => {
    const token = getAccessToken();

    return token || '';
  },
  getRefreshToken: async () => {
    // const refreshToken = getRefreshToken();

    // return refreshToken || '';
    return '';
  },
  executeRefreshToken: async () => {
    return {
      token: '',
      refresh_token: '',
    };
  },
  onRefreshTokenSuccess: ({ token, refresh_token: refreshToken }) => {
    // eslint-disable-next-line no-console
    console.log(refreshToken);
  },
  onInvalidRefreshToken: async () => {
    // Logout
  },
});

const privateRequest = async (request: any, suffixUrl: string, configs?: any) => {
  const token: string = configs?.token ?? ((await tokenManager.getToken()) as string);

  return request(suffixUrl, injectBearer(token, configs));
};

export { privateRequest, request };
