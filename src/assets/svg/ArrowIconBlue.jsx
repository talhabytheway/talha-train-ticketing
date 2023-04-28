import * as React from 'react';
import Svg, {
  Rect,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from 'react-native-svg';
import ratios from '../../constants/ratios';

const ArrowIconBlue = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(24)}
    height={ratios.widthPixel(24)}
    viewBox="0 0 24 24"
    fill="none">
    <Rect width={24} height={24} fill="url(#a)" rx={8} />
    <Rect
      width={23}
      height={23}
      x={0.5}
      y={0.5}
      fill="url(#b)"
      stroke="url(#c)"
      rx={7.5}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.333 12h9.334M12 7.333 16.667 12 12 16.667"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 30 -30 0 20.5 0)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#85D3FF" />
        <Stop offset={1} stopColor="#2596D7" />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 30 -30 0 20.5 0)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#85D3FF" />
        <Stop offset={1} stopColor="#2596D7" />
      </RadialGradient>
      <LinearGradient
        id="c"
        x1={0}
        x2={24}
        y1={0}
        y2={24}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ArrowIconBlue;
