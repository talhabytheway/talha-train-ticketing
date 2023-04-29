import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import ratios from '../../constants/ratios';

const MinusCircle = ({isNotDisabled = false}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(20)}
    height={ratios.widthPixel(20)}
    viewBox="0 0 20 20"
    fill="none">
    <G
      stroke={isNotDisabled ? '#59597C' : '#CBCCD7'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)">
      <Path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666ZM6.667 10h6.666" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MinusCircle;
