import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ratios from '../../constants/ratios';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(20)}
    height={ratios.widthPixel(20)}
    fill="none"
    {...props}>
    <Path
      fill="#88879C"
      fillRule="evenodd"
      d="M14.707 12.707a1 1 0 0 1-1.414 0L10 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
