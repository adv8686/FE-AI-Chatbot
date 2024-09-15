/* eslint-disable require-await */
/* eslint-disable unicorn/consistent-function-scoping */
import { useRequest } from 'ahooks';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import { API_PATH } from '@api/constant';
import { PREFIX_API, privateRequest, request } from '@api/request';
import { ROUTE_PATH } from '@utils/common';
import { localStorageUtils } from '@utils/local-storage-utils';

import { ERole, profileAtom } from './profile';

interface IOptionsRequest {
  onSuccess?: (r: any) => void;
  onError?: (e: any) => void;
}

export const serviceGetProfile = async () => {
  const profile = await privateRequest(request.get, API_PATH.GET_USER);
  return profile;
};

export const useGetProfileUser = (options?: IOptionsRequest) => {
  return useRequest(
    async () => {
      return privateRequest(request.get, API_PATH.GET_USER, {});
    },
    {
      manual: true,
      ...options,
    },
  );
};

export const useProfileInitial = () => {
  const [profile, setProfile] = useAtom(profileAtom);
  const router = useRouter();
  const pathName = router.pathname;
  const adminPath: string = pathName.split('/')[1];

  const run = () => {
    const init = async () => {
      const res = await privateRequest(fetch, `${PREFIX_API}${API_PATH.GET_USER}`).then((res) =>
        res.json(),
      );
      const newProfile = {
        ...res,
        profile: {
          avatar: {
            ...res?.avatar,
            id: res?.avatar?.id,
            url: res?.avatar?.url,
          },
        },
      };
      localStorageUtils.set('company_id', res?.own_companies[0]?.id);
      setProfile(newProfile);

      const onlyAdmin = res?.roles?.length && res.roles.every((i: any) => i.name === ERole.ADMIN);
      // user role
      const onlyUser = res?.roles?.length && res.roles.every((i: any) => i.name === ERole.USER);

      const roleAdmin = res?.roles?.map((item: any) => item?.name).includes(ERole.ADMIN);

      // for role admin auto redirect admin route

      if (roleAdmin && adminPath.toUpperCase() !== ERole.ADMIN) {
        return router.push(ROUTE_PATH.MANAGE_USER);
      }

      if (onlyAdmin && adminPath.toUpperCase() !== ERole.ADMIN) {
        return router.push(ROUTE_PATH.MANAGE_USER);
      }
      if (onlyAdmin && adminPath.toUpperCase() !== ERole.ADMIN) {
        return router.push(ROUTE_PATH.MANAGE_USER);
      }
      if (res?.own_companies?.length === 0 && onlyUser) {
        return router.push(ROUTE_PATH.REGISTER_COMPANY);
      }
      if (onlyUser && adminPath.toUpperCase() === ERole.ADMIN) {
        return router.push(ROUTE_PATH.HOME);
      }
      if (pathName === ROUTE_PATH.SIGNIN) {
        router.push(ROUTE_PATH.BROWSER_PROJECTS);
      }
    };
    init();
  };

  return {
    profile,
    requestGetProfile: run,
  };
};
