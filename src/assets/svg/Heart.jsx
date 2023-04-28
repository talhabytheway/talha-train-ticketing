import * as React from 'react';
import Svg, {Path, Defs, RadialGradient, Stop} from 'react-native-svg';
import ratios from '../../constants/ratios';

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(20)}
    height={ratios.widthPixel(20)}
    viewBox="0 0 20 20"
    fill="none">
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 0 1 5.656 0L10 6.343l1.172-1.17a4 4 0 1 1 5.656 5.655L10 17.658l-6.828-6.83a4 4 0 0 1 0-5.656Z"
      clipRule="evenodd"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 14.6199 -16.7157 0 10.025 3.95)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FE9B4B" />
        <Stop offset={1} stopColor="#F47814" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
