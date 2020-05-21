import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SingUp = () => {
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
  return (
    <View style={styles.container}>
      <View style={styles.loginInfo}>
        <TouchableOpacity
          style={[styles.txtInput, user ? {borderColor: 'green'} : {}]}
          activeOpacity={1}
          onPress={() => changeStateUser()}>
          {user ? <Text style={styles.txtFocus}>شماره موبایل</Text> : null}
          <TextInput
            style={styles.userInput}
            placeholder="شماره موبایل یا ایمیل"
            onFocus={() => changeStateUser()}
            placeholderTextColor="#9a9a9a"
          />
          <Icon name="email" size={20} style={styles.userIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.txtInput, pass ? {borderColor: 'green'} : {}]}
          onPress={() => changeStatePass()}>
          {pass ? <Text style={styles.txtFocus}>کلمه عبور </Text> : null}
          <TextInput
            style={styles.userInput}
            placeholder="رمز عبور"
            onFocus={() => changeStatePass()}
            placeholderTextColor="#9a9a9a"
            secureTextEntry={true}
          />
          <Icon name="lock" size={20} style={styles.passIcon} />
        </TouchableOpacity>
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
  userIcon: {
    color: '#9a9a9a',
    position: 'relative',
  },
  passIcon: {
    color: '#9a9a9a',
    position: 'relative',
  },
  txtFocus: {
    color: '#00FBD6',
    position: 'absolute',
    paddingBottom: 40,
    paddingRight: 40,
    fontFamily: 'IRANSansFaNum',
  },
});

export default React.memo(SingUp);
