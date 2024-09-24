import { THEME_BOT } from '@utils/common';

export const getBackgroundHeaderStyle = (themeBot: THEME_BOT) => {
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    return {
      background: '#E1DCD8',
    };
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    return {
      background: '#262E38',
    };
  }
  if (themeBot === THEME_BOT?.LEMON) {
    return {
      background: '#2E2C00',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      background: '#390E1E',
    };
  }
  if (themeBot === THEME_BOT?.CYBERPUNK) {
    return {
      background: '#121933',
    };
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    return {
      background: '#150F14',
    };
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    return {
      background: '#0D0D0E',
    };
  }
  if (themeBot === THEME_BOT?.RETRO) {
    return {
      background: '#292425',
    };
  }
};
export const getBackgroundChatStyle = (themeBot: THEME_BOT) => {
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    return {
      background: '#1E1E1E',
    };
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    return {
      background: '#F0F0F0',
    };
  }
  if (themeBot === THEME_BOT?.LEMON) {
    return {
      background: '#EBF3DF',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      background: '#F9E4F2',
    };
  }
  if (themeBot === THEME_BOT?.CYBERPUNK) {
    return {
      background: '#FFEE4B',
    };
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    return {
      background: '#FFE5C0',
    };
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    return {
      background: '#BDC7D9',
    };
  }
  if (themeBot === THEME_BOT?.RETRO) {
    return {
      background: '#D6C291',
    };
  }
};
export const getBackgroundContentMessageStyle = (themeBot: THEME_BOT) => {
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    return {
      background: '#464546',
    };
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    return {
      background: '#fff',
    };
  }
  if (themeBot === THEME_BOT?.LEMON) {
    return {
      background: '#FCFFF7',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      background: '#FFF8FD',
    };
  }
  if (themeBot === THEME_BOT?.CYBERPUNK) {
    return {
      background: '#FFF',
    };
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    return {
      background: '#FFF7EC',
    };
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    return {
      background: '#E9EDF7',
    };
  }
  if (themeBot === THEME_BOT?.RETRO) {
    return {
      background: '#F9F3E2',
    };
  }
};
export const getBackgroundUserChatStyle = (themeBot: THEME_BOT) => {
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    return {
      background: '#FF8400',
    };
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    return {
      background: '#3B1FFF',
    };
  }
  if (themeBot === THEME_BOT?.LEMON) {
    return {
      background: '#3E8800',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      background: '#E36471',
    };
  }
  if (themeBot === THEME_BOT?.CYBERPUNK) {
    return {
      background: '#C46EFF',
    };
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    return {
      background: '#D58746',
    };
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    return {
      background: '#15233E',
    };
  }
  if (themeBot === THEME_BOT?.RETRO) {
    return {
      background: '#198E72',
    };
  }
};

export const getTextHeaderBotStyle = (themeBot: THEME_BOT) => {
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    return {
      color: '#464546',
    };
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    return {
      color: '#fff',
    };
  }
  if (themeBot === THEME_BOT?.LEMON) {
    return {
      color: '#FCFFF7',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      color: '#FFF8FD',
    };
  }
  if (themeBot === THEME_BOT?.CYBERPUNK) {
    return {
      color: '#fff',
    };
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    return {
      color: '#FFE3BA',
    };
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    return {
      color: '#E9EDF7',
    };
  }
  if (themeBot === THEME_BOT?.RETRO) {
    return {
      color: '#F9F3E2',
    };
  }
};
export const getColorFooterBotStyle = (themeBot: THEME_BOT) => {
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    return {
      color: '#FF8400',
    };
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    return {
      color: '#3B1FFF',
    };
  }
  if (themeBot === THEME_BOT?.LEMON) {
    return {
      color: '#3E8800',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      color: '#E36471',
    };
  }
  if (themeBot === THEME_BOT?.CYBERPUNK) {
    return {
      color: '#C46EFF',
    };
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    return {
      color: '#D58746',
    };
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    return {
      color: '#15233E',
    };
  }
  if (themeBot === THEME_BOT?.RETRO) {
    return {
      color: '#198E72',
    };
  }
};

export const getColorButtonSuggestion = (themeBot: THEME_BOT) => {
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    return {
      color: '#E1DCD8CC',
    };
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    return {
      color: 'rgba(38, 46, 56, 0.80)',
    };
  }
  if (themeBot === THEME_BOT?.LEMON) {
    return {
      color: 'rgba(46, 44, 0, 0.80)',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      color: 'rgba(57, 14, 30, 0.80)',
    };
  }
  if (themeBot === THEME_BOT?.CYBERPUNK) {
    return {
      color: 'rgba(18, 25, 51, 0.80)',
    };
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    return {
      color: 'rgba(29, 22, 28, 0.80)',
    };
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    return {
      color: 'rgba(13, 13, 14, 0.80)',
    };
  }
  if (themeBot === THEME_BOT?.RETRO) {
    return {
      color: 'rgba(41, 36, 37, 0.80)',
    };
  }
};
export const getColorBotNameStyle = (themeBot: THEME_BOT) => {
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    return {
      color: '#E1DCD8',
    };
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    return {
      color: '#262E38',
    };
  }
  if (themeBot === THEME_BOT?.LEMON) {
    return {
      color: '#2E2C00',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      color: '#390E1E',
    };
  }
  if (themeBot === THEME_BOT?.CYBERPUNK) {
    return {
      color: '#121933',
    };
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    return {
      color: '#150F14',
    };
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    return {
      color: '#472E3F',
    };
  }
  if (themeBot === THEME_BOT?.RETRO) {
    return {
      color: '#292425',
    };
  }
};
export const getColorTextThinking = (themeBot: THEME_BOT) => {
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    return {
      color: '#E1DCD866',
    };
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    return {
      color: 'rgba(38, 46, 56, 0.40',
    };
  }
  if (themeBot === THEME_BOT?.LEMON) {
    return {
      color: 'rgba(46, 44, 0, 0.40)',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      color: 'rgba(57, 14, 30, 0.40)',
    };
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    return {
      color: 'rgba(18, 25, 51, 0.40)',
    };
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    return {
      color: 'rgba(29, 22, 28, 0.40)',
    };
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    return {
      color: 'rgba(13, 13, 14, 0.40)',
    };
  }
  if (themeBot === THEME_BOT?.RETRO) {
    return {
      color: 'rgba(41, 36, 37, 0.40)',
    };
  }
};

export const getColorIconChat = (themeBot: THEME_BOT) => {
  let color: string = '#464546';
  if (themeBot === THEME_BOT?.HALLOWEEN) {
    color = '#464546';
  }
  if (themeBot === THEME_BOT?.DEFAULT) {
    color = '#FFFFFF';
  }
  if (themeBot === THEME_BOT?.LEMON) {
    color = '#FCFFF7';
  }
  if (themeBot === THEME_BOT?.VALENTINE) {
    color = '#FFF8FD';
  }
  if (themeBot === THEME_BOT?.CYBERPUNK) {
    color = '#FFFFFF';
  }
  if (themeBot === THEME_BOT?.COFFEE) {
    color = '#FFE3BA';
  }
  if (themeBot === THEME_BOT?.LUXURY) {
    color = '#E9EDF7';
  }
  if (themeBot === THEME_BOT?.RETRO) {
    color = '#F9F3E2';
  }
  return color;
};
