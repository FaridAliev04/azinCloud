import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';



const styles = {
    mainDiv:{
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        marginTop:"2rem"
    },
    signInput:{
        width:"35rem",
        borderRadius:"41px",
        padding:"1rem"
    },
    inputDiv:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    },
    forgetPasswordText:{
        textAlign:"end",
        fontSize:"14px",
        color:colors.white,
        cursor: "pointer",
        lineHeight:"160%",
        letterSpacing: "1px",
    },
    btn:{
        padding:"1rem",
        borderRadius:"41px",
        background:colors.loginBtn,
        color:colors.white,
        fontWeight:900,
        fontSize:"18px",
        width:"100%"
    }
};

export const useSignInStyles = createUseStyles(styles);