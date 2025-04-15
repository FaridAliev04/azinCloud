import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import { rem } from '../../../../assets/styles/abstracts/functions';
import sizes from '../../../../assets/styles/abstracts/sizes';
import fonts from '../../../../assets/styles/abstracts/fonts';


const styles = {
    mainDiv:{
        padding:"5rem 0",
        display:"flex",
        flexDirection:"column",
        margin:sizes.marginAuto
    },
    header:{
        color:colors.aboutText,
        fontSize:sizes.largeFontSize,
        fontFamily:fonts.fontBold
    },
    text:{
        color:colors.aboutText,
        fontSize:rem(sizes.base),
        width:"60%",
        textAlign:"center",
        lineHeight:"122%"
    },
    textsDiv:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base),
        alignItems: "center",

    },
    iconsDiv:{
        display:"flex",
        gap:rem(sizes.base),
        fontSize:sizes.ortaSizes
    },
    iconsHeader:{
        display:"flex",
        alignItems:"center",
        color:"#10364D",
        fontFamily:fonts.fontBold
        },
    iconsMainDiv:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    },
    iconsText:{
        lineHeight:"160%",
        color:colors.aboutText,
        width:"540px"
    },
    companyDiv:{
        display:"flex",
       justifyContent: "space-between",
       marginTop:"4rem"
    },
    companyMainDiv:{
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-around",
    },
    container:{
        width:sizes.width,
        margin:sizes.marginAuto
    }
};

export const useAboutServiceStyle = createUseStyles(styles);