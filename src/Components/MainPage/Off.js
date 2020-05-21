import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import Ripple from 'react-native-material-ripple';
// import OffList from '../../Data/DataArray';
import {useNavigation} from '@react-navigation/native';
const w = Dimensions.get('window').width;
const Off = () => {
  const navigation = useNavigation();
  return (
    <Ripple
      style={styles.container}
      onPress={() => navigation.navigate('OfferScreen')}>
      <Image style={styles.img} source={require('../../assets/img/off.jpg')} />
    </Ripple>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: w / 3,
    marginVertical: 10,
  },
  img: {width: '100%', height: '100%'},
});

export default React.memo(Off);
