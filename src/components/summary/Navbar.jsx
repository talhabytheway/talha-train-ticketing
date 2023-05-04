import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import ArrowLeft from '../../assets/svg/ArrowLeft';

import colors from '../../constants/colors';
import ratios from '../../constants/ratios';
import fonts from '../../constants/fonts';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <ArrowLeft />
      </TouchableOpacity>
      <Text style={styles.navbarText}>Ringkasan pemesanan</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    margin: ratios.widthPixel(8),
    marginVertical: ratios.widthPixel(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbarText: {
    marginLeft: ratios.widthPixel(16),
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(19),
    color: colors.gray,
    paddingBottom: ratios.widthPixel(5),
  },
});
