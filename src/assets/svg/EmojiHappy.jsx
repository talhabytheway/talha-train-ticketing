import * as React from 'react';
import Svg, {
  Circle,
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';
import ratios from '../../constants/ratios';

/* SVGR has dropped some elements not supported by react-native-svg: filter */
const EmojiHappy = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={ratios.widthPixel(32)}
    height={ratios.widthPixel(42)}
    fill="none">
    <Circle cx={16} cy={16} r={16} fill="url(#a)" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M16 24a8 8 0 1 0 0-16.001A8 8 0 0 0 16 24Zm-3-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.464 5.535a1 1 0 0 0-1.415-1.414 3 3 0 0 1-4.242 0 1 1 0 0 0-1.415 1.414 5.001 5.001 0 0 0 7.072 0Z"
      clipRule="evenodd"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 34.1333 -33.3309 0 16 0)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FE9B4B" />
        <Stop offset={1} stopColor="#F47814" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default EmojiHappy;
