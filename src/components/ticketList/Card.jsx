import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import fonts from '../../constants/fonts';
import colors from '../../constants/colors';
import ratios from '../../constants/ratios';
import ArrowIconBlue from '../../assets/svg/ArrowIconBlue';
import Route from '../../assets/svg/Route';
import arrowBlur from '../../assets/images/Blurs/blueArrowBlur.png';

const Card = ({
  title,
  fare,
  dep,
  arr,
  depTime,
  arrTime,
  ticketLeft,
  trainClass,
  totalTime,
}) => {
  return (
    <View>
      <View style={styles.cardPar}>
        <View style={styles.left}>
          <View style={styles.titlePar}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.pathPar}>
            <View style={styles.pathDep}>
              <Text style={styles.pathName}>{dep}</Text>
              <Text style={styles.pathTime}>{depTime}</Text>
            </View>
            <View>
              <Route />
            </View>
            <View style={styles.pathArr}>
              <Text style={styles.pathName}>{arr}</Text>
              <Text style={styles.pathTime}>{arrTime}</Text>
            </View>
          </View>
          <View style={styles.classTime}>
            <View style={styles.trainClassPar}>
              <Text style={styles.trainClassTxt}>{trainClass}</Text>
            </View>
            <View>
              <Text style={styles.totalTime}>{totalTime}</Text>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <View>
            <Text style={styles.fareTxt}>{fare}</Text>
            {ticketLeft !== '' && (
              <Text style={styles.ticketLeft}>{ticketLeft}</Text>
            )}
          </View>
          <View>
            <ArrowIconBlue />
            <Image
              source={arrowBlur}
              resizeMode="contain"
              style={styles.imgBlur}
            />
          </View>
        </View>
      </View>
      <View style={styles.boxshad}></View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardPar: {
    width: '100%',
    height: ratios.widthPixel(128),
    marginBottom: ratios.widthPixel(16),
    paddingHorizontal: ratios.widthPixel(16),
    paddingVertical: ratios.widthPixel(12),
    borderRadius: ratios.widthPixel(8),
    borderColor: 'white',
    borderWidth: ratios.widthPixel(1),
    backgroundColor: 'rgba(255, 255, 255, .8)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    marginBottom: ratios.widthPixel(8),
    justifyContent: 'space-between',
  },
  right: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    lineHeight: ratios.heightPixel(24),
    color: colors.darkGray,
  },
  pathPar: {
    flexDirection: 'row',
    width: ratios.widthPixel(148),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pathName: {
    fontFamily: fonts.RalBol,
    fontSize: ratios.fontPixel(11),
    lineHeight: ratios.widthPixel(12),
    marginBottom: ratios.widthPixel(4),
    color: colors.darkGray,
  },
  pathTime: {
    fontFamily: fonts.JakReg,
    fontSize: ratios.fontPixel(11),
    lineHeight: ratios.widthPixel(16),
    color: colors.darkGray,
  },
  trainClassPar: {
    width: ratios.widthPixel(76),
    height: ratios.widthPixel(18),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ratios.widthPixel(4),
    backgroundColor: '#F6E4D5',
  },
  trainClassTxt: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    paddingBottom: ratios.widthPixel(1),
    color: '#F9882D',
  },
  classTime: {
    flexDirection: 'row',
    width: ratios.widthPixel(148),
    justifyContent: 'space-between',
  },
  totalTime: {
    fontFamily: fonts.JakReg,
    fontSize: ratios.fontPixel(11),
    lineHeight: ratios.widthPixel(16),
    color: colors.darkGray,
  },
  imgBlur: {
    width: ratios.widthPixel(50),
    height: ratios.widthPixel(50),
    position: 'absolute',
    zIndex: -1,
    left: ratios.widthPixel(-12),
    top: ratios.widthPixel(-6),
  },
  fareTxt: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    lineHeight: ratios.heightPixel(24),
    color: colors.darkGray,
    marginBottom: ratios.widthPixel(2),
    textAlign: 'right',
  },
  ticketLeft: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(10),
    textAlign: 'right',
    color: colors.carrot,
  },
  boxshad: {
    width: ratios.widthPixel(310),
    height: ratios.heightPixel(20),
    elevation: 20,
    shadowColor: 'rgba(21, 130, 191, 1)',
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 20,
    borderRadius: ratios.widthPixel(10),
    alignSelf: 'center',
    position: 'absolute',
    bottom: ratios.heightPixel(22),
    zIndex: -1,
  },
});
