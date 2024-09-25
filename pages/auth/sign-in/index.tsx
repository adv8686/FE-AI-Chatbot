import { ReactElement } from 'react';

import SignIn from '@components/SignIn';

const SignInPage = () => {
  return <SignIn />;
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className='w-full h-screen overflow-auto overflow-x-hidden'>
      <>{page}</>
    </div>
  );
};

export default SignInPage;
