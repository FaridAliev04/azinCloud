import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    mainDiv:{
        marginTop:"10rem",
        padding:"5rem",
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
        fontWeight:"700"
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
        borderRadius:"9px",
        backgroundColor:" #EAF5FC",
        cursor: "pointer",
        color:'#2BAAE2'
    },
    serviceDiv:{
        display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap:rem(sizes.base),
    width:"110%",
    margin:sizes.marginAuto

    },
    span:{
        fontWeight:"700"
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

};

export const useMainServiceStyle = createUseStyles(styles);