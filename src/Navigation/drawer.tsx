import React, {FC, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginWrapper from '@components/Wrappers/login/login';
import HomeWrapper from '@components/Wrappers/Home/home';
import ProfileWrapper from '@components/Wrappers/Myprofile/Myprofile';
import CustomDrawer from '@components/customDrawer/customDrawer';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '@assets/styles/colors';
import {AuthContext} from '@components/Context/AuthContext';

interface IProps {}

/**
 * @author Anusha Pandey
 * @function @DrawerNavigator
 **/

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC<IProps> = () => {
  const {userInfo} = useContext(AuthContext);
  const {iconContainer, icon} = styles;

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        drawerLabelStyle: {
          color: colors.primary,
          fontSize: 17,
          fontWeight: 'normal',
        },
        headerShown: false,
        drawerItemStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeWrapper}
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <EntypoIcon name="home" size={22} color={color} style={icon} />
            </View>
          ),
        }}
      />
      {userInfo ? null : (
        <Drawer.Screen
          name="Login"
          component={LoginWrapper}
          options={{
            drawerIcon: ({color}) => (
              <View style={iconContainer}>
                <AntIcon name="login" size={22} color={color} style={icon} />
              </View>
            ),
          }}
        />
      )}
      {userInfo ? (
        <Drawer.Screen
          name="My Profile"
          component={ProfileWrapper}
          options={{
            drawerIcon: ({color}) => (
              <View style={iconContainer}>
                <MaterialCommunityIcon
                  name="face-man-profile"
                  size={22}
                  color={color}
                  style={icon}
                />
              </View>
            ),
          }}
        />
      ) : null}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.offWhite,
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: -15,
  },
  icon: {
    color: colors.primary,
    textAlign: 'center',
    paddingTop: 8,
  },
});

export default DrawerNavigator;
