import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import ratios from '../../constants/ratios';

const Route = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(73)}
    height={ratios.widthPixel(6)}
    viewBox="0 0 73 6"
    fill="none">
    <Path
      stroke="#E0E0E0"
      strokeDasharray="8 8"
      strokeMiterlimit={16}
      d="M0 3h72"
    />
    <Circle cx={3} cy={3} r={2.5} fill="#F2F2F2" stroke="#E0E0E0" />
    <Circle cx={70} cy={3} r={2.5} fill="#2D9CDB" stroke="#2F80ED" />
  </Svg>
);
export default Route;
