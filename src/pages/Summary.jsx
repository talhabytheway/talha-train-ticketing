import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

import bg from '../assets/images/backgrounds/Summary.png';
import Heart from '../assets/svg/Heart';
import Users from '../assets/svg/Users';
import EmojiHappy from '../assets/svg/EmojiHappy';
import blurArr from '../assets/images/Blurs/blueArrowBlur.png';

import fonts from '../constants/fonts';
import ratios from '../constants/ratios';
import colors from '../constants/colors';

import Navbar from '../components/summary/Navbar';
import Card from '../components/ticketList/Card';
import PassDetails from '../components/summary/PassDetails';
import ArrowUp from '../assets/svg/ArrowUp';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import orangeBtnBG from '../assets/images/Blurs/filterButtonBlur.png';

const Summary = ({navigation}) => {
  const [text1, onChangeText1] = React.useState('Paspor');
  const [text2, onChangeText2] = React.useState('A 38910381');
  const [text3, onChangeText3] = React.useState('Ibnu Batutah');
  const cardData = {
    title: 'Joglosemarkerto',
    fare: 'Rp149.000',
    dep: 'PWT',
    arr: 'SLO',
    depTime: '14.00',
    arrTime: '18.35',
    ticketLeft: '',
    trainClass: 'Ekonomi - A',
    totalTime: '6 jam 35 menit',
    passenger: '1 penumpang',
  };
  let passData = [
    {name: 'Chiko Armani', email: 'chiko@armani.com'},
    {name: 'Samsul Bahari', email: 'samsulbahari@mail.com'},
  ];
  return (
    <ImageBackground style={styles.bg} source={bg} resizeMode="stretch">
      <View style={styles.parent}>
        <View style={styles.navbarPar}>
          <Navbar navigation={navigation} />
          <Card {...cardData} />
        </View>
        <View>
          <View style={styles.passPar}>
            <View style={styles.passDetails}>
              <Heart />
              <Text style={styles.passenger}>Penumpang tersimpan</Text>
            </View>
            <ScrollView
              contentContainerStyle={{paddingLeft: 8}}
              contentInset={{left: -8}}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {passData.map((e, index) => (
                <PassDetails key={index} {...e} index={index} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.passDet}>
            <View style={styles.passDetChildL}>
              <Users />
              <Text style={styles.passenger}>Detail penumpang</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.addPass}>+ Tambah penumpang</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{height: ratios.widthPixel(270)}}>
            <View style={styles.parentCard}>
              <View style={styles.headerPar}>
                <View style={styles.namePar}>
                  <View style={styles.emoji}>
                    <EmojiHappy />
                    <Image
                      source={blurArr}
                      style={styles.blurArr}
                      tintColor="#F47814"
                    />
                  </View>
                  <Text style={styles.textHead}>Penumpang 1</Text>
                </View>
                <TouchableOpacity>
                  <ArrowUp />
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.bodyPar}>
                  <View style={styles.inputRow1}>
                    <View style={styles.inputPar1}>
                      <Text style={styles.inputTitle1}>Jenis Identitas</Text>
                      <TextInput
                        style={[styles.input1, {backgroundColor: '#E9F3F8'}]}
                        onChangeText={onChangeText1}
                        value={text1}
                        placeholder="Paspor"
                      />
                      <ArrowUp dimensions={16} style={styles.arrUpRel} />
                      <View
                        style={[
                          styles.borderBottom1,
                          {borderBottomColor: '#4CAFE7'},
                        ]}
                      />
                    </View>
                    <View style={styles.inputPar2}>
                      <Text style={styles.inputTitle1}>Nomor identitas</Text>
                      <TextInput
                        style={[styles.input1]}
                        onChangeText={onChangeText2}
                        value={text2}
                        placeholder="A 38910381"
                      />
                      <View style={styles.borderBottom1} />
                    </View>
                  </View>
                  <View style={styles.inputPar3}>
                    <Text style={styles.inputTitle1}>Nama lengkap</Text>
                    <TextInput
                      style={[styles.input1]}
                      onChangeText={onChangeText3}
                      value={text3}
                      placeholder="Ibnu Batutah"
                    />
                    <View style={[styles.borderBottom1]} />
                  </View>
                  <Text style={styles.paragraph}>
                    Penumpang bayi tidak mendapat kursi sendiri. Penumpang
                    dibawah 18 tahun dapat mengisi dengan nomor tanda pengenal
                    lain atau tanggal lahir (ddmmyyyy)
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <BlurView
          overlayColor="transparent"
          style={styles.btnBG}
          blurType="light"
          blurAmount={16}
          reducedTransparencyFallbackColor="white">
          <View style={styles.spacebw}>
            <TouchableOpacity style={styles.opacityCont}>
              <LinearGradient
                colors={['#FFFFFF', '#F4FBFF']}
                start={{x: 0.4431, y: 0.1357}}
                end={{x: 0.4431, y: 0.8643}}
                locations={[0, 1]}
                style={styles.filBtn}>
                <Text style={[styles.styleBtn, {color: colors.lightGray}]}>
                  PILIH KURSI
                </Text>
              </LinearGradient>
              <Image
                source={orangeBtnBG}
                tintColor="#C7EBFF"
                style={styles.orangeBtnBG}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opacityCont}
              onPress={() => navigation.navigate('ChairSelection')}>
              <LinearGradient
                colors={['#FE9B4B', '#F47814']}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                style={styles.filBtn}>
                <Text style={styles.styleBtn}>LANJUT</Text>
              </LinearGradient>
              <Image source={orangeBtnBG} style={styles.orangeBtnBG} />
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </ImageBackground>
  );
};

