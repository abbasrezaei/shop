import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {Header, Left, Right, View} from 'native-base';
import Ripple from 'react-native-material-ripple';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, DrawerActions} from '@react-navigation/native';
const DigiHeader = (props) => {
  const navigation = useNavigation();
  const MainHander = () => {
    return (
      <Header style={styles.bgHeader} androidStatusBarColor="#EF394E">
        <Left style={styles.boxIcon}>
          <Ripple
            style={styles.iconStyles}
            onPress={() => navigation.navigate('CartScreen')}>
            <MIcon name="cart" color="#fff" size={20} />
          </Ripple>
          <Ripple
            style={styles.iconStyles}
            onPress={() => navigation.navigate('Search')}>
            <Ionicons name="md-search" color="#FFF" size={20} />
          </Ripple>
        </Left>

        <Right style={styles.boxIcon}>
          {props.header_page_name ? (
            <View style={styles.txtLogo}>
              <Text style={{color: '#fff', fontSize: 18}}>
                {props.header_page_name}
              </Text>
            </View>
          ) : (
            <View style={styles.txtLogo}>
              <Text style={{color: '#76787A', fontSize: 20}}>Digi</Text>
              <Text style={{color: '#fff', fontSize: 20}}>kala</Text>
            </View>
          )}

          {props.right_btn === 'back' ? (
            <Ripple
              style={styles.iconStyles}
              onPress={() => navigation.goBack()}>
              <Ionicons name="md-arrow-forward" color="#fff" size={20} />
            </Ripple>
          ) : (
            <Ripple
              style={styles.iconStyles}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <MIcon name="menu" color="#fff" size={20} />
            </Ripple>
          )}
        </Right>
      </Header>
    );
  };

  const SearchHander = () => {
    return (
      <Header style={styles.bgSearchHeader} androidStatusBarColor="#EF394E">
        <Left style={styles.boxIcon}>
          <Ripple style={styles.iconStyles}>
            <MIcon name="qrcode-scan" color="#76787A" size={20} />
          </Ripple>
          <Ripple style={styles.iconStyles}>
            <MIcon name="microphone" color="#76787A" size={20} />
          </Ripple>
        </Left>

        <Right style={styles.boxIcon}>
          <TextInput
            placeholder="جستجودر دیجی کالا..."
            placeholderTextColor="#9a9a9a"
            style={styles.txtSearch}
          />
          <Ripple
            style={styles.iconStyles}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="md-arrow-forward" color="#76787A" size={22} />
          </Ripple>
        </Right>
      </Header>
    );
  };

  const CartHander = () => {
    return (
      <Header style={styles.bgHeader} androidStatusBarColor="#EF394E">
        <Left style={styles.boxIcon}>
          <Ripple style={styles.iconStyles}>
            <MIcon name="cart" color="#fff" size={20} />
          </Ripple>
        </Left>

        <Right style={styles.boxIcon}>
          <View style={styles.txtLogo}>
            <Text style={{color: '#fff', fontSize: 18}}>سبد خرید شما</Text>
          </View>

          <Ripple
            style={styles.iconStyles}
            onPress={() => {
              navigation.goBack();
            }}>
            <MIcon name="close" size={20} color="#76787A" />
          </Ripple>
        </Right>
      </Header>
    );
  };

  const LoginHander = () => {
    return (
      <Header style={styles.bgHeader} androidStatusBarColor="#EF394E">
        <Left style={styles.boxIcon}>
          <Ripple
            style={styles.iconStyles}
            onPress={() => navigation.navigate('CartScreen')}>
            <MIcon name="cart" color="#fff" size={20} />
          </Ripple>
          <Ripple
            style={styles.iconStyles}
            onPress={() => navigation.navigate('Search')}>
            <Ionicons name="md-search" color="#FFF" size={20} />
          </Ripple>
        </Left>

        <Right style={styles.boxIcon}>
          <View style={styles.txtLogo}>
            <Text style={{color: '#fff', fontSize: 16}}>
              {props.header_page_name}
            </Text>
          </View>

          <Ripple style={styles.iconStyles} onPress={() => navigation.goBack()}>
            <MIcon name="close" color="#76787A" size={20} />
          </Ripple>
        </Right>
      </Header>
    );
  };

  const ForgetHander = () => {
    return (
      <Header style={styles.bgHeader} androidStatusBarColor="#EF394E">
        <Right style={styles.boxIcon}>
          <View style={styles.txtLogo}>
            <Text style={{color: '#fff', fontSize: 17}}>
              تایید شماره تلفن شما
            </Text>
          </View>

          <Ripple style={styles.iconStyles} onPress={() => navigation.goBack()}>
            <MIcon name="close" color="#fff" size={20} />
          </Ripple>
        </Right>
      </Header>
    );
  };

  const CatHander = () => {
    return (
      <Header hasTabs style={styles.bgHeader} androidStatusBarColor="#EF394E">
        <Right style={styles.boxIcon}>
          <View style={styles.txtLogo}>
            <Text style={{color: '#fff', fontSize: 18}}>دسته بند محصولات</Text>
          </View>
          <Ripple style={styles.iconStyles} onPress={() => navigation.goBack()}>
            <Ionicons name="md-arrow-forward" color="#fff" size={20} />
          </Ripple>
        </Right>
      </Header>
    );
  };

  const CommentHander = () => {
    return (
      <Header hasTabs style={styles.bgHeader} androidStatusBarColor="#EF394E">
        <Right style={styles.boxIcon}>
          <View style={styles.txtLogo}>
            <Text style={{color: '#fff', fontSize: 18}}> نظرات کاربران</Text>
          </View>
          <Ripple style={styles.iconStyles} onPress={() => navigation.goBack()}>
            <Ionicons name="md-arrow-forward" color="#fff" size={20} />
          </Ripple>
        </Right>
      </Header>
    );
  };
  switch (props.header_name) {
    case 'main':
      return MainHander();
      break;
    case 'cart':
      return CartHander();
      break;
    case 'Login':
      return LoginHander();
    case 'forget':
      return ForgetHander();
      break;
    case 'search':
      return SearchHander();
      break;
    case 'cat':
      return CatHander();
      break;

    case 'commet':
      return CommentHander();
      break;
  }
};

const styles = StyleSheet.create({
  bgHeader: {
    backgroundColor: '#EF394E',
  },
  boxIcon: {
    flexDirection: 'row',
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 10,
  },
  iconStyles: {
    padding: 14,
  },
  txtLogo: {
    flexDirection: 'row',
    fontFamily: 'IRANSansFaNum',
  },
  txtSearch: {
    fontSize: 17,
    textAlign: 'right',
    fontFamily: 'IRANSansFaNum',
  },
  bgSearchHeader: {
    backgroundColor: '#fff',
  },
});

export default React.memo(DigiHeader);
