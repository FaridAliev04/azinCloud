import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import { rem } from '../../../../assets/styles/abstracts/functions';


const styles = {
    mainDiv:{
        paddingBottom:sizes.smallMarginTop
    },
    personEmailMainDiv:{
        boxShadow:colors.boxShadov,
        padding:sizes.smallMarginTop,
        borderRadius:sizes.borderRadiusMedium,
        display:"flex",
        flexDirection:"column",
        gap:sizes.smallMarginTop
    },
    personEmailDiv:{
        boxShadow:"rgba(99, 99, 99, 0.4) 0px 2px 8px 0px;",
        padding:sizes.smallMarginTop,
        borderRadius:sizes.borderRadiusMedium,
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    },
    email:{
        color:colors.loginBtn,
        fontSize:"18px",
        fontWeight:"700",
        // marginTop:"0.3rem"
    },
    changeEmail:{
        color:colors.loginBtn,
        fontSize:"18px",
        fontWeight:"700",
        marginTop:"0.3rem"
    },
    personEmail:{
        color:colors.aboutUsHeader,
        fontWeight:"400",
        fontSize:"14px"
    },
    changeEmailDiv:{
        display:"flex",
        gap:rem(sizes.base)
    }

}

export const useEmailChangeStyles = createUseStyles(styles);