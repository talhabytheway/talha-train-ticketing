import {
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swap from '../../assets/svg/Swap';
import PlusCircle from '../../assets/svg/PlusCircle';
import MinusCircle from '../../assets/svg/MinusCircle';
import LinearGradient from 'react-native-linear-gradient';
import ratios from '../../constants/ratios';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const MainCard = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <View style={styles.mainCardPar}>
        <View style={styles.locationPar}>
          <View style={styles.locChild}>
            <Text style={styles.jakB10}>Keberangkatan</Text>
            <Text style={styles.jakB14}>PWT</Text>
            <Text style={styles.jakR10}>Stasiun Purwokerto</Text>
          </View>
          <Swap />
          <View style={styles.locChild}>
            <Text style={[styles.jakB10, {textAlign: 'right'}]}>Tujuan</Text>
            <Text style={[styles.jakB14, {textAlign: 'right'}]}>SLO</Text>
            <Text style={[styles.jakR10, {textAlign: 'right'}]}>
              Stasiun Solo Balapan
            </Text>
          </View>
        </View>
        <View style={styles.bar}></View>
        <View style={styles.deparPar}>
          <View>
            <Text style={styles.jakB10}>Tanggal keberangkatan</Text>
            <Text style={styles.jakB14}>Rabu, 12 Agustus 2020</Text>
          </View>
          <View style={styles.switchPar}>
            <Switch
              trackColor={{false: '#F2F2F2', true: '#F9EDE3'}}
              thumbColor={isEnabled ? '#F47814' : '#E0E0E0'}
              onChange={() => toggleSwitch(0)}
              value={isEnabled}
              disabled={false}
              style={styles.switch}
            />
            <Text style={styles.goHome}>Pulang pergi</Text>
          </View>
        </View>
        <View style={styles.addPasPar}>
          <View style={styles.addPas}>
            <Text
              style={[
                styles.jakB10,
                {
                  paddingBottom: ratios.widthPixel(8),
                  width: ratios.heightPixel(100),
                  textAlign: 'right',
                },
              ]}>
              Jumlah penumpang
            </Text>
            <View style={styles.setCount}>
              <Pressable
                disabled={count < 2}
                onPress={() => setCount(count => count - 1)}>
                <MinusCircle isNotDisabled={count > 1} />
              </Pressable>
              <Text style={styles.count}>{count}</Text>
              <Pressable onPress={() => setCount(count => count + 1)}>
                <PlusCircle />
              </Pressable>
            </View>
          </View>
          <View style={styles.shad}>
            <TouchableOpacity onPress={() => navigation.navigate('TicketList')}>
              <LinearGradient
                colors={['#FE9B4B', '#F47814']}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                locations={[0, 1]}
                style={styles.ticketBtn}>
                <Text style={styles.ticketBtnTxt}>CARI TIKET</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.mainCardShad}></View>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  mainCardPar: {
    width: ratios.widthPixel(343),
    margin: ratios.widthPixel(16),
    marginTop: 0,
    backgroundColor: '#FAFDFE',
    borderWidth: 2,
    borderColor: '#fff',
    padding: ratios.widthPixel(16),
    borderRadius: ratios.widthPixel(8),
  },
  locationPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: ratios.heightPixel(8),
  },
  locChild: {
    width: ratios.widthPixel(110),
  },
  jakB10: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    color: colors.blue,
  },
  jakB14: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    color: colors.darkGray,
    marginVertical: ratios.widthPixel(4),
  },
  jakR10: {
    fontFamily: fonts.JakReg,
    fontSize: ratios.fontPixel(11),
    color: colors.lightGray,
  },
  bar: {
    width: '100%',
    marginVertical: ratios.heightPixel(8),
    height: ratios.heightPixel(2),
    backgroundColor: colors.whiter,
  },
  deparPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: ratios.widthPixel(8),
  },
  switch: {
    marginRight: ratios.widthPixel(12),
    paddingVertical: ratios.widthPixel(8),
  },
  switchPar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  goHome: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(11),
    color: colors.darkGray,
  },
  addPasPar: {
    paddingTop: ratios.widthPixel(16),
    paddingBottom: ratios.widthPixel(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addPas: {},
  setCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: ratios.heightPixel(100),
    alignItems: 'center',
  },
  count: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(15),
    color: colors.darkGray,
    marginTop: ratios.heightPixel(-2),
  },
  ticketBtn: {
    width: ratios.widthPixel(128),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ratios.widthPixel(8),
    elevation: 20,
    shadowColor: '#F47814',
    shadowOffset: {width: 6, height: 6},
    shadowRadius: 10,
  },
  ticketBtnTxt: {
    fontFamily: fonts.JakBol,
    fontSize: ratios.fontPixel(13),
    letterSpacing: 1.6,
    color: 'white',
    paddingVertical: ratios.widthPixel(12),
  },
  mainCardShad: {
    width: ratios.widthPixel(300),
    height: ratios.heightPixel(32),
    elevation: 24,
    shadowColor: 'rgba(21, 130, 191, 1)',
    shadowOffset: {width: 0, height: 12},
    shadowRadius: 20,
    borderRadius: ratios.widthPixel(10),
    alignSelf: 'center',
    position: 'absolute',
    bottom: ratios.heightPixel(22),
    zIndex: -1,
  },
});
