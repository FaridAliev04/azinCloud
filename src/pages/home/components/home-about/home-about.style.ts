import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';



const styles = {
    container:{
        background: `linear-gradient(90deg,${colors.linearGradientBg})`,
    },
    mainDiv:{
        width:sizes.width,
        margin:sizes.marginAuto,
        paddingTop:"13rem",
        display:"flex",
        justifyContent: "space-between",
        height:"35rem",
        position:"relative",
        zIndex:"100",
    },
    svg:{
        position:"absolute",
        bottom:"-7rem",
        width:"100%",
        // zIndex:"-1",
    },
    svgMain:{
        position:"absolute",
        bottom:"-10rem",
         width:"100%",
         zIndex:"50",
         
    },
    secondSvg:{
        position:"relative",
        top:"10rem",
        left:'0',
        zIndex:"-1",
        rotate: "180deg"
    }
};

export const useHomeAboutStyle = createUseStyles(styles);
