import React, {useMemo} from 'react';
import TopTabNavigator from '@Navigation/toptab';
import CustomHeader from '@components/HighOrderComponents/hoc';

/**
 * @author ANusha PAndey
 * @function @HomeWrapper
 **/

const HomeWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(TopTabNavigator);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default HomeWrapper;