import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ratios from '../../constants/ratios';

const Swap = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ratios.widthPixel(24)}
    height={ratios.widthPixel(24)}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      fill="#2D9CDB"
      d="M19.828 10.172a1.657 1.657 0 0 0 0-2.344L18.5 6.5c-.553-.554-1.5-.162-1.5.621a.879.879 0 0 1-.879.879H11a1 1 0 1 0 0 2h5.121c.486 0 .879.393.879.879 0 .783.947 1.175 1.5.621l1.328-1.328ZM7 13.122c0-.784-.946-1.175-1.5-.622l-1.328 1.328a1.657 1.657 0 0 0 0 2.344L5.5 17.5c.554.553 1.5.162 1.5-.621 0-.486.393-.879.879-.879H13a1 1 0 1 0 0-2H7.879A.879.879 0 0 1 7 13.121Z"
    />
  </Svg>
);
export default Swap;