export default Summary;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  parent: {
    flex: 1,
  },
  navbarPar: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: ratios.widthPixel(16),
    borderBottomWidth: ratios.widthPixel(2),
    borderTopWidth: ratios.widthPixel(0),
    borderBottomLeftRadius: ratios.widthPixel(12),
    borderBottomRightRadius: ratios.widthPixel(12),
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, .4)',
  },
  passPar: {
    marginTop: ratios.widthPixel(8),
  },
  passDetails: {
    flexDirection: 'row',
    margin: ratios.widthPixel(16),
    alignItems: 'center',
  },
  passDet: {
    flexDirection: 'row',
    marginHorizontal: ratios.widthPixel(16),
    marginTop: ratios.widthPixel(28.5),
    marginBottom: ratios.widthPixel(19),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passDetChildL: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPass: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    color: colors.darkOrange,
  },
  passenger: {
    paddingLeft: ratios.widthPixel(8),
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    color: colors.darkGray,
    paddingTop: 0,
  },
  parentCard: {
    margin: ratios.widthPixel(16),
    backgroundColor: 'rgba(255, 255, 255, .8)',
    borderRadius: ratios.widthPixel(8),
  },
  namePar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHead: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    marginLeft: ratios.widthPixel(12),
    lineHeight: ratios.widthPixel(24),
    color: colors.gray,
  },
  headerPar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ratios.widthPixel(16),
    paddingBottom: ratios.widthPixel(13),
    borderColor: '#333E6330',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  blurArr: {
    width: ratios.widthPixel(50),
    height: ratios.widthPixel(50),
    position: 'absolute',
    top: ratios.widthPixel(7),
    left: ratios.widthPixel(-9),
    zIndex: -1,
  },
  inputPar1: {
    width: ratios.widthPixel(86),
  },
  inputPar2: {
    width: ratios.widthPixel(200),
  },
  inputPar3: {
    marginHorizontal: ratios.widthPixel(16),
    marginTop: ratios.widthPixel(8),
    marginBottom: ratios.widthPixel(12),
  },
  inputTitle1: {
    color: '#88879C',
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    marginBottom: ratios.widthPixel(8),
  },
  input1: {
    padding: 0,
    height: ratios.widthPixel(34),
    color: colors.darkGray,
    backgroundColor: '#F4F4F5',
    fontFamily: fonts.JakReg,
    fontSize: ratios.fontPixel(13),
    justifyContent: 'center',
    textAlignVertical: 'center',
    borderRadius: ratios.widthPixel(4),
    paddingLeft: ratios.widthPixel(8),
  },
  borderBottom1: {
    borderBottomWidth: ratios.widthPixel(2),
    borderBottomColor: '#D4D4DB',
  },
  inputRow1: {
    margin: ratios.widthPixel(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paragraph: {
    fontFamily: fonts.JakReg,
    fontSize: ratios.fontPixel(11),
    color: colors.lightGray,
    lineHeight: ratios.widthPixel(16),
    padding: ratios.widthPixel(16),
    paddingTop: 0,
  },
  btnBG: {
    width: '100%',
    height: ratios.widthPixel(96),
    bottom: 0,
    position: 'absolute',
  },
  spacebw: {
    paddingTop: ratios.widthPixel(12),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: ratios.widthPixel(-10),
  },
  filBtn: {
    width: ratios.widthPixel(169),
    height: ratios.widthPixel(45),
    borderRadius: ratios.widthPixel(25),
    alignItems: 'center',
    justifyContent: 'center',
    gap: ratios.widthPixel(9),
  },
  opacityCont: {
    width: '50%',
    alignItems: 'center',
  },
  styleBtn: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(12),
    letterSpacing: ratios.widthPixel(2),
    color: 'white',
    textAlign: 'center',
    paddingTop: ratios.widthPixel(6),
  },
  orangeBtnBG: {
    width: ratios.widthPixel(192),
    height: ratios.widthPixel(90),
    top: ratios.widthPixel(-42),
    zIndex: -10,
  },
  arrUpRel: {
    position: 'absolute',
    bottom: ratios.widthPixel(9),
    right: ratios.widthPixel(8),
    transform: [{rotate: '180deg'}],
  },
});
