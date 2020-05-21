import React from 'react';
import {
  View,
  Picker,
  Image,
  Alert,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {cartData} from '../../Data/DataArray';
const w = Dimensions.get('window').width;
const Cart = () => {
  const alrtDelete = () => {
    Alert.alert(
      '',
      'آیا مایل به حذف کالا مورد نظر از سبد خرید هستید؟',
      [
        {
          text: '',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'خیر',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'بله', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      {cartData.map((item, key) => (
        <View key={key} style={styles.mainContent}>
          <View style={styles.contain}>
            <View style={styles.cartDetail}>
              <Text style={styles.txtEname}>{item.e_name}</Text>
              <Text style={styles.txtFname}>{item.p_name}</Text>
              <View style={styles.viewColor}>
                <Text style={styles.txtFname}>{item.color_txt}</Text>
                <View
                  style={[
                    styles.productColor,
                    {backgroundColor: item.color_rgb},
                  ]}
                />
              </View>
              <View style={styles.warranty}>
                <Text style={styles.txtFname}>{item.warranty}</Text>
                <Icon
                  name="shield-check-outline"
                  size={18}
                  style={styles.icn}
                />
              </View>
              <View style={styles.warranty}>
                <Text style={styles.txtFname}>{item.sotre}</Text>
                <Icon name="store" size={18} style={styles.icn} />
              </View>
              <View style={styles.count}>
                <Picker
                  style={{height: 40, width: 80, fontSize: 12}}
                  mode="dropdown">
                  <Picker.Item label={item.number} value={item.number} />
                </Picker>
                <Text style={styles.txtFname}>تعداد:</Text>
              </View>
            </View>

            <View style={styles.viewImg}>
              <Image source={item.img} style={styles.img} />
            </View>
          </View>

          <View style={styles.price}>
            <View style={styles.tolalPrice}>
              <Text style={styles.txtToltalPrice}>{item.total_price} تومان</Text>
              <Text style={styles.txtToltalPrice}> قیمت کل</Text>
            </View>
          </View>
          <View style={styles.price}>
            <View style={styles.endPrice}>
              <Text style={styles.endPriceText}>{item.end_price} تومان</Text>
              <Text style={styles.endPriceText}> قیمت نهایی</Text>
            </View>
          </View>
          <View style={styles.deleteBox}>
            <Text style={styles.txtDelete} onPress={() => alrtDelete()}>
              حذف
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    marginHorizontal: 10,
    flexDirection: 'column',
    elevation: 2,
    marginVertical: 8,
    
  },
  mainContent: {
    elevation: 2,
    marginVertical: 5,
    width: null,
    height: null,
    backgroundColor: '#fff',
  },
  contain: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  img: {
    width: w / 7,
    height: w / 7,
    resizeMode: 'contain',
  },
  viewImg: {
    width: '15%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
  },
  cartDetail: {
    width: '85%',
    height: null,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 10,
  },
  txtEname: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'IRANSansFaNum',
  },
  txtFname: {
    fontSize: 14,
    color: '#9a9a9a',
    marginTop: 5,
    fontFamily: 'IRANSansFaNum',
  },
  viewColor: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  productColor: {
    width: 15,
    height: 15,
    borderRadius: 100,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#9a9a9a',
  },
  warranty: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icn: {
    color: '#9a9a9a',
    marginLeft: 20,
    marginTop: 5,
    paddingRight: 0,
  },
  count: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    fontFamily: 'IRANSansFaNum',
  },
  price: {
    flexDirection: 'column',
    width: '100%',
    height: w / 8,
    backgroundColor: '#F0F0F1',
  },
  tolalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 0.4,
    borderTopColor: '#9a9a9a',
    fontFamily: 'IRANSansFaNum',
  },
  endPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 0.4,
    borderTopColor: '#9a9a9a',
    fontFamily: 'IRANSansFaNum',
  },
  endPriceText: {
    color: '#EF394E',
    fontSize: 16,
    fontFamily: 'IRANSansFaNum',
  },
  txtToltalPrice: {
    color: '#999',
    fontSize: 14,
    fontFamily: 'IRANSansFaNum',
  },
  deleteBox: {
    width: '100%',
    height: w / 8,
    borderTopColor: '#9a9a9a',
    borderTopWidth: 0.4,
    backgroundColor: '#fff',
  },
  txtDelete: {
    fontSize: 20,
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 15,
    fontFamily: 'IRANSansFaNum',
  },
});

export default React.memo(Cart);
