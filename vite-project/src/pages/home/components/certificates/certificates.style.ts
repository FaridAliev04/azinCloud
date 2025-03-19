import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';



const styles = {
    certificateHeader: {
        textAlign: "center",
        fontSize: sizes.largeFontSize,
        color: colors.aboutText,
        fontWeight: "700",
        lineHeight: sizes.lineHeight
    },
    imgDiv: {
        display: "flex",
        justifyContent: "space-between",
    },
    mainDiv: {
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        padding: "62px 112px"
    },
    img: {
        position: "relative",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { 
            transform: "scale(1.5)" ,
            transition: "transform 0.3s ease-in-out"
        }
    },
    imgMainDiv:{
        width:"150px",
        height: "150px",
    }
};


export const useCertificatesStyle = createUseStyles(styles);