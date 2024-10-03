/* eslint-disable unicorn/no-array-for-each */
import { useRequest } from 'ahooks';

import { API_PATH } from '@api/constant';
import { privateRequest, request } from '@api/request';
import { THEME_BOT } from '@utils/common';

interface IChatSuggestions {
  title: string;
}

interface IFiles {
  id: string;
  fileName: string;
  uploaded_at: string;
}

interface IBodyCreateBot {
  chatSuggestions?: IChatSuggestions[];
  files?: IFiles;
  contentColor?: string;
  headerBackground?: string;
  startColor?: string;
  endColor?: string;
  contentFontStyle?: string;
  chatbotHeader?: string;
  avatar?: string;
  botname: string;
  description?: string;
  welcomeMessage?: string;
  categoryId?: string;
  contactInfo?: string;
  language?: string;
  timezone?: string;
  url?: string;
  contentFontSize?: string;
  themeBot?: THEME_BOT;
}

const convertToFormData = (body: IBodyCreateBot): FormData => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(body)) {
    if (Array.isArray(value)) {
      // Handle arrays by appending each item
      value.forEach((item: any, index) => {
        if (item instanceof File) {
          formData.append(`${key}[${index}]`, item);
        } else {
          formData.append(`${key}[${index}]`, JSON.stringify(item));
        }
      });
    } else if (typeof value === 'object') {
      // Handle objects by converting to JSON string
      if (key === 'avatar') {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
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

const serviceEditSettingBot = (body: IBodyCreateBot, idBot: string) => {
  const formData = convertToFormData(body);

  return privateRequest(request.put, API_PATH.EDIT_BOT(idBot), {
    data: formData,
  });
};

export const useEditSettingBot = (options: any) => {
  return useRequest(serviceEditSettingBot, {
    manual: true,
    ...options,
  });
};

const serviceCrawlChildLink = (body: { url: string; botId: string }) => {
  return privateRequest(request.post, API_PATH.CRAWL_LINK, {
    data: body,
  });
};

export const useCrawlChildLink = (options: any) => {
  return useRequest(serviceCrawlChildLink, {
    manual: true,
    ...options,
  });
};

const serviceCrawlerFile = (body: { files: any[]; botId: string }) => {
  const formData = new FormData();

  body?.files.forEach((file) => {
    formData.append('files', file);
  });
  formData.append('botId', body?.botId);

  return privateRequest(request.post, API_PATH.CRAWLER_FILE, {
    data: formData,
  });
};

export const useCrawlerFile = (options: any) => {
  return useRequest(serviceCrawlerFile, {
    manual: true,
    ...options,
  });
};

const serviceDeleteFile = (body: { docName: string; botId: string }) => {
  return privateRequest(request.post, API_PATH.DELETE_FILE, {
    data: body,
  });
};

export const useDeleteFile = (options: any) => {
  return useRequest(serviceDeleteFile, {
    manual: true,
    ...options,
  });
};
