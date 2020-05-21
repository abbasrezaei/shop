import React from 'react';
import {ScrollView} from 'react-native';
import Cart from '../Components/CartPage/Cart';
import CartHeader from '../Components/Header/DigiHeader';
const CartScreen = () => {
  return (
    <ScrollView>
      <CartHeader header_name={'cart'} />
      <Cart />
    </ScrollView>
  );
};

export default React.memo(CartScreen);
