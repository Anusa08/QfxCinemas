import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EntryNav from './entryNav';
import Splashscreen from '../screens/splashscreen/splash';
import MovieDetailsWrapper from '@components/Wrappers/MovieDetailsWrappers/MovieDetails';

interface IProps {}

/**
 * @author Anusha Pandey
 * @function @StackNav
 **/

const Stack = createStackNavigator();
const StackNav: FC<IProps> = props => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {showSplashScreen ? (
          <Stack.Screen name="Home" component={Splashscreen} />
        ) : null}
        <Stack.Screen name="Homes" component={EntryNav} />
        <Stack.Screen
          name="MovieDetailsWrapper"
          component={MovieDetailsWrapper}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
