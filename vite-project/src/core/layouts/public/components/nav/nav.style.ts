import {createUseStyles} from 'react-jss';
import colors from '../../../../../assets/styles/abstracts/color';
import sizes from '../../../../../assets/styles/abstracts/sizes';


const styles = {
    mainDiv:{
        position:"fixed",
        display:"flex",
        justifyContent: "space-around",
        width:"100%",
        padding:"50px",
        background: `linear-gradient(90deg,${colors.linearGradientBg})`,
         zIndex:'99'
    },
    nav:{
        // padding:"50px",
        background: `linear-gradient(90deg,${colors.linearGradientBg})`,
        display:"flex",
        justifyContent: "space-around",
        zIndex:'99'
    },
    listNav:{
        display:"flex",
        gap:sizes.mediumGap,
        marginTop:" 0.7rem"
    },
    listLink:{
        color:"white",
        width:"65px",
        height:"0px",
        fontSize: "17px",
        fontWeight: "800",
    },
    select:{
        background: "none",
        border:"none",
        color:"white",
    },
    includeDiv:{
        display:"flex",
        justifyContent:"space-between",
        gap:sizes.mediumGap
    },
    option:{
        color:colors.black,
        padding:'1rem'
    },
    navBtn:{
        width:"191px",
        height:"54px",
        border:"none",
        background: "white",
        color:colors.loginBtn,
        fontSize:"18px",
        borderRadius:"41px"
    },
    serarchIconDiv:{
        marginTop:"0.5rem"
    },
    selectDiv:{
        marginTop:"0.2rem"
    }
};

export const useNavStyle = createUseStyles(styles);
