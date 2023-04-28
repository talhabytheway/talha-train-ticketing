import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ratios from '../../constants/ratios';

const ArrowLeft = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(20)}
    height={ratios.widthPixel(20)}
    viewBox="0 0 20 20"
    fill="none">
    <Path
      fill="#333E63"
      fillRule="evenodd"
      d="M9.707 16.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L5.414 9H17a1 1 0 1 1 0 2H5.414l4.293 4.293a1 1 0 0 1 0 1.414Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowLeft;
