import React from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {CatList} from '../../Data/DataArray';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Catkala = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {CatList.map((item, key) => (
        <TouchableOpacity style={styles.btn} key={key}>
          <Icon
            name="keyboard-arrow-left"
            size={16}
            style={{color: '#00BFD7'}}
          />
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
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#00BFD7',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'IRANSansFaNum',
  },
});
export default React.memo(Catkala);
