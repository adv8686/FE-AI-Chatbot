/* eslint-disable require-await */
import { useRequest } from 'ahooks';
import { useAtom } from 'jotai';

import { API_PATH } from '@api/constant';
import { privateRequest, request } from '@api/request';

import { profileAtom } from './profile';

export const useProfile = () => {
  const [profile, setProfile] = useAtom(profileAtom);

  const requestUpdateAvatar = useRequest(
    async (file) => {
      const formData = new FormData();
      formData.append('avatar', file);
      return privateRequest(request.post, API_PATH.USER_AVATAR, {
        data: formData,
      });
    },
    {
      manual: true,
      onSuccess: (r) => {
        const newProfile = {
          ...profile,
          avatar: {
            ...profile?.avatar,
            id: r?.id,
            url: r?.url,
          },
          profile: {
            avatar: {
              ...profile?.avatar,
              id: r?.id,
              url: r?.url,
            },
          },
        };
        setProfile(newProfile);
      },
    },
  );

  return {
    setProfile,
    profile,
    requestUpdateAvatar,
  };
};
