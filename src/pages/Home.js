import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';

import fonts from '../constants/fonts';
import ratios from '../constants/ratios';
import colors from '../constants/colors';

import bg from '../assets/images/backgrounds/Home.png';
import Hamburger from '../assets/svg/Hamburger';
import hand from '../assets/images/hand.png';
import MainCard from '../components/home/MainCard';
import TicketSeya from '../components/home/TicketSeya';

const Home = prop => {
  let ticketSeya = [
    {time: 'Besok', location: 'Bengawan', route: 'PWT - LPY'},
    {time: '7 hari', location: 'Bims', route: 'YK - PWT'},
  ];
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
        <MainCard />
        <View style={styles.tickSeyPar}>
          <Text style={styles.tickSey}>Tiket saya</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {ticketSeya.map((e, index) => (
              <TicketSeya {...e} index={index} />
            ))}
          </ScrollView>
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
  tickSeyPar: {
    marginVertical: ratios.widthPixel(16),
    marginLeft: ratios.widthPixel(20),
  },
  tickSey: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    color: colors.darkGray,
    padding: ratios.widthPixel(12),
    paddingTop: 0,
  },
  ticketCarPar: {},
});
