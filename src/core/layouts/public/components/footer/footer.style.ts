import {createUseStyles} from 'react-jss';
import colors from '../../../../../assets/styles/abstracts/color';
import sizes from '../../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../../assets/styles/abstracts/functions';
import fonts from '../../../../../assets/styles/abstracts/fonts';



const styles = {
    inp:{
        background:colors.white,
        borderRadius:sizes.borderRadiusMedium,
        padding: `${sizes.footerFormPaddingTop} 170px ${sizes.footerFormPaddingTop} ${sizes.footerFormPaddingRight}`,
        width:"17rem"
        
    },
    mainDiv:{
        background:colors.footerBg,
        padding:sizes.mediumPadding
    },
    inpDiv:{
        position:"relative"
    },
    btn:{
        background:colors.loginBtn,
        padding:`${sizes.footerFormPaddingTop} 50px`,
        borderRadius:sizes.borderRadiusMedium,
        width:"156px",
        color:colors.white,
        lineHeight:sizes.lineHeight,
        position:"absolute",
        right:"0"
    },
    sosialIconsDiv:{
        display:"flex",
        gap:rem(sizes.base),
        alignItems: "center"
    },
    inpSoialDiv:{
        display:"flex",
        justifyContent: "space-between"
    },
    headerDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"2.5rem"
    },
    header:{
        color:colors.aboutText,
        // fontWeight:"700"
        fontFamily:fonts.fontBold
    },
    footerSpan:{
        color:colors.aboutText
    },
    footer:{
        display:"flex",
        justifyContent: "space-between",
        maxWidth:sizes.width,
        margin:sizes.marginAuto
    },
    border:{
        border:`1px solid ${colors.aboutText}` ,
        opacity:"0.2"
    },
    infoDiv:{
        display:"flex",
        gap:"0.5rem"
    },
    infoMainDiv:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    },
    info:{
        width:"15rem"
    },
    container:{
        width:sizes.width,
        margin:sizes.marginAuto
    }

};


export const useFooterStyle = createUseStyles(styles);