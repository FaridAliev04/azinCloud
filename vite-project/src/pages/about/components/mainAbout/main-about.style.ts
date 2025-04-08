import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import { rem } from '../../../../assets/styles/abstracts/functions';
import sizes from '../../../../assets/styles/abstracts/sizes';


const styles = {
    mainDiv:{
        background: `linear-gradient(90deg,${colors.linearGradientBg})`,
        paddingTop:rem(sizes.base),
        height:"35rem",
        display:"flex"
    },
    texts:{
        marginLeft: '40rem',
        marginTop: '8rem',
        color:colors.white,
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    },
    textHeader:{
        fontSize:sizes.largeFontSize ,
        fontWeight:"700",
        lineHeight:sizes.lineHeight
        
    },
    text:{
        lineHeight:"160%",
        width:"685px",
        fontWeight:"400",
    }
};

export const useAboutMainStyle = createUseStyles(styles);