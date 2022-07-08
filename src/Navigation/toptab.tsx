import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Nowshowing from '../screens/home/Nowshowing';
import ComingSoon from '../screens/home/ComingSoon';
import Cinemas from '../screens/home/Cinemas';

interface IProps {}

/**
* @author Anusha Pandey 
* @function @TopTab
**/

const Tab = createMaterialTopTabNavigator();
 const TopTab :FC<IProps> = (props) => { 


 return(
  
    <Tab.Navigator >
        <Tab.Screen name='Nowshowing' component={Nowshowing}/>
        <Tab.Screen name='ComingSoon' component={ComingSoon}/>
        <Tab.Screen name='Cinemas' component={Cinemas}/>
        
    </Tab.Navigator>
  
  )
}
export default TopTab;