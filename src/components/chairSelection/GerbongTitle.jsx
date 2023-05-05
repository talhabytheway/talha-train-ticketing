import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import fonts from '../../constants/fonts';
import colors from '../../constants/colors';
import ratios from '../../constants/ratios';

const GerbongTitle = () => {
  return (
    <View style={styles.textPar}>
      <Text style={[styles.text, styles.ger]}>Gerbong</Text>
      <Text style={[styles.text, styles.norm]}>A</Text>
      <Text style={[styles.text, styles.norm]}>B</Text>
      <Text style={[styles.text, styles.exPad]}>C</Text>
      <Text style={[styles.text, styles.norm]}>D</Text>
      <Text style={[styles.text, styles.norm]}>E</Text>
    </View>
  );
};

export default GerbongTitle;

const styles = StyleSheet.create({
  textPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: ratios.widthPixel(24),
    marginLeft: ratios.widthPixel(20),
    marginRight: ratios.widthPixel(45),
    // backgroundColor: 'black',
  },
  text: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.widthPixel(15),
    lineHeight: ratios.widthPixel(24),
    color: colors.darkGray,
  },
  ger: {
    marginRight: ratios.widthPixel(8),
  },

  exPad: {
    marginRight: ratios.widthPixel(19),
  },
});
