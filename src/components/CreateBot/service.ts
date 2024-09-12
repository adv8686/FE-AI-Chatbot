/* eslint-disable unicorn/no-array-for-each */
import { useRequest } from 'ahooks';

import { API_PATH } from '@api/constant';
import { privateRequest, request } from '@api/request';

interface IChatSuggestions {
  title: string;
}

interface IFiles {
  id: string;
  fileName: string;
  uploaded_at: string;
}

interface IBodyCreateBot {
  chatSuggestions: IChatSuggestions[];
  files: IFiles;
  contentColor: string;
  headerBackground: string;
  startColor: string;
  endColor: string;
  contentFontStyle: string;
  chatbotHeader: string;
  avatar: string;
  botname: string;
  description: string;
  welcomeMessage: string;
  categoryId: string;
  contactInfo: string;
  language: string;
  timezone: string;
  url: string;
  contentFontSize: string;
}

const convertToFormData = (body: IBodyCreateBot): FormData => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(body)) {
    if (Array.isArray(value)) {
      // Handle arrays by appending each item
      value.forEach((item, index) => {
        formData.append(`${key}[${index}]`, JSON.stringify(item));
      });
    } else if (typeof value === 'object') {
      // Handle objects by converting to JSON string
      formData.append(key, JSON.stringify(value));
    } else {
      // Handle primitive values
      formData.append(key, value);
    }
  }
  return formData;
};

const serviceCreateSettingBot = (body: IBodyCreateBot) => {
  const formData = convertToFormData(body);

  return privateRequest(request.post, API_PATH.CREATE_BOT, {
    data: formData,
  });
};

export const useCreateSettingBot = (options: any) => {
  return useRequest(serviceCreateSettingBot, {
    manual: true,
    ...options,
  });
};
