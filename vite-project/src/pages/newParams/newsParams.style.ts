import {createUseStyles} from 'react-jss';
import sizes from '../../assets/styles/abstracts/sizes';
import { rem } from '../../assets/styles/abstracts/functions';
import colors from '../../assets/styles/abstracts/color';


const styles = {
    mainDiv:{
        width:"80%",
        margin:sizes.marginAuto,
        marginTop:"10rem",
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base),
        padding:"2rem"
    },
    backDiv:{
        display:"flex",
        gap:rem(sizes.base)
    },
    textDiv:{
        marginTop:"0.5rem"
    },
    text:{
        fontWeight:"400",
        color:colors.aboutText
    },
    backIcons:{
        cursor:"pointer"
    },
    img:{
        width:"100%",
        borderRadius:sizes.borderRadiusMedium
    },
    header:{
        color:colors.aboutText,
        fontSize:sizes.largeFontSize,
        lineHeight:"160%",
        fontWeight:"700"
    },
    tarix:{
        color:"#2BAAE2",
        fontWeight:"700"
    },
    mainTexts:{
        fontSize:sizes.ortaSizes,
        lineHeight:"160%",
        color:colors.aboutText,
        fontWeight:"700"
    },
    texts:{
        marginTop:rem(sizes.base),
        color:colors.aboutText,
        opacity:" 0.7",
        lineHeight:"160%",
    },
    news:{
        display:"flex",
        flexDirection:"column",
        gap:sizes.mediumGap
    }
}

export const useNewsParamsStyles = createUseStyles(styles);