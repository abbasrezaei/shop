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
const WD = Dimensions.get('window').width;

const ProductsOtherBuy = () => {
  return (
    <View>
      <View style={styles.head}>
        <Text style={styles.textRight}>کالای مشابه </Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={KalaOneList}
        renderItem={({item, index}) => (
          <Ripple style={styles.flatlist}>
            <View style={styles.viewImg}>
              <Image style={styles.img} source={item.img} />
            </View>
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
    justifyContent: 'flex-end',
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
    color: '#515151',
    fontFamily: 'IRANSansFaNum',
  },
  flatlist: {
    backgroundColor: '#fff',
    width: WD / 3,
    height: WD / 2,
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 3,
  },
  viewImg: {
    width: '90%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',

    resizeMode: 'contain',
  },

  viewName: {
    height: '22%',
    padding: 7,
  },
  textName: {
    fontSize: 14,
    color: '#888888',
    fontFamily: 'IRANSansFaNum',
  },

  viewPrice: {
    borderTopWidth: 0.5,
    borderTopColor: '#888888',
    height: '13%',
    padding: 5,
  },
  textPrice: {
    color: '#1B1464',
    textAlign: 'left',
    fontFamily: 'IRANSansFaNum',
  },
});

export default React.memo(ProductsOtherBuy);
