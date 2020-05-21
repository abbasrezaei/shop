import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {SwiperList} from '../../Data/DataArray';
import Swiper from 'react-native-swiper';

const w = Dimensions.get('window').width;

const Slider = () => {
  return (
    <View style={styles.continer}>
      <Swiper
        autoplay={true}
        showsButtons={false}
        autoplayTimeout={4}
        autoplayDirection={false}>
        {SwiperList.map((item, key) => (
          <TouchableWithoutFeedback style={styles.btn} key={key}>
            <Image style={styles.img} source={item.img} />
          </TouchableWithoutFeedback>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    height: w / 2,
  },
  btn: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default React.memo(Slider);
