import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';



const styles = {
   sectorMainDiv:{
    marginTop:"45rem",
    backgroundColor:"white",
    padding:sizes.mediumPadding,
    display:"flex",
    flexDirection: "column",
    gap:"3rem"
   },
   sectorHeader:{
    textAlign: "center",
    fontWeight: "700",
    fontSize:"32px",
    color:colors.sectorHeader
   },
   sectorDiv:{
    display:"flex",
    justifyContent: "space-around"
   },
   border:{
    border:"1px",
    backgroundColor:"#D1D1D1",
    width:"2px"
   },
   sectorLogoDiv:{
    width:"170px",
    height:"74px",
    display:"flex",
    justifyContent: "center"

   }
};

export const useSectorStyle = createUseStyles(styles);