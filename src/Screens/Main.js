import React from 'react';
import {ScrollView} from 'react-native';
import Slider from '../Components/MainPage/Slider';
import Cat from '../Components/MainPage/Cat';
import Offer from '../Components/MainPage/Offer';
import Off from '../Components/MainPage/Off';
import KalaOne from '../Components/MainPage/KalaOne';
import KalaTow from '../Components/MainPage/KalaTow';
import AmazingSuggestion from '../Components/MainPage/AmazingSuggestion';
import DigiHeader from '../Components/Header/DigiHeader';
const Main = () => {
  return (
    <ScrollView>
      <DigiHeader header_name={'main'} />
      <Slider />
      <Cat />
      <AmazingSuggestion />
      <Offer />
      <Off />
      <KalaOne />
      <KalaTow />
    </ScrollView>
  );
};

export default React.memo(Main);
