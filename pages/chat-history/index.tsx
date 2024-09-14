import { ReactElement } from 'react';

import ChatHistory from '@components/ChatHistory';
import MainLayout from '@layout/MainLayout';

const ChatHistoryPage = () => {
  return <ChatHistory />;
};

ChatHistoryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default ChatHistoryPage;
