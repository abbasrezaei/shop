import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const w = Dimensions.get('window').width;

const Buttons = () => {
  return (
    <View style={styles.container}>
      <Ripple style={styles.btn}>
        <Text style={styles.txt}>نظرات کاربران</Text>
        <Icon name="comment-outline" size={20} style={{color: '#7f8c8d'}} />
      </Ripple>
      <Ripple style={styles.btn}>
        <Text style={styles.txt}>مشخصات</Text>
        <Icon name="content-paste" size={20} style={{color: '#7f8c8d'}} />
      </Ripple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: null,
    height: w / 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    elevation: 2,
    width: '48%',
    height: '100%',
    backgroundColor: '#fff',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#2c3e50',
    fontSize: 16,
    marginRight: 10,
    fontFamily: 'IRANSansFaNum',
  },
});

export default React.memo(Buttons);
