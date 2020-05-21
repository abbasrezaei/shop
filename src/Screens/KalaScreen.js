import React from 'react';
import {ScrollView, View} from 'react-native';
import KalaSlider from '../Components/KalaPage/KalaSlider';
import ShareKala from '../Components/KalaPage/ShareKala';
import Buttons from '../Components/KalaPage/Buttons';
import Warrenty from '../Components/KalaPage/Warrenty';
import Disc from '../Components/KalaPage/Disc';
import Ratting from '../Components/KalaPage/Ratting';
import Catkala from '../Components/KalaPage/Catkala';
import SimilarProducts from '../Components/KalaPage/SimilarProducts';
import ProductsOtherBuy from '../Components/KalaPage/ProductsOtherBuy';
import DigiHeader from '../Components/Header/DigiHeader';
const hprops = {
  header_name: 'main',
  header_page_name: 'شارژر همراه',
  right_btn: 'back',
};
const KalaScreen = () => {
  return (
    <ScrollView>
      <DigiHeader {...hprops} />
      <KalaSlider />
      <ShareKala />
      <View style={{marginHorizontal: 10, marginVertical: 5}}>
        <Buttons />
        <Warrenty />
        <Disc />
        <Ratting />
      </View>
      <Catkala />
      <SimilarProducts />
      <ProductsOtherBuy />
    </ScrollView>
  );
};

export default React.memo(KalaScreen);
