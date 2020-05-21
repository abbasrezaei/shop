import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import {ContentData} from '../../Data/DataArray';
import {useNavigation} from '@react-navigation/native';
const w = Dimensions.get('window').width;
const ContentCategory = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={ContentData}
        renderItem={({item, key}) => (
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={1}
            onPress={() => navigation.navigate('AboutCategory')}>
            <Image source={item.img} style={styles.img} />
            <Text style={styles.txt}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    width: w,
    height: w / 6,
    borderBottomColor: '#9a9a9a',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingVertical: 5,
  },
  img: {
    width: w / 6,
    height: '90%',
    resizeMode: 'contain',
  },
  txt: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'IRANSansFaNum',
  },
});

export default React.memo(ContentCategory);
