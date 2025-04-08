import {createUseStyles} from 'react-jss';
import sizes from '../../../assets/styles/abstracts/sizes';
import colors from '../../../assets/styles/abstracts/color';
import { rem } from '../../../assets/styles/abstracts/functions';

const styles = {
    mainDiv:{
        background: colors.white,
        padding:"78px 112px",
        marginTop:"9rem",
    },
    headerDiv:{
        display:"flex",
        justifyContent: "space-between",
        paddingBottom:" 3rem"
    },
    btn:{
        border: "none",
        background: "none",
        cursor: "pointer",
    },
    main:{
        display:"flex"
    },
    img:{
        width:"22.75rem",
        borderRadius:sizes.borderRadius
    },
    card: {
        width: "384px",
        background: colors.newsCardBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        borderRadius:sizes.borderRadiusMedium,
        cursor:"pointer"
    },
    btnDiv:{
        display:"flex",
    },
    texts:{
        display:"flex",
        flexDirection: "column",
        gap:rem(sizes.base),
        padding:"1.5rem 1.3rem"
    },
    imgDiv:{
        padding:"0.7rem"
    },
    swiper:{
        marginTop:"2rem !important"
    },
    textsHeader:{
        fontSize:rem(sizes.base),
        color:colors.aboutText,
        lineHeight:"160%",
        fontWeight:"700"
    },
    textsText:{
        color: colors.aboutText,
        opacity: "0.8",
        display: "-webkit-box",
        WebkitLineClamp: 2,   
        WebkitBoxOrient: "vertical",
        overflow: "hidden",  
    },
    textDate:{
        fonstSize:"14px",
        color:colors.aboutText
    },
    newsHeader:{
        fontSize:sizes.largeFontSize,
        lineHeight:sizes.lineHeight,
        color:colors.aboutText,
        fontWeight:"700"
    },
    cardContainer: {
        display:" flex",
        overflowX: "hidden" ,
        flexWrap: "wrap",
        gap:rem(sizes.base),
        marginTop:"3rem",
        justifyContent: "space-between"
    }
};

export const useNewsCardStyle = createUseStyles(styles);