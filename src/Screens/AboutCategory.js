import React from 'react';
import {ScrollView} from 'react-native';
import KalaCatOne from '../Components/AboutCategoryPage/KalaCatOne';
import KalaCatTow from '../Components/AboutCategoryPage/KalaCatTow';
import KalaCatThree from '../Components/AboutCategoryPage/KalaCatThree';
import DigiHeader from '../Components/Header/DigiHeader';

const Hprops = {
  header_name: 'main',
  header_page_name: 'تبلت و موبایل',
};
const AboutCategory = () => {
  return (
    <ScrollView>
      <DigiHeader {...Hprops} />
      <KalaCatOne />
      <KalaCatTow />
      <KalaCatThree />
    </ScrollView>
  );
};

export default React.memo(AboutCategory);
