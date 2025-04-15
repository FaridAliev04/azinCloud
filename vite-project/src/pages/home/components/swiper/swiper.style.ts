import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';



const styles = {
    mainDiv:{
        width:"527px"
    },
    swiperHeader:{
       fontSize:"3.125rem",
       lineHeight: "3.75rem",
       width:"542px !import",
       color:"white",
       fontFamily:fonts.fontBold
    },
    swiperDiv:{
        width:"65px",
        borderRadius:"9px",
        border:"0.1px solid white",
        backgroundColor: "#264653",
        marginTop:"60px"
    },
    activeSwiperDiv:{
        width:"65px",
        color:"white",
        borderRadius:"9px",
        border:"0.1px solid #2D99DC",
        marginTop:"60px" 
    }
};

export const useSwiperStyle = createUseStyles(styles);