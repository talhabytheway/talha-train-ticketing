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

import bg from '../assets/images/backgrounds/TicketList.png';
import Navbar from '../components/ticketList/Navbar';
import Dates from '../components/ticketList/Dates';
import ratios from '../constants/ratios';
import Card from '../components/ticketList/Card';
import {BlurView} from '@react-native-community/blur';
import Filter from '../assets/svg/Filter';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../constants/fonts';
import orangeBtnBG from '../assets/images/Blurs/filterButtonBlur.png';
const TicketList = ({navigation}) => {
  const cardData = [
    {
      title: 'Joglosemarkerto',
      fare: 'Rp149.000',
      dep: 'PWT',
      arr: 'SLO',
      depTime: '14.00',
      arrTime: '18.35',
      ticketLeft: 'Sisa 2',
      trainClass: 'Ekonomi - A',
      totalTime: '6 jam 35 menit',
    },
    {
      title: 'Joglosemarkerto',
      fare: 'Rp74.000',
      dep: 'PWT',
      arr: 'SLO',
      depTime: '06.30',
      arrTime: '11.35',
      ticketLeft: 'Sisa 24',
      trainClass: 'Ekonomi - C',
      totalTime: '5 jam 5 menit',
    },
    {
      title: 'Bima',
      fare: 'Rp335.000',
      dep: 'PWT',
      arr: 'SLO',
      depTime: '03:00',
      arrTime: '06.30',
      ticketLeft: '',
      trainClass: 'Eksekutif - A',
      totalTime: '5 jam 35 menit',
    },
    {
      title: 'Bengawan',
      fare: 'Rp129.000',
      dep: 'PWT',
      arr: 'SLO',
      depTime: '14.00',
      arrTime: '18.35',
      ticketLeft: '',
      trainClass: 'Ekonomi - A',
      totalTime: '6 jam 35 menit',
    },
    {
      title: 'Joglosemarkerto',
      fare: 'Rp149.000',
      dep: 'PWT',
      arr: 'SLO',
      depTime: '14.00',
      arrTime: '18.35',
      ticketLeft: 'Sisa 2',
      trainClass: 'Ekonomi - A',
      totalTime: '6 jam 35 menit',
    },
  ];

  return (
    <ImageBackground style={styles.bg} source={bg} resizeMode="stretch">
      <View style={styles.parent}>
        <View style={styles.navbarPar}>
          <Navbar navigation={navigation} />
          <Dates />
        </View>
        <ScrollView
          style={styles.cardPar}
          contentContainerStyle={{paddingTop: 16}}
          contentInset={{top: -16}}
          showsVerticalScrollIndicator={false}>
          {cardData.map((e, i) => (
            <Card key={i} {...e} />
          ))}
        </ScrollView>
        <BlurView
          overlayColor="transparent"
          style={styles.btnBG}
          blurType="light"
          blurAmount={16}
          reducedTransparencyFallbackColor="white">
          <TouchableOpacity
            style={styles.opacityCont}
            onPress={() => navigation.navigate('Summary')}>
            <LinearGradient
              colors={['#FE9B4B', '#F47814']}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              style={styles.filBtn}>
              <Filter />
              <Text style={styles.styleBtn}>FILTER</Text>
            </LinearGradient>
            <Image source={orangeBtnBG} style={styles.orangeBtnBG} />
          </TouchableOpacity>
        </BlurView>
      </View>
    </ImageBackground>
  );
};

export default TicketList;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  parent: {
    flex: 1,
  },
  navbarPar: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: ratios.widthPixel(3),
    borderBottomWidth: ratios.widthPixel(2),
    borderTopWidth: ratios.widthPixel(0),
    borderBottomLeftRadius: ratios.widthPixel(12),
    borderBottomRightRadius: ratios.widthPixel(12),
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, .4)',
  },
  cardPar: {
    marginHorizontal: ratios.widthPixel(16),
  },
  btnBG: {
    width: '100%',
    height: ratios.widthPixel(96),
    bottom: 0,
    position: 'absolute',
  },
  filBtn: {
    width: ratios.widthPixel(169),
    height: ratios.widthPixel(45),
    borderRadius: ratios.widthPixel(25),
    marginTop: ratios.widthPixel(12),
    justifyContent: 'center',
    alignItems: 'center',
    gap: ratios.widthPixel(9),
    flexDirection: 'row',
  },
  opacityCont: {
    width: '100%',
    alignItems: 'center',
  },
  styleBtn: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(12),
    marginBottom: ratios.widthPixel(2),
    letterSpacing: ratios.widthPixel(2),
    color: 'white',
  },
  orangeBtnBG: {
    width: ratios.widthPixel(192),
    height: ratios.widthPixel(90),
    top: ratios.widthPixel(-42),
  },
});
