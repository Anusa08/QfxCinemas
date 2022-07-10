import React, {useMemo} from 'react';
import Profile from '@screens/Myprofilescreen/myprofile';
import CustomHeader from '@components/HighOrderComponents/hoc';

/**
 * @author Anusha Pandey
 * @function @ProfileWrapper
 **/

const ProfileWrapper = () => {
  const ProfileHeader = useMemo(() => {
    return CustomHeader(Profile);
  }, []);
  return (
    <>
      <ProfileHeader />
    </>
  );
};

export default ProfileWrapper;
