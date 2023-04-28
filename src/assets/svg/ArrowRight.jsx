import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ratios from '../../constants/ratios';

const ArrowRight = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(16)}
    height={ratios.widthPixel(16)}
    viewBox="0 0 16 16">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667"
    />
  </Svg>
);
export default ArrowRight;
