import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  UIManager,
  Platform,
  LayoutAnimation,
} from 'react-native';

const w = Dimensions.get('window').width;

let animate = {
  duration: 1000,
  create: {type: 'linear', property: 'opacity'},
  update: {type: 'spring', springDamping: 10},
  delete: {type: 'linear', property: 'opacity'},
};
const Disc = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const [changeHeight, setChangeHeight] = useState(false);
  const [changeText, setChangeText] = useState('ادامه مطلب');
  const changeHeightSize = () => {
    LayoutAnimation.configureNext(animate);
    setChangeHeight(!changeHeight);
    changeHeight ? setChangeText('ادامه مطلب') : setChangeText('بستن');
  };
  return (
    <View style={styles.container}>
      <View
        style={[styles.sec1, changeHeight ? {height: null} : {height: 200}]}>
        <Text style={{lineHeight: 20,fontFamily: 'IRANSansFaNum'}}>
          گوشی موبایل «Galaxy A10s» از سری تولیدات مقرون‌به‌صرفه‌ سامسونگ است که
          شباهت زیادی به گوشی Galaxy A10 دارد اما با ویژگی‌هایی مانند باتری
          قدرتمندتر، حسگر اثرانگشت و 2 دوربین اصلی به‌روزتر شده است. تفاوت اصلی
          این گوشی با بیشتر اعضای خانواده A در استفاده از پنل IPS برای
          صفحه‌نمایش این محصول است. گوشی موبایل Galaxy A10s با صفحه‌نمایش IPS و
          پنل LCD به بازار عرضه شده است تا با قیمت تمام شده کم‌تری به دست
          طرفداران گوشی‌های سامسونگ برسد. البته سامسونگ همچنان تلاش کرده است
          حاشیه را در این تولید جدید خود تا حد امکان کم کند. این گوشی قاب پشتی
          از جنس پلاستیک دارد و قاب جلویی آن را شیشه پوشانده که البته جلوه‌ی
          زیبایی به گوشی داده است. این محصول سامسونگ با جدیدترین نسخه از
          سیستم‌عامل اندروید (Pie) روانه بازار شده است تا محصولی به‌روز و مدرن
          به حساب بیاید. صفحه‌نمایش استفاده‌شده در این گوشی 6.2 اینچ با رزولوشن
          HD+ است که با استفاده از 16 میلیون رنگ را به نمایش می‌گذارد. این
          صفحه‌نمایش در هر اینچ 271 پیکسل را نشان می‌دهد و نسبت تصویر در آن
          19:9است. تراشه‌ی این محصول، Helio P22 مدیاتک است که به همراه 2
          گیگابایت رم عرضه می‌شود. این تراشه برای بازکردن چندین برنامه به صورت
          هم‌زمان و تماشای ویدئو مناسب است و نمی‌توان از آن انتظار اجرای
          بازی‌های سنگین را داشت. تراشه‌ی گرافیکی PowerVR GE8320 هم برای این
          محصول درنظر گرفته شده است. این گوشی با ظرفیت 32 گیگابایتی عرضه شده
          است. دوربین اصلی A10s سنسور 13مگاپیکسلی دارد و فلش LED برخوردار است.
          این حسگر از نوع عریض (Wide) است و قابلیت عکاسی HDR را هم دارد. در کنار
          این حسگر یک سنسور عمق 2 مگاپیکسلی قرار گرفته است. دوربین سلفی
          8مگاپیکسلی هم در قاب جلویی این گوشی به کار گرفته شده است. باتری 4000
          میلی‌آمپرساعتی، پشتیبانی از نسخه پنجم از فناوری بلوتوث، درگاه ارتباطی
          microUSB و جک 3.5 میلی‌متری صدا هم از دیگر مشخصات این تازه‌وارد است که
          نشان از محصولی اقتصادی و مقرون‌به‌ضرفه دارند. خرید این گوشی به آن دسته
          از کاربران توصیه می‌شود که می‌خواهند گوشی ارزان اما مدرن برای انجام
          کارهای روزمره داشته باشند. گفتنی است سامسونگ برای این مدل از محصولات
          خود، حسگر اثرانگشت را هم در قاب پشتی به‌کار گرفته است.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.btnContinue}
        onPress={() => changeHeightSize()}>
        <Text style={{color: '#9a9a9a'}}>{changeText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: null,
    fontSize: 16,
    height: null,
    elevation: 2,
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 0,
  },
  sec1: {
    height: 200,
    overflow: 'hidden',
  },
  btnContinue: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.7,
    borderColor: '#bbb',
    backgroundColor: '#fff',
    margin: 0,
  },
});

export default React.memo(Disc);
