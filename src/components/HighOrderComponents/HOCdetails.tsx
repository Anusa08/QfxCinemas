import React from 'react';
import CustomHeader from '@components/Customheader/MovieDetails';
/**
 * @author Anusha Pandey
 * @function @HOC
 **/

const HOCScreen = ({children}: any) => {
  return (
    <>
      <CustomHeader />
      {children}
    </>
  );
};

export default HOCScreen;
