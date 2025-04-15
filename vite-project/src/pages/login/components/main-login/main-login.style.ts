import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';
import fonts from '../../../../assets/styles/abstracts/fonts';



const styles = {
    mainDiv:{
        padding:sizes.componentPaddingTop
    },
    loginDiv:{
        background: `linear-gradient(90deg,${colors.linearGradientBg})`,
        width:sizes.width,
        minHeight:"400px",
        margin:sizes.marginAuto,
        borderRadius:sizes.borderRadiusMedium,
        position:"relative",
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        padding: "4.6875rem 0"
    },
    loginTop:{
        position:"absolute",
        top:sizes.zero,
        left:sizes.zero
    },
    loginBottom:{
        position:"absolute",
        bottom:sizes.zero,
        right:sizes.zero
    },
    category:{
        display:"flex",
        justifyContent:"center",
        gap:"5rem",
        textAlign:"center"
    },
    categoryName:{
        fontSize:sizes.ortaSizes,
        fontFamily:fonts.fontBold,
        color:colors.white,
        cursor: "pointer"
    },
    border:{
        border:`0.1px solid ${colors.white}`,
        width:"36rem",
        margin:sizes.marginAuto
    },
    mainCategory:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    },
    noneCategorName:{
        opacity:"0.5",
        fontSize:sizes.ortaSizes,
        fontFamily:fonts.fontBold,
        color:colors.white,
        cursor: "pointer"
    }
};

export const useMainLoginStyles = createUseStyles(styles);