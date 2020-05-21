import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {KalaOneList} from '../../Data/DataArray';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';

const WD = Dimensions.get('window').width;

const KalaTow = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.head}>
        <Text style={styles.textLeft}>لیست کامل</Text>
        <Text style={styles.textRight}>جدیدترین محصولات </Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={KalaOneList}
        renderItem={({item, index}) => (
          <Ripple
            style={styles.flatlist}
            onPress={() => navigation.navigate('KalaScreen')}>
            <Image style={styles.img} source={item.img} />
            <View style={styles.viewName}>
              <Text style={styles.textName}>{item.name}</Text>
            </View>
            <View style={styles.viewPrice}>
              <Text style={styles.textPrice}>{item.price} تومان</Text>
            </View>
          </Ripple>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textLeft: {
    color: 'blue',
    fontSize: 16,
    fontFamily: 'IRANSansFaNum',
  },
  textRight: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'IRANSansFaNum',
  },
  flatlist: {
    backgroundColor: '#fff',
    width: WD / 3,
    height: WD / 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
  },

  img: {
    width: '95%',
    height: '66%',
    padding: 10,
    resizeMode: 'contain',
  },

  viewName: {
    textAlign: 'right',
    paddingTop: 10,
    paddingRight: 5,
    height: '18%',
    width: '100%',
  },
  textName: {
    fontSize: 12,
    fontFamily: 'IRANSansFaNum',
  },

  viewPrice: {
    width: '100%',
    height: '18%',
    borderTopWidth: 0.5,
    borderTopColor: '#9a9a9a',
  },
  textPrice: {
    padding: 8,
    color: '#1B1464',
    textAlign: 'left',
    fontSize: 12,
    fontFamily: 'IRANSansFaNum',
  },
});

export default React.memo(KalaTow);
