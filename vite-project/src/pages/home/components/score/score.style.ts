import { createUseStyles } from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';

const styles = {
   mainDiv:{
    background: `linear-gradient(90deg,${colors.linearGradientBg})`,
    padding:sizes.mediumPadding,
    marginTop:sizes.marginTopComponent,
    display:"flex",
    justifyContent: "space-around",
   },
   valueText:{
    fontSize:"24px",
    color:colors.white,
    fontWeight:"600"
   },
   score:{
    fontSize:"50px",
    fontWeight:"900",
    color:colors.white,
    lineHeight:sizes.lineHeight
   },
   border:{
    border:`0.8px solid ${colors.white}`,
   },
   scoreCard:{
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    gap:rem(sizes.base)
   }
};

export const useScoreStyle = createUseStyles(styles);
