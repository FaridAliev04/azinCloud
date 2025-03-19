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
        position:"relative;"
    },
    svg:{
        position:"absolute",
        bottom:"-14rem"
    },
    svgMain:{
        position:"absolute",
        bottom:"-14rem"
    }
};

export const useHomeAboutStyle = createUseStyles(styles);
