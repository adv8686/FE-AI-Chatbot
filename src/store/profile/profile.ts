import { atom } from 'jotai';

interface ILogo {
  id: number;
  url: string;
}
interface ICompany {
  id: number;
  name: string;
  logo: ILogo;
}

export enum ERole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
interface IRole {
  id: number;
  name: ERole;
}

interface IAvatar {
  id: number;
  originalname: string;
  url: string;
}

interface IAvatarProfile {
  url: string;
}

interface IProfile {
  avatar: IAvatarProfile;
}

export interface InitProfile {
  loading: boolean;
  id: number;
  phone: string;
  phone_verified?: Date;
  full_name: string;
  email: string;
  avatar: IAvatar;
  last_login?: Date;
  created_at?: Date;
  status?: string;
  profile?: IProfile;
  roles: IRole[];
  own_companies: ICompany[];
}

export const initialProfile: InitProfile = {
  loading: true,
  phone: '',
  email: '',
  profile: {
    avatar: {
      url: '',
    },
  },
  avatar: {
    id: 0,
    originalname: '',
    url: '',
  },
  full_name: '',
  id: 0,
  own_companies: [],
  roles: [],
};

export const profileAtom = atom({
  ...initialProfile,
});
