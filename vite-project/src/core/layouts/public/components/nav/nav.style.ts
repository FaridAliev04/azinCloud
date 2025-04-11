import {createUseStyles} from 'react-jss';
import colors from '../../../../../assets/styles/abstracts/color';
import sizes from '../../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../../assets/styles/abstracts/functions';


const styles = {
    mainDiv:{
        display:"flex",
        justifyContent: "space-between",
        width:sizes.width,
        margin:sizes.marginAuto,
        zIndex:"150"
    },
    nav:{
        padding:"50px 0",
        position:"fixed",
        background: `linear-gradient(90deg,${colors.linearGradientBg})`,
        display:"flex",
        justifyContent: "space-around",
        zIndex:'150',
        width:"100%",
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
        fontWeight: "700",
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
        minWidth:"191px",
        marginTop:"-0.3rem",
        height:"54px",
        border:"none",
        background: "white",
        color:colors.loginBtn,
        fontSize:"18px",
        borderRadius:"41px",
    },
    serarchIconDiv:{
        marginTop:"0.5rem"
    },
    selectDiv:{
        marginTop:"0.2rem"
    },
    btnDiv:{
        position:"relative"
    },
    profilDiv:{
        background:colors.white,
        position:"absolute",
        padding:rem(sizes.base),
        width:'13.75rem',
        top: "3.8rem",
        borderRadius:"17px",
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base),
        color:colors.aboutText,
        fontWeight:"500",
        fontSize:"18px",
    },
    exitDiv:{
        display:"flex",
        justifyContent:"space-between"
    },
    logout:{
        cursor: "pointer"
    },
    noneDivActive:{
        position:"fixed",
        width:"100%",
        height:"100vh",
        zIndex:"99"
    },
    exitText:{
        marginTop:"0.2rem",
        cursor: "pointer",
    },
    profilBtn:{
        maxWidth: "191px",
        height: "54px",
        background: "rgba(255, 255, 255, 0.2)",
        color: colors.white,
        fontSize: "18px",
        borderRadius: "41px",
        border: "2px solid white",
        marginTop:"-0.3rem"
    },
    nameDiv:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:rem(sizes.base)
    },
    downIcons:{
        marginTop:"0.2rem"
    },
    nameSpan:{
        display: "-webkit-box",
        WebkitLineClamp: 1,   
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
    },
    personInfo:{
        cursor: "pointer",
    }
};

export const useNavStyle = createUseStyles(styles);
