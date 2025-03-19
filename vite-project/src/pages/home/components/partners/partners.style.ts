import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';



const styles = {
    mainDiv:{
        display:"flex"
    },
    swiperDiv:{
        display:"flex",
        alignItems: "center",
        gap:"2rem"
    },
    partnersSvg:{
        position:"relative"
    },
    swiper:{
        width:"45rem",
        padding: "7rem",
        display:"flex",
        flexDirection: "column",
        gap:"2rem"
    },
    svgDiv:{
        position:"absolute",
        left:"2.125rem"
    },
    markSvg:{
        position:"absolute",
        top:"0"
    },
    partnersHeaderDiv:{
        textAlign: "center"
    },
    partnersHeader:{
        fontSize:sizes.largeFontSize,
        fontWeight: "700",
        color:colors.aboutText
    },
    btn:{
        border: "none",
        background: "none",
    }
};

export const usePartnersStyle = createUseStyles(styles);