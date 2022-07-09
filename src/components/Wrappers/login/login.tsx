import React, {useMemo} from 'react';
import Login from '@screens/loginscreen/login';
import CustomHeader from '@components/HighOrderComponents/hocScreens';

/**
 * @author Anusha Pandey
 * @function @LoginWrapper
 **/

const LoginWrapper = () => {
  const LoginHeader = useMemo(() => {
    return CustomHeader(Login);
  }, []);
  return (
    <>
      <LoginHeader />
    </>
  );
};

export default LoginWrapper;