import { ReactElement } from 'react';

import CreateBot from '@components/CreateBot';
import MainLayout from '@layout/MainLayout';

const CreateBotPage = () => {
  return <CreateBot />;
};

CreateBotPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default CreateBotPage;
