import clsx from 'clsx';

import { THEME_BOT } from '@utils/common';

import { IconChatFill } from '../Icons/chat';

const BubbleChat = ({ theme }: { theme: THEME_BOT }) => {
  const renderColorIconChat = () => {
    let color = '';

    if (theme === THEME_BOT?.HALLOWEEN) {
      color = '#1E1E1E';
    }
    if (theme === THEME_BOT?.CYBERPUNK) {
      color = 'white';
    }
    if (theme === THEME_BOT?.COFFEE) {
      color = '#FFF7EC';
    }
    if (theme === THEME_BOT?.DEFAULT) {
      color = 'white';
    }
    if (theme === THEME_BOT?.LEMON) {
      color = '#FCFFF7';
    }
    if (theme === THEME_BOT?.LUXURY) {
      color = '#E9EDF7';
    }
    if (theme === THEME_BOT?.RETRO) {
      color = '#F9F3E2';
    }
    if (theme === THEME_BOT?.VALENTINE) {
      color = '#FFF8FD';
    }

    return color;
  };
  return (
    <div
      className={clsx(
        'w-16 h-16 p-2 bg-[#3B1FFF] flex justify-center items-center rounded-full shadow-lg',
        {
          'bg-[#FF8400]': theme === THEME_BOT?.HALLOWEEN,
          'bg-[#D58746]': theme === THEME_BOT?.COFFEE,
          'bg-[#C46EFF]': theme === THEME_BOT?.CYBERPUNK,
          'bg-[#3B1FFF]': theme === THEME_BOT?.DEFAULT,
          'bg-[#3E8800]': theme === THEME_BOT?.LEMON,
          'bg-[#15233E]': theme === THEME_BOT?.LUXURY,
          'bg-[#198E72]': theme === THEME_BOT?.RETRO,
          'bg-[#E36471]': theme === THEME_BOT?.VALENTINE,
        },
      )}
    >
      <IconChatFill color={renderColorIconChat()} />
    </div>
  );
};
export default BubbleChat;
