import { ReactElement } from 'react';

import Dashboard from '@components/Dashboard';
import MainLayout from '@layout/MainLayout';

const HomePage = () => {
  return <Dashboard />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default HomePage;
