import React from 'react';
import {View} from 'react-native';
import LoginContent from '../Components/LoginPage/LginContent';
import DigiHeader from '../Components/Header/DigiHeader';
import DigiFooter from '../Components/Footer/DigiFooter';
import {Content, Container} from 'native-base';
const Hprops = {
  header_name: 'Login',
  header_page_name: 'ورود',
};
const LoginScreen = () => {
  return (
    <Container>
      <DigiHeader {...Hprops} />
      <Content>
        <LoginContent />
      </Content>
      <DigiFooter />
    </Container>
  );
};

export default React.memo(LoginScreen);
