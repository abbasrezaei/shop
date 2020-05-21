import React from 'react';
import {ScrollView} from 'react-native';
import Offers from '../Components/OfferPage/Offers';
import DigiHeader from '../Components/Header/DigiHeader';
const hprops = {
  header_name: 'main',
  header_page_name: 'شارژر همراه',
  right_btn: 'back',
};
const OfferScreen = () => {
  return (
    <ScrollView>
      <DigiHeader {...hprops} />
      <Offers />
    </ScrollView>
  );
};

export default React.memo(OfferScreen);
