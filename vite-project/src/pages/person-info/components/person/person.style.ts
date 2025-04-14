import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';


const styles = {
    mainDiv:{
        margin:sizes.marginAuto,
        // marginTop:sizes.marginTop,
        paddingTop:"13rem",
        paddingBottom:"3rem"
    },
    personCard:{
        background: `linear-gradient(90deg,${colors.linearGradientBg})`,
        display:"grid",
        gridTemplateColumns:" auto auto  auto",
        gap:sizes.mediumGap,
        padding:"4rem",
        borderRadius:sizes.borderRadiusMedium,
        marginTop:sizes.smallMarginTop
    },
    personDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"0.5rem"
    },
    labelName:{
        color:colors.white,
        opacity:"0.8"
    },
    personInfo:{
        color:colors.white
    },
    header:{
        color:colors.aboutText,
        fontSize:sizes.largeFontSize,
        fontFamily:fonts.fontBold

    }
}

export const usePersonStyle = createUseStyles(styles);