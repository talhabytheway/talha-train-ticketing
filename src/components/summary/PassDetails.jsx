import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ratios from '../../constants/ratios';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const TicketSeya = ({name, email}) => {
  return (
    <View style={styles.cardPar}>
      <LinearGradient
        colors={['#f4fbff', '#FFF']}
        start={{x: 0.553, y: 0.864}}
        end={{x: 0.8236, y: 0.086}}
        style={styles.gradPar}>
        <View style={styles.textPar}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <LinearGradient
          style={styles.btnPar}
          colors={['#FE9B4B', '#F47814']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
          <Text style={styles.btnText}>Tambahkan penumpang</Text>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

export default TicketSeya;

const styles = StyleSheet.create({
  cardPar: {
    width: ratios.widthPixel(300),
    height: ratios.widthPixel(78),
    marginHorizontal: ratios.widthPixel(8),
    borderWidth: ratios.widthPixel(1),
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: ratios.widthPixel(16),
  },
  gradPar: {
    borderRadius: ratios.widthPixel(16),
    flex: 1,
    paddingLeft: ratios.widthPixel(19),
    paddingRight: ratios.widthPixel(17),
    paddingTop: ratios.widthPixel(13),
    paddingBottom: ratios.widthPixel(23),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnPar: {
    width: ratios.widthPixel(128),
    height: ratios.widthPixel(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ratios.widthPixel(8),
  },
  btnText: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    paddingBottom: ratios.widthPixel(1),
    color: 'white',
  },

  textPar: {
    width: ratios.widthPixel(112),
    height: ratios.heightPixel(42),
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    color: colors.darkGray,
  },
  email: {
    fontFamily: fonts.JakReg,
    fontSize: ratios.fontPixel(11),
    color: colors.lightGray,
  },
});
