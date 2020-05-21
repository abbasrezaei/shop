import React from 'react';
import {View, Text} from 'react-native';
import DigiHeader from '../Components/Header/DigiHeader';
const Search = () => {
  return (
    <View>
      <DigiHeader header_name={'search'} />
    </View>
  );
};

export default React.memo(Search);
