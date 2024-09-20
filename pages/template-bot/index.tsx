import { ReactElement } from 'react';

import TemplateBot from '@components/TemplateBot';
import MainLayout from '@layout/MainLayout';

const TemplateBotPage = () => {
  return <TemplateBot />;
};

TemplateBotPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default TemplateBotPage;
