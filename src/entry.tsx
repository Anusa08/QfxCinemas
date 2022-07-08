import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StackNav from './Navigation/stack';
import Splashscreen from './screens/splashscreen/splash';


interface IProps {}

/**
 * @author Anusha Pandey
 * @function @Entry
 **/

const Entry: FC<IProps> = props => {
  
  return (
    // <Splashscreen/>
    <StackNav/>
  );
};


export default Entry;
