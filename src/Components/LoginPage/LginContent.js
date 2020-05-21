import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
const LoginContent = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(false);
  const [pass, setPass] = useState(false);
  const changeStateUser = () => {
    setUser(true);
    setPass(false);
  };
  const changeStatePass = () => {
    setUser(false);
    setPass(true);
  };

  const [check, setCkeck] = useState(true);
  const changeCheckValue = () => {
    setCkeck(!check);
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginInfo}>
        <TouchableOpacity
          style={[styles.txtInput, user ? {borderColor: 'green'} : {}]}
          activeOpacity={1}
          onPress={() => changeStateUser()}>
          <TextInput
            style={styles.userInput}
            placeholder="شماره موبایل یا ایمیل"
            onFocus={() => changeStateUser()}
            placeholderTextColor="#9a9a9a"
          />
          <Icon name="email" size={20} style={{color: '#9a9a9a'}} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.txtInput, pass ? {borderColor: 'green'} : {}]}
          onPress={() => changeStatePass()}>
          <TextInput
            style={styles.userInput}
            placeholder="رمز عبور"
            onFocus={() => changeStatePass()}
            placeholderTextColor="#9a9a9a"
            secureTextEntry={check}
          />
          <Icon name="lock" size={20} style={{color: '#9a9a9a'}} />
        </TouchableOpacity>
      </View>
      <View style={styles.showPass}>
        <Text style={styles.txtCheck}>نمایش کلمه عبور</Text>
        <Ripple
          style={[
            styles.checkBox,
            check === false ? {borderColor: 'green'} : {},
          ]}
          onPress={() => changeCheckValue()}>
          {check === false ? (
            <Icon name="check" size={20} color="#fff" />
          ) : null}
        </Ripple>
      </View>
      <View style={styles.remmberBox}>
        <Text
          style={styles.txtRemmber}
          onPress={() => navigation.navigate('ForgetScreen')}>
          کلمه عبور خودرا فراموش کرده ام!
        </Text>
        <Text
          style={styles.txtSubmit}
          onPress={() => navigation.navigate('SingUpScreen')}>
          ثبت نام در دیجی کالا
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  loginInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
    marginHorizontal: 10,
    borderBottomWidth: 1.5,
    marginVertical: 10,
    borderColor: '#9a9a9a',
    fontFamily: 'IRANSansFaNum',
  },
  userInput: {
    width: '90%',
    marginRight: 5,
    textAlign: 'right',
    fontFamily: 'IRANSansFaNum',
  },
  showPass: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    marginVertical: 15,
    alignItems: 'center',
  },
  txtCheck: {
    marginRight: 5,
    fontSize: 14,
    color: '#515151',
    fontFamily: 'IRANSansFaNum',
  },
  checkBox: {
    width: 22,
    height: 22,
    borderWidth: 0.7,
    borderColor: 'transparent',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BFD6',
  },
  remmberBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  txtRemmber: {
    fontSize: 16,
    color: '#515151',
    padding: 20,
    fontFamily: 'IRANSansFaNum',
  },
  txtSubmit: {
    fontSize: 16,
    color: '#00bfd6',
    textDecorationLine: 'underline',
    padding: 20,
    fontFamily: 'IRANSansFaNum',
  },
});

export default React.memo(LoginContent);
