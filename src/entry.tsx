import {AuthProvider} from '@components/Context/AuthContext';
import globalStore from '@redux/store/Rootstore';
import React, {FC, useEffect} from 'react';
import {Provider} from 'react-redux';
import StackNav from './Navigation/stack';
import compareAppVersion from './utils/checkAppVersion';

interface IProps {}

/**
 * @author Anusha Pandey
 * @function @Entry
 **/

const Entry: FC<IProps> = props => {
  useEffect(() => {
    setTimeout(() => {
      compareAppVersion();
    }, 4000);
  });
  return (
    <AuthProvider>
      <Provider store={globalStore}>
        <StackNav />
      </Provider>
    </AuthProvider>
  );
};

export default Entry;
