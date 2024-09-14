import { ReactElement } from 'react';

import Settings from '@components/Settings';
import MainLayout from '@layout/MainLayout';

const SettingsPage = () => {
  return <Settings />;
};

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default SettingsPage;
