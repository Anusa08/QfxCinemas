import React from 'react';
import CustomHeader from '../Customheader/HomeHeader';
/**
 * @author Anusha Pandey 
 * @function @HOC
 **/

const HOC =
  (Component: any) =>
  ({props}: any) =>
    (
      <>
        <CustomHeader />
        <Component {...props} />
      </>
    );

export default HOC;