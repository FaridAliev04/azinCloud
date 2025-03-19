import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    mainDiv: {
        marginTop: "15rem",
    },
    infoMainDiv: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
    },
    infoDiv: {
        display: "flex",
        gap: "0.5rem",
    },
    mapHeader:{
        color:colors.aboutText,
        fontSize:sizes.largeFontSize,
        fontWeight:"700"
    },
    info: {
        width: "15rem",
    },
    sosialIconsDiv: {
        display: "flex",
        gap: rem(sizes.base),
        alignItems: "center",
    },
    contactDiv: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10rem",
        width: "80%",
        margin:sizes.marginAuto,
        flexWrap: "wrap", 
    },
    mapContainer: {
        flex: 1,
        minWidth: "400px", 
        height: "400px",
    },
    border:{
        border:"1px solid #B7B7B7"
    }
};

export const useMapStyle = createUseStyles(styles);
