import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';



const styles = {
    aboutMain:{
        position:"relative",
    },
    texts:{
        position:"absolute",
        right:"110px",
        top:"5rem",
        display:"flex",
        flexDirection: "column",
        gap:"2rem"
    },
    textsHeader:{
        fontSize:"32px",
        color:colors.aboutUsHeader,
        fontWeight: "700",
        lineHeight:sizes.lineHeight
    },
    text:{
        color:colors.aboutText,
        width:"685px",
        height:"137px",
        fontSize:'16px',
        lineHeight:"160%",
        fontWeight:"400"
    },
    logosDiv:{
        display:"flex",
        justifyContent: "space-between",
        width:"609px"
    },
    logoInculdeDiv:{
        display:"flex", 
        gap:"0.5rem" 
    },
    logoInculdeHeader:{
        width:"66px",
        fontSize:"18px",
        fontWeight:"700",
        lineHeight:"100%",
    },
    border:{
        width:"2px",
        backgroundColor:" #71C6EC",
        border:'1px',
    },
    btn:{
        backgroundColor:colors.loginBtn,
        border:"none",
        padding: ".9375rem 3.125rem",
        color:"white",
        fontSize:" 1rem",
        borderRadius:" 2.5625rem"
    },
    textsAnimationDiv:{
        display:"flex",
        flexDirection: "column",
        gap:"2rem"
    }
};

export const useAboutUsStyle = createUseStyles(styles);