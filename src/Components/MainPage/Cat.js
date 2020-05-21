import React from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {CatList} from '../../Data/DataArray';
import {useNavigation} from '@react-navigation/native';
const Cat = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {CatList.map((item, key) => (
        <TouchableOpacity
          style={styles.btn}
          key={key}
          onPress={() => navigation.navigate('CategoryScreen')}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#44bd32',
    textAlign: 'center',
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 5,
  },

  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'IRANSansFaNum',
  },
});
export default React.memo(Cat);
