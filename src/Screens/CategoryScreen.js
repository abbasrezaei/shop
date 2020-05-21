import React from 'react';
import {ScrollView, View} from 'react-native';
import {Container, Header, Tab, Tabs, ScrollableTab} from 'native-base';
import ContentCategory from '../Components/CategoryPage/ContentCategory';
import {CatList} from '../Data/DataArray';
import DigiHeader from '../Components/Header/DigiHeader';
const CategoryScreen = () => {
  return (
    <Container>
      <DigiHeader header_name={'cat'} />
      <Tabs renderTabBar={() => <ScrollableTab />}>
        {CatList.map((item, key) => (
          <Tab
            heading={item.name}
            tabStyle={{backgroundColor: '#EF394E'}}
            activeTabStyle={{backgroundColor: '#F15062'}}
            textStyle={{color: '#EFF2F7'}}
            activeTextStyle={{color: '#fff'}}>
            <ContentCategory />
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default React.memo(CategoryScreen);
