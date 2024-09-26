import { ReactElement, useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { setAuthCookies } from '@store/auth';
import { ROUTE_PATH } from '@utils/common';

const GoogleAuthenticationSuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.access_token) {
      router.push(ROUTE_PATH.Home);
      setAuthCookies({
        token: router.query.access_token as string,
      });
    }
  }, [router]);

  return (
    <div className='flex items-center flex-col gap-4 h-screen justify-center'>
      <Image
        src={'/images/loading.gif'}
        width={200}
        height={200}
        className='w-[200px] h-[200px] object-cover'
        alt=''
      />
    </div>
  );
};

GoogleAuthenticationSuccessPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <>{page}</>
    </>
  );
};

export default GoogleAuthenticationSuccessPage;
