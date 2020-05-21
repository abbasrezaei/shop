import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CodeInput from 'react-native-confirmation-code-input';
const w = Dimensions.get('window').width;
const ForgetContent = () => {
  const navigation = useNavigation();
  const [txtError, setTxtError] = useState(false);

  const _onFulfill = (code) => {
    if (code === 11111) {
      alert('کد وارد شده درست است');
      setTxtError(false);
    } else {
      setTxtError(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.txtInfo}>
          کد تایید برای شماره 09129635787ارسال گردید
        </Text>
        <Text
          style={styles.txtEditNumber}
          onPress={() => navigation.navigate('LoginScreen')}>
          ویرایش شماره تماس
        </Text>
      </View>
      <View style={styles.conformationCode}>
        <Text style={styles.conformationText}>کد تایید را وارد نمایید</Text>

        <CodeInput
          secureTextEntry
          className={'border-b'}
          activeColor="#9433C0"
          inactiveColor="rgba(49, 180, 4, 1.3)"
          space={5}
          size={40}
          inputPosition="left"
          onFulfill={_onFulfill}
        />

        {txtError ? (
          <Text style={styles.txtVerifictionError}>کد وارد شده اشتباه است</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  infoBox: {
    width: '90%',
    height: w / 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    elevation: 2,
    borderColor: '#9a9a9a',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    borderColor: 'green',
  },
  txtEditNumber: {
    paddingTop: 15,
    color: '#00BFD6',
    fontSize: 16,
    fontFamily: 'IRANSansFaNum',
  },
  txtInfo: {
    fontSize: 14,
    color: '#656565',
    fontFamily: 'IRANSansFaNum',
  },
  conformationCode: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    height: w / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conformationText: {
    color: '#656565',
    fontSize: 16,
    fontFamily: 'IRANSansFaNum',
  },
  txtVerifictionError: {color: 'red', marginTop: 10},
});

export default React.memo(ForgetContent);
