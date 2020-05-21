import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {KalaSliderData} from '../../Data/DataArray';
const w = Dimensions.get('window').width;
const KalaSlider = () => {
  return (
    <View style={styles.container}>
      <Swiper>
        {KalaSliderData.map((item, key) => (
          <TouchableWithoutFeedback style={styles.btn} key={key}>
            <Image style={styles.img} source={item.img} />
          </TouchableWithoutFeedback>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: w / 1.7,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default React.memo(KalaSlider);
