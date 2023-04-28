import * as React from 'react';
import Svg, {Path, Defs, RadialGradient, Stop} from 'react-native-svg';
import ratios from '../../constants/ratios';

const Users = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(20)}
    height={ratios.widthPixel(20)}
    viewBox="0 0 20 20"
    fill="none">
    <Path
      fill="url(#a)"
      d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm8 0a3 3 0 1 1-5.999 0A3 3 0 0 1 17 6Zm-4.07 11c.046-.327.07-.66.07-1a6.97 6.97 0 0 0-1.5-4.33A5 5 0 0 1 19 16v1h-6.07ZM6 11a5 5 0 0 1 5 5v1H1v-1a5 5 0 0 1 5-5Z"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 14.9333 -18.7486 0 10 3)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FE9B4B" />
        <Stop offset={1} stopColor="#F47814" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default Users;
