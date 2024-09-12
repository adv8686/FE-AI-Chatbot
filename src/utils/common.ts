/* eslint-disable unicorn/consistent-function-scoping */
export const ROUTE_PATH = {
  Home: '',
  CREATE_BOT: '/create-bot',
};

export enum STEP_SETUP_BOT {
  GENERAL = 'GENERAL',
  IMPORT_DATA = 'IMPORT_DATA',
  APPEARANCE = 'APPEARANCE',
  INSTALLATION = 'INSTALLATION',
}

export const rgbToHex = (r: any, g: any, b: any) => {
  const toHex = (num: any) => {
    const hex = num.toString(16).padStart(2, '0');
    return hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const ListCategory = [
  {
    label: 'Company Site',
    value: 1,
  },
  {
    label: 'E-commerce Shopping Site',
    value: 2,
  },
  {
    label: 'Travel Booking Site',
    value: 3,
  },
  {
    label: 'Online Learning Site',
    value: 4,
  },
  {
    label: 'News&Media Site',
    value: 5,
  },
  {
    label: 'Social Media Management Site',
    value: 6,
  },
];

export const getTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
