import React from 'react';
import {View} from 'react-native';
import ForgetContent from '../Components/ForgetPage/ForgetContent';
import DigiHeader from '../Components/Header/DigiHeader';
const ForgetScreen = () => {
  return (
    <View>
      <DigiHeader header_name={'forget'} />
      <ForgetContent />
    </View>
  );
};

export default React.memo(ForgetScreen);
