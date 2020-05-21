import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerMenu = () => {
  // const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Ripple style={styles.btnUser}>
          <Text style={styles.txtHead}>ورود یا ثبت نام</Text>
          <FIcon name="user" size={20} color="#fff" />
        </Ripple>
      </View>
      <View style={styles.bodyDrawer}>
        <Ripple style={styles.btnBody}>
          <Text style={styles.txtBody}>خانه</Text>
          <MIcon name="home" size={20} color="#999" />
        </Ripple>
        <Ripple style={styles.btnBody}>
          <Text style={styles.txtBody}>لیست دسته بندی محصولات</Text>
          <MIcon
            name="format-list-bulleted-square"
            size={20}
            color="#999"
            style={{rotation: 180}}
          />
        </Ripple>
        <Ripple style={[styles.btnBody, styles.btnBorder]}>
          <Text style={styles.txtBody}>سبد خرید</Text>
          <MIcon name="cart" size={20} color="#999" />
        </Ripple>
        <Ripple style={[styles.btnBody, styles.btnBorder]}>
          <Text style={styles.txtBody}>پرفروش ترین ها</Text>
          <MIcon name="star" size={20} color="#999" />
        </Ripple>
        <Ripple style={styles.btnBody}>
          <Text style={styles.txtBody}>پیشنهاد ویژه دیجی کالا</Text>
          <MIcon name="star" size={20} color="#999" />
        </Ripple>
        <Ripple style={styles.btnBody}>
          <Text style={styles.txtBody}>پربازدیدترین ها</Text>
          <MIcon name="star" size={20} color="#999" />
        </Ripple>
        <Ripple style={styles.btnBody}>
          <Text style={styles.txtBody}>جدیدترین ها</Text>
          <MIcon name="star" size={20} color="#999" />
        </Ripple>

        <Ripple style={[styles.btnBody, styles.btnBorder]}>
          <Text style={styles.txtBody}>تنظیمات</Text>
          <MIcon name="settings" size={20} color="#999" />
        </Ripple>
        <Ripple style={styles.btnBody}>
          <Text style={styles.txtBody}>سوالات متداول</Text>
          <FIcon name="question-circle-o" size={20} color="#999" />
        </Ripple>
        <Ripple style={styles.btnBody}>
          <Text style={styles.txtBody}>درباره ما</Text>
          <MIcon name="information" size={20} color="#999" />
        </Ripple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  head: {
    width: '100%',
    height: '15%',
    backgroundColor: '#EF394E',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 20,
  },
  txtHead: {
    color: '#fff',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 3,
    marginRight: 8,
    padding: 5,
    fontFamily: 'IRANSansMobile',
  },
  btnUser: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyDrawer: {
    width: '100%',
    height: '85%',
  },
  btnDrawer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  btnBody: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
  },
  txtBody: {
    fontSize: 14,
    color: '#222',
    marginRight: 20,
    fontFamily: 'IRANSansMobile',
  },
  btnBorder: {
    borderTopColor: '#bdc3c7',
    borderTopWidth: 1,
  },
});

export default React.memo(DrawerMenu);
