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
import CountDown from 'react-native-countdown-component';
import {useNavigation} from '@react-navigation/native';

const WD = Dimensions.get('window').width;
const AmazingSuggestion = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.head}>
        <CountDown
          size={15}
          until={24 * 60 * 60 * 60}
          onFinish={() =>
            alert('زمان پیشنهاد شگفت انگیز به پایان رسید لطفا منتظر بمانید')
          }
          digitStyle={{
            backgroundColor: '#777',
            borderWidth: 0.5,
            borderColor: '#9a9a9a',
            borderRadius: 1,
          }}
          digitTxtStyle={{color: '#fff'}}
          timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
          separatorStyle={{color: '#1CC625'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
        />
        <Text style={styles.textRight}>
          پیشنهاد
          <Text style={[styles.textRight, {color: 'red'}]}> شگفت انگیز</Text>
        </Text>
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
              <Text
                style={[
                  styles.textPrice,
                  {textDecorationLine: 'line-through', fontSize: 11},
                ]}>
                {item.price} تومان
              </Text>
              <Text style={[styles.textPrice, {color: 'green'}]}>
                {item.price} تومان
              </Text>
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
  },
  textRight: {
    fontSize: 16,
    fontFamily: 'IRANSansMobile',
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
    height: '60%',
    padding: 10,
    resizeMode: 'contain',
  },

  viewName: {
    textAlign: 'right',
    paddingTop: 10,
    paddingRight: 5,
    height: '20%',
    width: '100%',
  },
  textName: {
    fontSize: 12,
    fontFamily: 'IRANSansFaNum',
  },

  viewPrice: {
    width: '100%',
    height: '20%',
    borderTopWidth: 0.5,
    borderTopColor: '#9a9a9a',
    paddingLeft: 7,
  },
  textPrice: {
    color: '#1B1464',
    textAlign: 'left',
    fontSize: 12,
    fontFamily: 'IRANSansFaNum',
  },
});

export default React.memo(AmazingSuggestion);
