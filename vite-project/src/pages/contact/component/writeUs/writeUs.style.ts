import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    mainDiv:{
        marginTop:sizes.marginTopComponent,
        padding:"2rem"
    },
    inpDiv:{
        display:"flex",
        flexDirection: "column",
        gap:"2rem",
        background: `linear-gradient(90deg,${colors.linearGradientBg})`,
        position:"relative",
        height:"500px",
        padding:sizes.mediumPadding,
        width:"80%",
        margin:sizes.marginAuto,
        borderRadius:sizes.borderRadiusMedium
    },
    inpt:{
        padding:sizes.inpPadding,
        width:"257px",
        borderRadius:sizes.borderRadiusveryLarge
    },
    inptMedium:{
        padding:sizes.inpPadding,
        width:sizes.normalInptWidht,
        borderRadius:sizes.borderRadiusveryLarge
    },
    includeInp:{
        display:"flex",
        gap:"1rem"
    },
    inpLarge:{
        width:sizes.normalInptWidht,
        height:"370px",
        borderRadius:sizes.borderRadiusMedium,
        padding:sizes.inpPadding,
    },
    btn:{
        width:"580px",
        color:colors.white,
        background:colors.loginBtn,
        fontSize:"18px",
        fontWeight:"700",
        borderRadius:sizes.borderRadiusveryLarge,
        padding:sizes.inpPadding,
    },
    header:{
        color:colors.white,
        fontSize:sizes.largeFontSize,
        fontWeight:"700"
    },
    svgDiv:{
        position:"absolute",
        right:"0"
    },
    mesajSvg:{
        position:"absolute",
        top:"70px"
    }
};

export const useWriteUsStyle = createUseStyles(styles);
