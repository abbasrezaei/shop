import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
const DigiFooter = props => {
  return (
    <Footer>
      <FooterTab
        style={
          props.footerColor === '#2ecc71'
            ? {backgroundColor: '#2ecc71'}
            : {backgroundColor: '#3498db'}
        }>
        <Button full style={styles.btn}>
          <Icon name="ios-arrow-back" color="#fff" size={18} />
          {props.footerTxt === 'SingUp' ? (
            <Text style={styles.txtFooter}>ثبت نام</Text>
          ) : (
            <Text style={styles.txtFooter}>ورود به دیجی کالا</Text>
          )}
        </Button>
      </FooterTab>
    </Footer>
  );
};
const styles = StyleSheet.create({
  txtFooter: {
    color: '#fff',
    marginLeft: 15,
    fontFamily: 'IRANSansFaNum',
  },
  btn: {
    flexDirection: 'row',
  },
});

export default React.memo(DigiFooter);
