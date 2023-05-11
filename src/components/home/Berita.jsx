import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import ratios from '../../constants/ratios';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

import tip from '../../assets/images/message.png';
import update from '../../assets/images/thumbsUp.png';

const Berita = ({props}) => {
  const [title, message] = props;

  return (
    <View style={styles.beritaPar}>
      <LinearGradient
        colors={['#FFFFFF', '#F4FAFF']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        locations={[0, 1]}
        style={styles.berita}>
        <View style={styles.textPar}>
          <View style={styles.tag(title == 'Tips')}>
            <Text style={styles.tagTxt(title == 'Tips')}>{title}</Text>
          </View>
          <Text style={styles.message}>{message}</Text>
        </View>
        <Image
          resizeMode="contain"
          source={title == 'Tips' ? tip : update}
          style={styles.img}
        />
      </LinearGradient>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  beritaPar: {
    width: ratios.widthPixel(262),
    height: ratios.widthPixel(150),
    marginHorizontal: ratios.widthPixel(8),
    borderWidth: ratios.widthPixel(2),
    backgroundColor: '#fafafb',
    borderColor: '#fafafb',
    borderRadius: ratios.widthPixel(16),
  },
  berita: {
    flex: 1,
    borderRadius: ratios.widthPixel(16),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textPar: {
    margin: ratios.widthPixel(24),
    marginRight: 0,
    width: ratios.widthPixel(112),
  },
  message: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    marginBottom: ratios.widthPixel(10),
    marginTop: ratios.widthPixel(4),
    lineHeight: ratios.heightPixel(24),
    color: colors.gray,
  },
  tag: title => ({
    width: title ? ratios.widthPixel(36) : ratios.widthPixel(52),
    height: ratios.widthPixel(18),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ratios.widthPixel(4),
    backgroundColor: title ? '#DFF3FF' : '#F6E4D5',
  }),
  tagTxt: title => ({
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    paddingBottom: ratios.widthPixel(1),
    color: title ? '#4AAEE6' : '#F9882D',
  }),

  img: {
    height: '100%',
    width: ratios.widthPixel(130),
    right: ratios.widthPixel(6),
  },
});
