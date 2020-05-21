import React from 'react';
import {View} from 'react-native';
import SingUp from '../Components/SingUpPage/SingUp';
import DigiHeader from '../Components/Header/DigiHeader';
import DigiFooter from '../Components/Footer/DigiFooter';
import {Container, Content} from 'native-base';
const Hprops = {
  header_name: 'Login',
  header_page_name: 'ثبت نام',
};

const SingUpScreen = () => {
  return (
    <Container>
      <DigiHeader {...Hprops} />
      <Content>
        <SingUp />
      </Content>
      <DigiFooter footerColor="#2ecc71" footerTxt="SingUp" />
    </Container>
  );
};

export default React.memo(SingUpScreen);
