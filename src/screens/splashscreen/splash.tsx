import React, {FC} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import logo from '../../assets/images/loginHeader.png';
interface IProps {}

/**
 * @author Anusha Pandey
 * @function @Splashscreen
 **/

const Splashscreen: FC<IProps> = props => {
  const {container, logoContainer, image} = styles;
  return (
    <View style={container}>
      <View style={logoContainer}>
        <Image source={logo} style={image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  logoContainer: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
});
export default Splashscreen;
