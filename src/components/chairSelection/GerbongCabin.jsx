import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

import fonts from '../../constants/fonts';
import colors from '../../constants/colors';
import ratios from '../../constants/ratios';

import bg from '../../assets/images/gerbongBg.png';
import blur from '../../assets/images/Blurs/ticketListDateBlur.png';
const GerbongCabin = () => {
  const arr = [1, 2, 3, 4, 5];
  const [active, setActive] = React.useState(2);

  return (
    <View style={styles.par}>
      {arr.map(e => {
        return (
          <TouchableOpacity
            key={e}
            onPress={() => setActive(e)}
            style={[styles.card, e == active && styles.activeCard]}>
            <ImageBackground
              source={e == active && bg}
              resizeMode="cover"
              style={styles.bg}>
              <Text style={[styles.text, e == active && styles.activeText]}>
                {e}
              </Text>
              <Image
                source={e == active && blur}
                style={styles.blur}
                resizeMode="cover"
              />
            </ImageBackground>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default GerbongCabin;

const styles = StyleSheet.create({
  par: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  card: {
    width: ratios.widthPixel(38),
    height: ratios.widthPixel(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: ratios.widthPixel(2),
    borderRadius: ratios.widthPixel(8),
    borderColor: 'rgba(242, 242, 242, 1)',
    backgroundColor: 'white',
    marginBottom: ratios.widthPixel(32),
  },
  text: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.widthPixel(15),
    lineHeight: ratios.widthPixel(24),
    color: colors.lightGray,
  },
  activeText: {
    color: 'white',
  },
  activeCard: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  bg: {
    width: ratios.widthPixel(38),
    height: ratios.widthPixel(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    width: ratios.widthPixel(60),
    height: ratios.widthPixel(60),
    position: 'absolute',
    bottom: ratios.widthPixel(-25),
  },
});
