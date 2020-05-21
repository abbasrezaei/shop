import React from 'react';
import {View} from 'react-native';
import DigiHeader from '../Components/Header/DigiHeader';
import Comments from '../Components/Comments/Comments';
const CommentScreen = () => {
  return (
    <View>
      <DigiHeader header_name={'commet'} />
      <Comments />
    </View>
  );
};

export default React.memo(CommentScreen);
