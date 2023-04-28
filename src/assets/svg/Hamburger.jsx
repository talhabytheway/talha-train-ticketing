import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ratios from '../../constants/ratios';

const Hamburger = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(24)}
    height={ratios.widthPixel(24)}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      fill="#59597C"
      fillRule="evenodd"
      d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 0 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 0 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm0 6a1.2 1.2 0 0 1 1.2-1.2H12a1.2 1.2 0 0 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 18Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Hamburger;
