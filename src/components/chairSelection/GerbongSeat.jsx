import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ratios from '../../constants/ratios';

import bg from '../../assets/images/gerbongSelBg.png';
import blur from '../../assets/images/Blurs/blueArrowBlur.png';

export default function SeatMap() {
  const [seats, setSeats] = useState([
    ['e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e'],
    ['s', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'b', 'e', 'e'],
    ['b', 'e', 'e', 'e', 'e'],
    ['b', 'b', 'b', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e'],
  ]);

  const handleSeatPress = (rowIndex, colIndex) => {
    if (seats[rowIndex][colIndex] === 'e') {
      const updatedSeats = [...seats];
      updatedSeats[rowIndex][colIndex] = 's';
      setSeats(updatedSeats);
    } else if (seats[rowIndex][colIndex] === 's') {
      const updatedSeats = [...seats];
      updatedSeats[rowIndex][colIndex] = 'e';
      setSeats(updatedSeats);
    }
  };

  return (
    <View style={styles.par}>
      <View style={styles.seatMap}>
        {seats.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((seat, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[
                  styles.seat,
                  seat === 'b' && styles.bookedSeat,
                  seat === 's' && styles.selectedSeat,
                  colIndex === 2 && styles.rowThree,
                  colIndex === 0 && styles.pad0,
                  colIndex === 5 && styles.pad5,
                ]}
                disabled={seat === 'b'}
                onPress={() => handleSeatPress(rowIndex, colIndex)}>
                <Image
                  source={seat == 's' && bg}
                  style={styles.imgBg}
                  resizeMode="cover"
                />
                <Image
                  source={!(seat == 'e') && blur}
                  style={styles.imgBgBlur}
                  tintColor={seat === 'b' && '#FE9B4B'}
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  par: {
    marginHorizontal: ratios.widthPixel(16),
  },
  seatMap: {
    height: ratios.widthPixel(476),
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seat: {
    width: ratios.widthPixel(28),
    height: ratios.widthPixel(28),
    borderWidth: ratios.widthPixel(2),
    borderRadius: ratios.widthPixel(4),
    borderColor: 'rgba(242, 242, 242, 1)',
    backgroundColor: 'white',
  },
  bookedSeat: {
    backgroundColor: '#FE9B4B',
    borderWidth: 0,
  },
  selectedSeat: {
    borderWidth: 0,
  },
  seatLabel: {
    fontSize: 16,
  },
  imgBg: {
    width: ratios.widthPixel(28),
    height: ratios.widthPixel(28),
    zIndex: 100,
  },
  imgBgBlur: {
    position: 'absolute',
    top: ratios.widthPixel(-24),
    left: ratios.widthPixel(-28),
    zIndex: -1,
    transform: [{scale: 0.7}],
  },
  rowThree: {
    marginRight: ratios.widthPixel(20),
  },
});
