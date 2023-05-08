import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import fonts from '../../constants/fonts';
import colors from '../../constants/colors';
import ratios from '../../constants/ratios';
import LinearGradient from 'react-native-linear-gradient';

const Hero = () => {
  return (
    <View style={styles.heroPar}>
      <View style={styles.heroChild}>
        <Text style={styles.mainHead}>Pilih tempat{'\n'}dudukmu</Text>
        <View style={styles.headChild}>
          <Text style={styles.trainClass}>Ekonomi (C)</Text>
          <Text style={styles.carriage}>Gerbong 2 - 3A</Text>
        </View>
      </View>
      <View style={styles.categoriesPar}>
        <View style={styles.category}>
          <View style={styles.tersediaBox} />
          <Text style={styles.catTxt}>Tersedia</Text>
        </View>
        <View style={styles.category}>
          <View style={styles.terisiBox} />
          <Text style={styles.catTxt}>Terisi</Text>
        </View>
        <View style={styles.category}>
          <LinearGradient
            colors={['#2596D7', '#85D3FF']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.terpilihBox}
          />
          <Text style={styles.catTxt}>Terpilih</Text>
        </View>
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  mainHead: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(25),
    color: colors.darkGray,
    width: ratios.widthPixel(190),
    lineHeight: ratios.widthPixel(32),
  },
  heroPar: {
    marginHorizontal: ratios.widthPixel(32),
    marginVertical: ratios.widthPixel(24),
  },
  trainClass: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    color: colors.gray,
    textAlign: 'right',
  },
  carriage: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    lineHeight: ratios.widthPixel(24),
    color: '#4BAEE7',
    textAlign: 'right',
  },
  headChild: {
    width: '35%',
    gap: ratios.widthPixel(8),
  },
  heroChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: ratios.widthPixel(30),
  },
  categoriesPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  catTxt: {
    fontSize: ratios.fontPixel(11),
    fontFamily: fonts.JakReg,
    letterSpacing: -0.2,
    lineHeight: ratios.widthPixel(16),
    color: colors.gray,
  },
  tersediaBox: {
    width: ratios.widthPixel(16),
    height: ratios.widthPixel(16),
    backgroundColor: 'white',
    borderColor: '#F2F2F2',
    borderWidth: ratios.widthPixel(2),
    borderRadius: ratios.widthPixel(4),
    marginRight: ratios.widthPixel(10),
  },
  terisiBox: {
    width: ratios.widthPixel(16),
    height: ratios.widthPixel(16),
    backgroundColor: colors.Orange,
    marginRight: ratios.widthPixel(8),
    borderRadius: ratios.widthPixel(4),
  },
  terpilihBox: {
    width: ratios.widthPixel(16),
    height: ratios.widthPixel(16),
    marginRight: ratios.widthPixel(8),
    borderRadius: ratios.widthPixel(4),
  },
});
