import React, {useState} from 'react';
import {View, Share, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {kalaName} from '../../Data/DataArray';
import Ripple from 'react-native-material-ripple';
const w = Dimensions.get('window').width;
const ShareKala = () => {
  const [shareValue, setShareValue] = useState('');
  const Shared = () => {
    Share.share({
      message: shareValue.toString(),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Ripple style={styles.btn} onPress={() => Shared()}>
          <Icon name="share-google" size={25} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Icon name="bell" size={25} />
        </Ripple>
        <Ripple style={styles.btn}>
          <Icon name="heart" size={25} />
        </Ripple>
      </View>
      {kalaName.map((item, key) => (
        <View style={styles.box2}>
          <Text style={styles.p_name}>{item.p_name}</Text>
          <Text style={styles.e_name}>{item.e_name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w,
    height: w / 4,
    backgroundColor: '#dfe4ea',
    borderBottomWidth: 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  box1: {
    padding: 10,
    opacity: 0.5,
    flexDirection: 'row',
  },
  box2: {
    paddingHorizontal: 15,
  },

  p_name: {
    fontSize: 18,
    fontFamily: 'IRANSansFaNum',
  },
  e_name: {
    fontSize: 16,
    color: '#9E9E9E',
    textAlign: 'right',
    fontFamily: 'IRANSansFaNum',
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
});

export default React.memo(ShareKala);
