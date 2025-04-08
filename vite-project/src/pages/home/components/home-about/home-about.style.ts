import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';



const styles = {
    mainDiv:{
        background: `linear-gradient(90deg,${colors.linearGradientBg})`,
        padding:"75px",
        display:"flex",
        justifyContent: "space-around",
        height:"35rem",
        marginTop:"7rem",
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
         zIndex:"50"
    },
    secondSvg:{
        position:"absolute",
        bottom:"-10rem",
        zIndex:"49"
    }
};

export const useHomeAboutStyle = createUseStyles(styles);
