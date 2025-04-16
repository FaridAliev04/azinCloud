import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';

const styles = {
    mainDiv:{
        width:sizes.width,
        margin:sizes.marginAuto,
        padding:sizes.componentPaddingTop,
        display:"flex",
        flexDirection:"column",
        gap:"2rem"
    },
    mainServiceDiv:{
        display:"flex",
        justifyContent: "space-between",
    },
    header:{
        fontSize:sizes.largeFontSize,
        color:colors.aboutText,
        fontFamily:fonts.fontBold

    },
    productsSort:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width:rem(sizes.productsSortWidth),
        height:rem(sizes.productsSortHeight),
        borderRadius:"9px",
         cursor: "pointer",


    },
    productsSortDiv:{
        display:"flex",
        gap:"1rem"
    },
    activeSort:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width:rem(sizes.activeSortWidth),
        height:rem(sizes.activeSortHeight),
        borderRadius:"50px",
        backgroundColor:" #EAF5FC",
        cursor: "pointer",
        color:'#2BAAE2'
    },
    serviceDiv:{
        display: "flex",
        gap:rem(sizes.base),
        width:sizes.width,
        margin:sizes.marginAuto,
        flexWrap: "wrap",
        justifyContent: "space-between"

    },
    span:{
        fontFamily:fonts.fontBold

    },
    service: {
        height: "300px",
        width:"310px !important",
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
        fontFamily:fonts.fontBold

        
    },
    productText:{
        width:"246px",
        margin:"0 auto",
        textAlign:"center",
        fontSize:"18px",
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
    btn:{
        display:"flex",
        justifyContent: "space-around",
        padding:"20px",
        borderRadius:"18px",
        backgroundColor:" #12475F0D",
        width:"101px",
        height:"56px",
        border:"none",
        fontFamily:fonts.fontBold,
        color:"#12475F"
    }

};

export const useMainServiceStyle = createUseStyles(styles);