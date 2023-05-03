import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ratios from '../../constants/ratios';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import ArrowIconBlue from '../../assets/svg/ArrowIconBlue';
import arrowBlur from '../../assets/images/Blurs/blueArrowBlur.png';

const TicketSeya = ({index, location, route, time}) => {
  return (
    <View>
      <View style={styles.cardPar}>
        <LinearGradient
          colors={['#f4fbff', '#FFF']}
          start={{x: 0.553, y: 0.864}}
          end={{x: 0.8236, y: 0.086}}
          style={styles.gradPar}>
          {index % 2 == 0 ? (
            <LinearGradient
              style={styles.nearBtnPar}
              colors={['#FE9B4B', '#F47814']}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}>
              <Text style={styles.nearBtnText}>{time}</Text>
            </LinearGradient>
          ) : (
            <View style={styles.farBtnPar}>
              <Text style={styles.farBtnText}>{time}</Text>
            </View>
          )}
          <View style={styles.textPar}>
            <Text style={styles.loc}>{location}</Text>
            <Text style={styles.route}>{route}</Text>
          </View>
          <View style={styles.arrBtnPar}>
            <ArrowIconBlue />
            <Image
              source={arrowBlur}
              resizeMode="contain"
              style={styles.imgBlur}
            />
          </View>
        </LinearGradient>
      </View>
      <View style={styles.shadCard}></View>
    </View>
  );
};

export default TicketSeya;

const styles = StyleSheet.create({
  cardPar: {
    width: ratios.widthPixel(248),
    height: ratios.widthPixel(86),
    marginHorizontal: ratios.widthPixel(8),
    marginBottom: ratios.widthPixel(16),
    borderWidth: ratios.widthPixel(2),
    backgroundColor: '#fafafb',
    borderColor: '#fafafb',
    borderRadius: ratios.widthPixel(16),
  },
  gradPar: {
    borderRadius: ratios.widthPixel(16),
    flex: 1,
    padding: ratios.widthPixel(16),
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kek: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
  },
  nearBtnPar: {
    width: ratios.widthPixel(46),
    height: ratios.widthPixel(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ratios.widthPixel(8),
    elevation: 22,
    shadowColor: '#F06B00',
    shadowOffset: {width: 6, height: 20},
    shadowRadius: 20,
  },
  nearBtnText: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    paddingBottom: ratios.widthPixel(1),
    color: 'white',
  },
  farBtnPar: {
    width: ratios.widthPixel(46),
    height: ratios.widthPixel(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ratios.widthPixel(8),
    backgroundColor: '#DFF3FF',
  },
  farBtnText: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    paddingBottom: ratios.widthPixel(1),
    color: '#4AAEE6',
  },
  textPar: {
    width: ratios.widthPixel(94),
    height: ratios.heightPixel(42),
    justifyContent: 'space-between',
  },
  loc: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    color: colors.darkGray,
  },
  route: {
    fontFamily: fonts.JakReg,
    fontSize: ratios.fontPixel(11),
    color: colors.lightGray,
  },
  arrBtnPar: {
    margin: 16,
    elevation: 22,
    shadowColor: '004166',
    shadowOffset: {width: 12, height: 12},
    shadowRadius: 20,
  },
  shadCard: {
    width: ratios.widthPixel(200),
    height: ratios.widthPixel(20),
    elevation: 16,
    shadowColor: 'rgba(21, 130, 191, 1)',
    shadowRadius: 40,
    borderRadius: ratios.widthPixel(100),
    shadowOffset: {width: 0, height: 10},
    alignSelf: 'center',
    bottom: ratios.heightPixel(50),
    zIndex: -1,
  },
  imgBlur: {
    width: ratios.widthPixel(50),
    height: ratios.widthPixel(50),
    position: 'absolute',
    zIndex: -1,
    left: ratios.widthPixel(-14),
    top: ratios.widthPixel(-6),
  },
});
