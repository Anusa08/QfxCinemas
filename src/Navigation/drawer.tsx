import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Nowshowing from '../screens/home/Nowshowing';
import MyProfileScreen from '../screens/Myprofilescreen/myprofile';
import TopTab from './toptab';
import HomeWrapper from '@components/Wrappers/Home/home';

interface IProps {}

/**
* @author Anusha Pandey 
* @function @DrawerNav
**/

const Drawer = createDrawerNavigator();
 const DrawerNav :FC<IProps> = (props) => { 


 return(
  
    <Drawer.Navigator  initialRouteName='Home' screenOptions={{headerShown:false}} > 
      <Drawer.Screen name='Home' component={HomeWrapper}/>
      <Drawer.Screen name= 'My Profile' component={MyProfileScreen}/>

    </Drawer.Navigator>
  
  )
}



export default DrawerNav;