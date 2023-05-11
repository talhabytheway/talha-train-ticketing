import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import fonts from '../constants/fonts';
import ratios from '../constants/ratios';
import colors from '../constants/colors';

import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import orangeBtnBlur from '../assets/images/Blurs/filterButtonBlur.png';
import btnBG from '../assets/images/btnBg.png';

import bg from '../assets/images/backgrounds/ChairSelection.png';
import Hero from '../components/chairSelection/Hero';
import GerbongCabin from '../components/chairSelection/GerbongCabin';
import GerbongSeat from '../components/chairSelection/GerbongSeat';
import GerbongTitle from '../components/chairSelection/GerbongTitle';

const ChairSelection = ({navigation}) => {
  return (
    <ImageBackground style={styles.bg} source={bg} resizeMode="stretch">
      <View style={styles.parent}>
        <View style={styles.heroPar}>
          <Hero />
        </View>
        <View style={styles.gerbongPar}>
          <GerbongTitle />
          <View style={styles.scrollPar}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <GerbongCabin />
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <GerbongSeat />
            </ScrollView>
          </View>
        </View>
        <BlurView
          overlayColor="transparent"
          style={styles.btnBG}
          blurType="light"
          blurAmount={16}
          reducedTransparencyFallbackColor="white">
          <TouchableOpacity
            style={styles.opacityCont}
            onPress={() => navigation.popToTop()}>
            <ImageBackground
              resizeMode="contain"
              source={btnBG}
              style={styles.filBtn}>
              <Text style={styles.styleBtn}>PILIH TEMPAT DUDUK</Text>
            </ImageBackground>
            <Image
              source={orangeBtnBlur}
              tintColor="#50B1E9"
              style={styles.orangeBtnBlur}
            />
          </TouchableOpacity>
        </BlurView>
      </View>
    </ImageBackground>
  );
};

export default ChairSelection;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  parent: {
    flex: 1,
  },
  heroPar: {
    paddingTop: StatusBar.currentHeight,
  },
  gerbongPar: {
    borderRadius: ratios.widthPixel(16),
    borderColor: 'white',
    borderWidth: ratios.widthPixel(1),
    flexGrow: 1,
  },
  scrollPar: {
    flexDirection: 'row',
    marginRight: ratios.widthPixel(20),
    height: ratios.widthPixel(470),
  },
  btnBG: {
    width: '100%',
    height: ratios.widthPixel(96),
    bottom: 0,
    position: 'absolute',
  },
  filBtn: {
    width: ratios.widthPixel(310),
    height: ratios.widthPixel(45),
    borderRadius: ratios.widthPixel(8),
    marginTop: ratios.widthPixel(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacityCont: {
    width: '100%',
    alignItems: 'center',
  },
  styleBtn: {
    fontFamily: fonts.JakBol,
    // fontWeight: 'bold',
    fontSize: ratios.fontPixel(13),
    marginBottom: ratios.widthPixel(2),
    letterSpacing: ratios.widthPixel(3),
    color: 'white',
  },
  orangeBtnBlur: {
    width: ratios.widthPixel(350),
    height: ratios.widthPixel(90),
    top: ratios.widthPixel(-42),
    zIndex: -10,
  },
});
