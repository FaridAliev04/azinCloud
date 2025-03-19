import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';

const styles = {
    mainDiv:{
        position: "relative",
        bottom:"10rem",
        backgroundColor: "white",
        width:rem(sizes.productMainWidth),
        height:rem(sizes.productMainHeight),
        margin:sizes.marginAuto,
        padding:"2rem",
        display:"flex",
        flexDirection: "column",
        gap:"2rem",
        borderRadius:sizes.borderRadiusLarge,
        boxShadow: sizes.boxShadow,
    },
    productsSort:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width:rem(sizes.productsSortWidth),
        height:rem(sizes.productsSortHeight),
        borderRadius:"9px",
        cursor: "pointer",
        fontWeight:"700"


    },
    productsSortDiv:{
        display:"flex",
        justifyContent: "center",
        gap:"1rem"
    },
    activeSort:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width:rem(sizes.activeSortWidth),
        height:rem(sizes.activeSortHeight),
        borderRadius:"9px",
        backgroundColor:" #EAF5FC",
        cursor: "pointer",
        color:'#2BAAE2',
        fontWeight:"700"
    },
    swiperSlide: {
        height: "292px",
        width:"310px !important",
        zIndex:sizes.zIndex,
        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        display:"flex",
        flexDirection: "column",
        gap:"2rem",
        borderRadius:sizes.borderRadiusLarge,
    },
    productIcons:{
        display:"flex",
        justifyContent: "center",
        padding:"0.5rem"
    },
    productHeader:{
        textAlign:"center",
        fontSize:"18px",
        fontWeight:"700"
        
    },
    productText:{
        width:"246px",
        margin:"0 auto",
        textAlign:"center",
        fontSize:"18px",
        fontWeight:"400",
        display: "-webkit-box",
        WebkitLineClamp: 2,   
        WebkitBoxOrient: "vertical",
        overflow: "hidden", 

    },
    productTextsDiv:{
        display:"flex",
        flexDirection: "column",
        gap:"1rem"
    },
    moneyDiv:{
        display:"flex",
        justifyContent: "center"
    },
    swiper:{
        width:"85%",
        height:"100%",
        paddingTop: "0.2rem",
        paddingLeft: "0.2rem"
    },
    btn:{
        display:"flex",
        justifyContent: "space-around",
        padding:"18px",
        borderRadius:"18px",
        backgroundColor:" #12475F0D",
        width:"101px",
        height:"56px",
        border:"none",
        fontWeight: "700",
        color:"#12475F"
    },
    moreDiv:{
        display:"flex",
        justifyContent: "center",
        marginTop:"1rem",
        gap:"1rem",
        fontWeight:"500",
        color:"#2BAAE2"
    },
    moreIcons:{
        marginTop:"-0.2rem",
        cursor: "pointer",
    }
};

export const useProductsStyle = createUseStyles(styles);