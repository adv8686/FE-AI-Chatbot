import { ReactElement, useEffect } from 'react';

import { useRouter } from 'next/router';

import Dashboard from '@components/Dashboard';
import MainLayout from '@layout/MainLayout';
import { getAccessToken } from '@store/auth';
import { ROUTE_PATH } from '@utils/common';

const HomePage = () => {
  const token = getAccessToken();
  const router = useRouter();
  useEffect(() => {
    if (token) {
      router.push(ROUTE_PATH.Home);
    } else {
      router.push(ROUTE_PATH.SIGN_IN);
    }
  }, [token]);

  return <Dashboard />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

//

export default HomePage;
