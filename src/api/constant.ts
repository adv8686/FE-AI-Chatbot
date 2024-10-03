export const API_PATH = {
  // Auth
  AUTH_LOGIN: '/auth/login',

  CREATE_BOT: '/api/bots',
  EDIT_BOT: (id: string) => `/api/bots/${id}`,

  CRAWL_LINK: '/api/data/crawl-child-link',
  CRAWLER_FILE: '/api/data/crawler-files',
};
