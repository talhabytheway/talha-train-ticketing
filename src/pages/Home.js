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
import Berita from '../components/home/Berita';

const Home = prop => {
  let ticketSeya = [
    {time: 'Besok', location: 'Bengawan', route: 'PWT - LPY'},
    {time: '7 hari', location: 'Bims', route: 'YK - PWT'},
    {time: 'Besok', location: 'Bengawan', route: 'PWT - LPY'},
  ];

  let berita = [
    ['Tips', 'Tetap jaga komunikasi selama di kereta'],
    ['Update', 'Protokol kesehatan di kereta'],
    ['Tips', 'Tetap jaga komunikasi selama di kereta'],
    ['Update', 'Protokol kesehatan di kereta'],
  ];
  return (
    <ImageBackground style={styles.bg} source={bg} resizeMode="stretch">
      <View style={styles.parent}>
        <View style={styles.ham}>
          <Hamburger />
        </View>
        <ScrollView>
          <View style={styles.mainPar}>
            <Text style={styles.mainHead}>Mau pergi ke mana kali ini?</Text>
            <Image source={hand} style={styles.hand} />
          </View>
          <MainCard {...prop} />
          <View style={styles.tickSeyPar}>
            <Text style={styles.tickSey}>Tiket saya</Text>
            <ScrollView
              contentContainerStyle={{paddingLeft: 8}}
              contentInset={{left: -8}}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {ticketSeya.map((e, index) => (
                <TicketSeya key={index} {...e} index={index} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.beritaPar}>
            <Text style={styles.tickSey}>Berita</Text>
            <ScrollView
              contentContainerStyle={{paddingLeft: 8}}
              contentInset={{left: -8}}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {berita.map((e, index) => (
                <Berita key={index} props={e} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
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
    height: ratios.heightPixel(134),
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
  },
  beritaPar: {
    marginTop: ratios.widthPixel(-16),
  },
  tickSey: {
    marginLeft: ratios.widthPixel(20),
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    color: colors.darkGray,
    padding: ratios.widthPixel(12),
    paddingTop: 0,
  },
});
