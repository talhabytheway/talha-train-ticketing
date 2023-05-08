import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {useState} from 'react';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';
import ratios from '../../constants/ratios';

import bg from '../../assets/images/bgGradient.png';
import blur from '../../assets/images/Blurs/ticketListDateBlur.png';

export function Date({isActive, date, des}) {
  return (
    <View>
      {isActive ? (
        <View>
          <ImageBackground
            source={bg}
            resizeMode="cover"
            style={dateCardStyle.dateCardParAct}>
            <Text style={dateCardStyle.dateNumAct}>{date}</Text>
            <Text style={dateCardStyle.dateDesAct}>{des}</Text>
          </ImageBackground>
          <Image source={blur} resizeMode="cover" style={dateCardStyle.blur} />
        </View>
      ) : (
        <View style={dateCardStyle.dateCardPar}>
          <Text style={dateCardStyle.dateNum}>{date}</Text>
          <Text style={dateCardStyle.dateDes}>{des}</Text>
        </View>
      )}
    </View>
  );
}

const dateCardStyle = StyleSheet.create({
  dateCardPar: {
    width: ratios.widthPixel(56),
    height: ratios.widthPixel(72),
    borderRadius: ratios.widthPixel(8),
    marginBottom: ratios.widthPixel(16),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateNum: {
    fontFamily: fonts.JakBol,
    color: colors.lightGray,
    fontSize: ratios.fontPixel(15),
    lineHeight: ratios.heightPixel(24),
    marginBottom: ratios.heightPixel(6),
  },
  dateDes: {
    fontFamily: fonts.JakBol,
    color: colors.lightGray,
    fontSize: ratios.fontPixel(11),
  },
  dateCardParAct: {
    width: ratios.widthPixel(56),
    height: ratios.widthPixel(72),
    borderRadius: ratios.widthPixel(8),
    marginBottom: ratios.widthPixel(16),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateNumAct: {
    fontFamily: fonts.JakBol,
    color: 'white',
    fontSize: ratios.fontPixel(15),
    lineHeight: ratios.heightPixel(24),
    marginBottom: ratios.heightPixel(6),
  },
  dateDesAct: {
    fontFamily: fonts.JakBol,
    color: 'white',
    fontSize: ratios.fontPixel(11),
  },
  blur: {
    width: ratios.widthPixel(78),
    height: ratios.widthPixel(74),
    position: 'absolute',
    bottom: ratios.widthPixel(-14),
    left: ratios.widthPixel(-10),
    zIndex: -1,
  },
});

const Dates = () => {
  const [active, setActive] = useState(17);
  const days = [
    [15, 'SAB'],
    [16, 'MIN'],
    [17, 'SEN'],
    [18, 'SEL'],
    [19, 'RAB'],
  ];

  return (
    <View style={dateStyle.par}>
      {days.map(e => (
        <View key={e[0]} onTouchEnd={() => setActive(e[0])}>
          <Date isActive={active == e[0]} date={e[0]} des={e[1]} />
        </View>
      ))}
    </View>
  );
};

export default Dates;

const dateStyle = StyleSheet.create({
  par: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: ratios.widthPixel(16),
  },
});
