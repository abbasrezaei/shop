import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Stars from 'react-native-stars';
const Ratting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sec1}>
        <Stars
          half={true}
          default={2.5}
          //   update={val => {
          //     this.setState({stars: val});
          //   }}
          spacing={4}
          starSizeW={20}
          starSizeH={20}
          count={5}
          fullStar={require('../../assets/img/Ratting/fll.png')}
          emptyStar={require('../../assets/img/Ratting/empty.png')}
          halfStar={require('../../assets/img/Ratting/half.png')}
        />
        <Text style={styles.sec1_txt1}>امتیاز2.5 از 5</Text>
        <Text style={styles.sec1_txt2}> ازمجموع 1896رای</Text>
      </View>
      <View style={styles.sec2}>
        <View style={styles.sec2_part}>
          <Stars
            half={true}
            default={4.5}
            //   update={val => {
            //     this.setState({stars: val});
            //   }}
            spacing={3}
            starSizeW={35}
            starSizeH={6}
            count={5}
            fullStar={require('../../assets/img/Ratting/fm.png')}
            emptyStar={require('../../assets/img/Ratting/em.png')}
            halfStar={require('../../assets/img/Ratting/hm2.png')}
          />
          <Text style={styles.sec1_txt2}>ارزش خرید به نسبت قیمت:</Text>
        </View>
        <View style={styles.sec2_part}>
          <Stars
            half={true}
            default={4.5}
            //   update={val => {
            //     this.setState({stars: val});
            //   }}
            spacing={3}
            starSizeW={35}
            starSizeH={6}
            count={5}
            fullStar={require('../../assets/img/Ratting/fm.png')}
            emptyStar={require('../../assets/img/Ratting/em.png')}
            halfStar={require('../../assets/img/Ratting/hm2.png')}
          />
          <Text style={styles.sec1_txt2}>نوآوری:</Text>
        </View>

        <View style={styles.sec2_part}>
          <Stars
            half={true}
            default={4.5}
            //   update={val => {
            //     this.setState({stars: val});
            //   }}
            spacing={3}
            starSizeW={35}
            starSizeH={6}
            count={5}
            fullStar={require('../../assets/img/Ratting/fm.png')}
            emptyStar={require('../../assets/img/Ratting/em.png')}
            halfStar={require('../../assets/img/Ratting/hm2.png')}
          />
          <Text style={styles.sec1_txt2}>امکانات و قابلیت ها:</Text>
        </View>

        <View style={styles.sec2_part}>
          <Stars
            half={true}
            default={4.5}
            //   update={val => {
            //     this.setState({stars: val});
            //   }}
            spacing={3}
            starSizeW={35}
            starSizeH={6}
            count={5}
            fullStar={require('../../assets/img/Ratting/fm.png')}
            emptyStar={require('../../assets/img/Ratting/em.png')}
            halfStar={require('../../assets/img/Ratting/hm2.png')}
          />
          <Text style={styles.sec1_txt2}>سهولت استفاده:</Text>
        </View>

        <View style={styles.sec2_part}>
          <Stars
            half={true}
            default={4.5}
            //   update={val => {
            //     this.setState({stars: val});
            //   }}
            spacing={3}
            starSizeW={35}
            starSizeH={6}
            count={5}
            fullStar={require('../../assets/img/Ratting/fm.png')}
            emptyStar={require('../../assets/img/Ratting/em.png')}
            halfStar={require('../../assets/img/Ratting/hm2.png')}
          />
          <Text style={styles.sec1_txt2}>طراحی و ظاهر:</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    padding: 5,
    elevation: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  sec1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  sec1_txt1: {
    marginLeft: 5,
    fontSize: 14,
    color: '#00BFD7',
    fontFamily: 'IRANSansFaNum',
  },
  sec1_txt2: {color: '#9a9a9a', marginLeft: 5},
  sec2: {
    padding: 10,
    fontFamily: 'IRANSansFaNum',
  },
  sec2_part: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default React.memo(Ratting);
