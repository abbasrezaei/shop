import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Image, Text, Modal} from 'react-native';
import Ripple from 'react-native-material-ripple';
const w = Dimensions.get('window').width;
// import {OffersData} from '../../Data/DataArray';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Products} from '../../Data/DataArray';
import {useNavigation} from '@react-navigation/native';
const Offers = () => {
  const navigation = useNavigation();
  const [changeBoxState, setChangeBoxState] = useState(1);
  const [changeIcon, setChangeIcon] = useState(
    <Icon name="view-grid" size={20} style={styles.iconHeader} />,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectIcon, setSelectIcon] = useState(1);
  const ChangeBoxValue = () => {
    switch (changeBoxState) {
      case 1:
        setChangeBoxState(2);
        setChangeIcon(
          <Icon
            name="format-list-bulleted"
            size={20}
            style={[styles.iconHeader, {rotation: 180}]}
          />,
        );
        break;
      case 2:
        setChangeBoxState(3);
        setChangeIcon(<Icon name="grid" size={20} style={styles.iconHeader} />);
        break;
      case 3:
        setChangeBoxState(1);
        setChangeIcon(
          <Icon name="view-grid" size={20} style={styles.iconHeader} />,
        );
        break;
    }
  };

  const Header = () => {
    return (
      <View style={styles.topHeader}>
        <Ripple
          style={[styles.center, styles.headerTopLeft]}
          onPress={() => ChangeBoxValue()}>
          {changeIcon}
        </Ripple>
        <Ripple
          style={[styles.center, styles.headerTopRight]}
          onPress={() => setModalVisible(true)}>
          <View style={styles.txtBox}>
            <Text style={styles.txt1}>مرتب سازی</Text>
            <Text style={styles.txt2}> پربازدیدترین</Text>
          </View>
          <Icon name="sort-variant" size={20} style={styles.iconHeader} />
        </Ripple>
        <View style={[styles.center, styles.headerTopRight]}>
          <View style={styles.txtBox}>
            <Text style={styles.txt1}>فیلتر براساس</Text>
            <Text style={styles.txt2}> رنگ،نوع،قیمت و...</Text>
          </View>
          <Icon name="filter-variant" size={20} style={styles.iconHeader} />
        </View>
      </View>
    );
  };

  const ChangeModalIcon = (num) => {
    setSelectIcon(num);
    setModalVisible(false);
  };

  const ModdalView = () => {
    return (
      <Modal visible={modalVisible} transparent={true}>
        <Ripple
          onPress={() => setModalVisible(false)}
          rippleColor="transparent"
          style={modalStyle.rippleA}
        />
        <View style={modalStyle.centerView}>
          <View style={modalStyle.modalmain}>
            <Ripple onPress={() => ChangeModalIcon(1)} style={modalStyle.btn}>
              <Text> پرفروش ترین ها</Text>
              {selectIcon === 1 ? (
                <Icon
                  name="circle-slice-8"
                  size={22}
                  style={modalStyle.modalIcon}
                  color="#1194F6"
                />
              ) : (
                <Icon
                  name="checkbox-blank-circle-outline"
                  size={22}
                  style={modalStyle.modalIcon}
                />
              )}
            </Ripple>

            <Ripple onPress={() => ChangeModalIcon(2)} style={modalStyle.btn}>
              <Text> پربازدیدترین ها</Text>
              {selectIcon === 2 ? (
                <Icon
                  name="circle-slice-8"
                  size={22}
                  style={modalStyle.modalIcon}
                  color="#1194F6"
                />
              ) : (
                <Icon
                  name="checkbox-blank-circle-outline"
                  size={22}
                  style={modalStyle.modalIcon}
                />
              )}
            </Ripple>

            <Ripple onPress={() => ChangeModalIcon(3)} style={modalStyle.btn}>
              <Text> قیمت هااز زیاد به کم</Text>
              {selectIcon === 3 ? (
                <Icon
                  name="circle-slice-8"
                  size={22}
                  style={modalStyle.modalIcon}
                  color="#1194F6"
                />
              ) : (
                <Icon
                  name="checkbox-blank-circle-outline"
                  size={22}
                  style={modalStyle.modalIcon}
                />
              )}
            </Ripple>

            <Ripple onPress={() => ChangeModalIcon(4)} style={modalStyle.btn}>
              <Text> قیمت از کم به زیاد</Text>
              {selectIcon === 4 ? (
                <Icon
                  name="circle-slice-8"
                  size={22}
                  style={modalStyle.modalIcon}
                  color="#1194F6"
                />
              ) : (
                <Icon
                  name="checkbox-blank-circle-outline"
                  size={22}
                  style={modalStyle.modalIcon}
                />
              )}
            </Ripple>

            <Ripple onPress={() => ChangeModalIcon(5)} style={modalStyle.btn}>
              <Text> جدیدترین ها</Text>
              {selectIcon === 5 ? (
                <Icon
                  name="circle-slice-8"
                  size={22}
                  style={modalStyle.modalIcon}
                  color="#1194F6"
                />
              ) : (
                <Icon
                  name="checkbox-blank-circle-outline"
                  size={22}
                  style={modalStyle.modalIcon}
                />
              )}
            </Ripple>
          </View>
        </View>
        <Ripple
          onPress={() => setModalVisible(false)}
          rippleColor="transparent"
          style={modalStyle.rippleA}
        />
      </Modal>
    );
  };

  const Full = (props) => {
    return (
      <Ripple
        style={fullStyles.main}
        onPress={() => navigation.navigate('KalaScreen')}>
        <View style={fullStyles.sec1}>
          <View style={fullStyles.imgBox}>
            <Image source={props.data.img} style={fullStyles.img} />
          </View>
          <View style={fullStyles.txtImgBox}>
            <Text style={fullStyles.txtPname}>{props.data.p_name}</Text>
            <Text style={fullStyles.txtEname}>{props.data.e_name}</Text>
          </View>
        </View>
        <View style={fullStyles.sec2}>
          <View style={fullStyles.priceBox}>
            <Text style={fullStyles.fristPrice}>
              {props.data.fristPrice} تومان
            </Text>
            <Text style={fullStyles.fainalPrice}>
              {props.data.finalPrice} تومان
            </Text>
          </View>
          <View style={fullStyles.specialOffer}>
            <Text style={fullStyles.txtSpecialOffer}>پیشنهاد ویژه</Text>
          </View>
        </View>
      </Ripple>
    );
  };

  const Half = (props) => {
    return (
      <Ripple
        style={halfStyles.boxHalf}
        onPress={() => navigation.navigate('KalaScreen')}>
        <View style={halfStyles.boxLeft}>
          <View style={halfStyles.productName}>
            <Text style={fullStyles.txtEname}>{props.data.e_name}</Text>
            <Text style={fullStyles.txtPname}>{props.data.p_name} </Text>
          </View>
          <View style={halfStyles.productPrice}>
            <View>
              <Text style={halfStyles.fristPrice}>
                {props.data.fristPrice}تومان
              </Text>
              <Text style={halfStyles.fainalPrice}>
                {props.data.finalPrice}تومان
              </Text>
            </View>
            <View>
              <Text style={halfStyles.txtSpecialOffer}>پیشنهاد ویژه</Text>
            </View>
          </View>
        </View>
        <View style={halfStyles.boxRight}>
          <Image source={props.data.img} style={halfStyles.img} />
        </View>
      </Ripple>
    );
  };

  const Tow = (props) => {
    return (
      <Ripple
        style={towStyles.main}
        onPress={() => navigation.navigate('KalaScreen')}>
        <View style={towStyles.sec1}>
          <View style={towStyles.imgBox}>
            <Image source={props.data.img} style={towStyles.img} />
          </View>
          <View style={towStyles.txtImgBox}>
            <Text style={towStyles.txtPname}>{props.data.p_name} </Text>
            <Text style={towStyles.txtEname}>{props.data.e_name}</Text>
          </View>
        </View>
        <View style={towStyles.sec2}>
          <View style={towStyles.priceBox}>
            <Text style={towStyles.fristPrice}>
              {props.data.fristPrice}تومان
            </Text>
            <Text style={towStyles.fainalPrice}>
              {props.data.finalPrice} تومان
            </Text>
          </View>
          <View style={towStyles.specialOffer}>
            <Text style={towStyles.txtSpecialOffer}>پیشنهاد ویژه</Text>
          </View>
        </View>
      </Ripple>
    );
  };

  return (
    <View>
      <Header />
      <ModdalView />
      <View
        style={{
          marginHorizontal: 8,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {Products.map((item, key) =>
          changeBoxState === 1 ? (
            <Full data={item} />
          ) : changeBoxState === 2 ? (
            <Half data={item} />
          ) : (
            <Tow data={item} />
          ),
        )}
      </View>
    </View>
  );
};

const modalStyle = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  rippleA: {
    height: '34%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  modalmain: {
    width: w / 1.2,
    height: '100%',
    backgroundColor: '#fff',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 13,
    alignItems: 'center',
  },
  modalIcon: {
    marginHorizontal: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader: {
    flexDirection: 'row',
    width: '100%',
    height: w / 8,
    backgroundColor: '#fff',
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#9a9a9a',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTopLeft: {
    width: w / 10,
    height: '100%',
  },
  headerTopRight: {
    width: '45%',
    height: '100%',
    borderLeftWidth: 0.5,
    borderColor: '#dfe6e9',
    flexDirection: 'row',
  },
  iconHeader: {
    color: '#2d3436',
  },
  txtBox: {marginRight: 5, justifyContent: 'center', alignItems: 'center'},
  txt1: {fontSize: 14, color: '#2d3436', fontFamily: 'IRANSansFaNum'},
  txt2: {fontSize: 12, color: '#9a9a9a', fontFamily: 'IRANSansFaNum'},
});
const fullStyles = StyleSheet.create({
  main: {
    width: '100%',
    height: w / 1.2,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 4,
    marginVertical: 5,
  },
  sec1: {width: '100%', height: '80%', padding: 5},
  imgBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    height: '70%',
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  txtImgBox: {
    padding: 5,
    height: '30%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontFamily: 'IRANSansFaNum',
  },
  sec2: {
    height: '20%',
    borderTopWidth: 0.5,
    borderTopColor: '#b2bec3',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtPname: {
    fontSize: 16,
    color: '#2d3436',
    fontFamily: 'IRANSansFaNum',
  },
  txtEname: {
    fontSize: 14,
    color: '#636e72',
    fontFamily: 'IRANSansFaNum',
  },
  priceBox: {
    padding: 10,
  },
  fristPrice: {
    color: '#c0392b',
    textDecorationLine: 'line-through',
    fontSize: 12,
    fontFamily: 'IRANSansFaNum',
  },
  fainalPrice: {
    color: '#2c3e50',
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'IRANSansFaNum',
  },
  specialOffer: {
    padding: 8,
  },
  txtSpecialOffer: {
    backgroundColor: '#EF394E',
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    fontFamily: 'IRANSansFaNum',
  },
});
const halfStyles = StyleSheet.create({
  boxHalf: {
    flexDirection: 'row',
    width: null,
    height: w / 2.2,
    elevation: 3,
    borderRadius: 3,
    marginVertical: 3,
    backgroundColor: '#fff',
  },
  boxRight: {
    width: '30%',
    height: '100%',
  },
  boxLeft: {
    width: '70%',
    height: '100%',
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  productName: {
    flexDirection: 'row',
    height: '75%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  productPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#9a9a9a',
    borderTopWidth: 0.5,
    padding: 6,
    fontFamily: 'IRANSansFaNum',
  },
  fristPrice: {
    color: '#c0392b',
    textDecorationLine: 'line-through',
    fontSize: 10,
    fontFamily: 'IRANSansFaNum',
  },
  fainalPrice: {
    color: '#2c3e50',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'IRANSansFaNum',
  },
  txtSpecialOffer: {
    fontSize: 10,
    backgroundColor: '#EF394E',
    color: '#fff',
    textAlign: 'center',
    padding: 3,
    borderRadius: 3,
    fontFamily: 'IRANSansFaNum',
  },
});
const towStyles = StyleSheet.create({
  main: {
    width: '49%',
    height: w / 2,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 4,
    marginVertical: 5,
  },
  sec1: {width: '100%', height: '80%', padding: 5},
  imgBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    height: '70%',
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  txtImgBox: {
    padding: 5,
    height: '30%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontFamily: 'IRANSansFaNum',
  },
  sec2: {
    height: '20%',
    borderTopWidth: 0.5,
    borderTopColor: '#b2bec3',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtPname: {
    fontSize: 14,
    color: '#2d3436',
    fontFamily: 'IRANSansFaNum',
  },
  txtEname: {
    fontSize: 12,
    color: '#636e72',
    fontFamily: 'IRANSansFaNum',
  },
  priceBox: {
    padding: 3,
  },
  fristPrice: {
    color: '#c0392b',
    textDecorationLine: 'line-through',
    fontSize: 8,
    fontFamily: 'IRANSansFaNum',
  },
  fainalPrice: {
    color: '#2c3e50',
    fontSize: 10,
    marginTop: 5,
    fontFamily: 'IRANSansFaNum',
  },
  specialOffer: {
    padding: 4,
  },
  txtSpecialOffer: {
    backgroundColor: '#EF394E',
    color: '#fff',
    textAlign: 'center',
    padding: 2,
    borderRadius: 2,
    fontSize: 10,
    fontFamily: 'IRANSansFaNum',
  },
});

export default React.memo(Offers);
