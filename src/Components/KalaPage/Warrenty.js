import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const w = Dimensions.get('window').width;

const Warrenty = () => {
  const navigation = useNavigation();
  const [border_color, setBorderColor] = useState('black');

  const changeBorderColor = (Color) => {
    setBorderColor(Color);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sec1}>
        <View style={styles.sec1_part1}>
          <Text>3رنگ</Text>
          <Text>رنگ</Text>
        </View>
        <View style={styles.sec1_part2}>
          <TouchableOpacity
            style={[
              styles.sec1_part2_box,
              border_color === '#fff' ? {borderColor: 'blue'} : {},
            ]}
            onPress={() => changeBorderColor('#fff')}>
            <View
              style={[styles.sec1_part2_box_circle, {backgroundColor: '#fff'}]}
            />
            <Text style={{fontSize: 14}}>سفید</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sec1_part2_box,
              border_color === 'red' ? {borderColor: 'blue'} : {},
            ]}
            onPress={() => changeBorderColor('red')}>
            <View
              style={[styles.sec1_part2_box_circle, {backgroundColor: 'red'}]}
            />
            <Text style={{fontSize: 14}}>قرمز</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sec1_part2_box,
              border_color === 'blue' ? {borderColor: 'blue'} : {},
            ]}
            onPress={() => changeBorderColor('blue')}>
            <View
              style={[styles.sec1_part2_box_circle, {backgroundColor: 'blue'}]}
            />
            <Text style={{fontSize: 14}}>آبی</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sec1_part3}>
          <Text>گارانتی 18 ماهه دیجی کالا</Text>
          <Icon
            name="shield-check"
            size={20}
            style={{marginLeft: 8, color: '#9a9a9a'}}
          />
        </View>
        <View style={[styles.sec2, styles.border_top]}>
          <View style={styles.sec2_part}>
            <Text style={{color: '#535c68', marginHorizontal: 10}}>
              فروش توسط دیجی کالا
            </Text>
            <Icon name="store" size={20} style={{color: '#9A9A9A'}} />
          </View>
          <View style={styles.sec2_part}>
            <Text>1 روز آینده</Text>
            <Text style={{color: '#535c68', marginHorizontal: 10}}>
              آماده ارسال از انبار دیجی کالااز
            </Text>
            <Icon name="truck" size={20} style={{color: '#9A9A9A'}} />
          </View>
          <View style={[styles.sec3_part1, styles.border_top]}>
            <View style={styles.totalPrice}>
              <Text style={{fontSize: 18, color: '#FB3449'}}>1999000تومان</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#444444',
                  marginLeft: 20,
                  textDecorationLine: 'line-through',
                }}>
                2320000 تومان
              </Text>
            </View>
            <Ripple
              style={styles.btnBasket}
              onPress={() => navigation.navigate('CartScreen')}>
              <Text style={styles.txtBsket}>افزودن به سبد خرید</Text>
              <Icon
                name="cart"
                size={20}
                style={{marginLeft: 8, color: '#fff'}}
              />
            </Ripple>
          </View>
          <View style={[styles.sec4, styles.border_top]}>
            <View>
              <Ionicons
                name="ios-arrow-back"
                size={20}
                style={{color: '#9A9A9A'}}
              />
            </View>
            <View style={styles.sec4_part1}>
              <Text style={{color: '#00BFD6'}}>
                چهار فروشندیه دیگر برای این کالا موجوداست
              </Text>
              <Icon
                name="store"
                size={20}
                style={{color: '#9A9A9A', marginLeft: 10}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 20,
    elevation: 2,
  },
  border_top: {
    borderTopWidth: 0.7,
    borderColor: '#bbb',
    paddingTop: 10,
  },
  sec1_part1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  sec1_part2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  sec1_part2_box: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: w / 7.5,
    height: w / 7.5,
    marginHorizontal: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sec1_part2_box_circle: {
    borderRadius: 50,
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderWidth: 0.5,
  },
  sec1_part3: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
  },
  sec2: {marginVertical: 10, marginHorizontal: 10},
  sec2_part: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'space-between',
    marginBottom: 6,
  },
  sec3_part1: {marginVertical: 10},
  btnBasket: {
    width: '100%',
    height: w / 7,
    backgroundColor: '#EF394E',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  txtBsket: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'IRANSansFaNum',
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },

  sec4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  sec4_part1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default React.memo(Warrenty);
