import globalStore from '@redux/store/Rootstore';
import React, {FC, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import StackNav from './Navigation/stack';
import Splashscreen from './screens/splashscreen/splash';
import compareAppVersion from './utils/checkAppVersion';


interface IProps {}

/**
 * @author Anusha Pandey
 * @function @Entry
 **/

const Entry: FC<IProps> = props => {
  useEffect(()=>{
    setTimeout(()=>{
      compareAppVersion()
    },4000)
  })
  return (
    <Provider store={globalStore}>
        <StackNav/>
    </Provider>
    
  );
};


export default Entry;
