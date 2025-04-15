import LatoBlack from '../../fonts/Lato/Lato-Black.ttf';
import LatoBold from '../../fonts/Lato/Lato-Bold.ttf';
import LatoRegular from '../../fonts/Lato/Lato-Regular.ttf';

const typography = {
  '@font-face': [
    {
      fontFamily: 'Lato Bold',
      src: `url("${LatoBold}")`,
    },
    {
      fontFamily: 'Lato Regular',
      src: `url("${LatoRegular}")`,
    },
  ],
};

export default typography;
