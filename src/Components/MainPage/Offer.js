import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {OfferList} from '../../Data/DataArray';
import {useNavigation} from '@react-navigation/native';
const w = Dimensions.get('window').width;
const Offer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {OfferList.map((item, key) =>
        key === 2 ? (
          <Ripple
            style={styles.one_box}
            key={key}
            onPress={() => navigation.navigate('OfferScreen')}>
            <Image style={styles.img} source={item.img} />
          </Ripple>
        ) : (
          <Ripple
            style={styles.tow_box}
            key={key}
            onPress={() => navigation.navigate('OfferScreen')}>
            <Image style={styles.img} source={item.img} />
          </Ripple>
        ),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  tow_box: {
    borderRadius: 10,
    width: '47%',
    height: w / 3,
    backgroundColor: 'red',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  one_box: {
    borderRadius: 10,
    width: '97%',
    height: w / 3,

    marginHorizontal: 5,
    marginVertical: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default React.memo(Offer);
