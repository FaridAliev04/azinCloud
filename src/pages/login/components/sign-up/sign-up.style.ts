import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';
import fonts from '../../../../assets/styles/abstracts/fonts';



const styles = {
    twinInp:{
        padding:`${rem(sizes.base)} !important`,
        borderRadius:`41px !important`,
        width:"250px !important"
    },
    selection:{
        background:`${colors.white} !important`,
        height:"48px !important",
        '& .ant-select-selection-item': {
             color: `${colors.black} !important`,  
        },
    },
    inpDiv:{
        display:"flex",
        gap:"3rem"
    },
    inp:{
        width:"100%",
        padding:rem(sizes.base),
        borderRadius:"41px"
    },
    passwordDiv:{
        width:"100%",
        display:"flex",
        justifyContent: "space-between",
    },
    btn:{
        padding:"1rem",
        borderRadius:"41px",
        background:colors.loginBtn,
        color:colors.white,
        fontFamily:fonts.fontBold,
        fontSize:"18px",
        width:"100%", 
        cursor: "pointer !important"
    },
    mainDiv:{
        display:"flex",
        flexDirection:"column",
        // gap:"2rem",
        marginTop:rem(sizes.base)
    }
};

export const useSignUpStyles = createUseStyles(styles);