import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
} from 'react-native';

import fonts from '../constants/fonts';
import ratios from '../constants/ratios';
import colors from '../constants/colors';

import bg from '../assets/images/backgrounds/Home.png';
import Hamburger from '../assets/svg/Hamburger';
import hand from '../assets/images/hand.png';
import Swap from '../assets/svg/Swap';

const Home = prop => {
  return (
    <ImageBackground style={styles.bg} source={bg} resizeMode="stretch">
      <View style={styles.parent}>
        <View style={styles.ham}>
          <Hamburger />
        </View>
        <View style={styles.mainPar}>
          <Text style={styles.mainHead}>Mau pergi ke mana kali ini?</Text>
          <Image source={hand} style={styles.hand} />
        </View>
        <View style={styles.mainCardPar}>
          <View style={styles.locationPar}>
            <View style={styles.locChild}>
              <Text style={styles.jakB10}>Keberangkatan</Text>
              <Text style={styles.jakB14}>PWT</Text>
              <Text style={styles.jakR10}>Stasiun Purwokerto</Text>
            </View>
            <Swap />
            <View style={styles.locChild}>
              <Text style={[styles.jakB10, {textAlign: 'right'}]}>Tujuan</Text>
              <Text style={[styles.jakB14, {textAlign: 'right'}]}>SLO</Text>
              <Text style={[styles.jakR10, {textAlign: 'right'}]}>
                Stasiun Solo Balapan
              </Text>
            </View>
          </View>
          <View style={styles.bar}></View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

var styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  parent: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  ham: {
    marginHorizontal: ratios.widthPixel(32),
    marginVertical: ratios.widthPixel(8),
  },
  mainPar: {
    padding: ratios.widthPixel(32),
    height: ratios.heightPixel(127),
    width: '100%',
  },
  mainHead: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(25),
    color: colors.darkGray,
    width: ratios.widthPixel(154),
    lineHeight: ratios.widthPixel(32),
  },
  hand: {
    width: ratios.widthPixel(155),
    height: ratios.widthPixel(155),
    position: 'absolute',
    right: ratios.widthPixel(32),
    bottom: ratios.widthPixel(0),
  },
  mainCardPar: {
    width: ratios.widthPixel(343),
    margin: ratios.widthPixel(16),
    marginTop: 0,
    backgroundColor: '#FDFEFF',
    height: 200,
    padding: ratios.widthPixel(16),
    borderRadius: ratios.widthPixel(8),
  },
  locationPar: {
    marginHorizontal: ratios.widthPixel(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: ratios.heightPixel(8),
  },
  locChild: {
    width: ratios.widthPixel(110),
  },
  jakB10: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    color: colors.blue,
  },
  jakB14: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    color: colors.darkGray,
    marginVertical: ratios.widthPixel(4),
  },
  jakR10: {
    fontFamily: fonts.JakReg,
    fontSize: ratios.fontPixel(11),
    color: colors.lightGray,
  },
  bar: {
    width: '100%',
    marginVertical: ratios.heightPixel(8),
    height: ratios.heightPixel(2),
    backgroundColor: colors.whiter,
  },
});
