import { createUseStyles } from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import sizes from '../../../../assets/styles/abstracts/sizes';

const styles = {
    serviceMainDiv: {
        padding: sizes.mediumPadding,
        marginTop: "2rem"
    },
    serviceHeader: {
        fontSize: sizes.largeFontSize,
        fontWeight: "700",
        textAlign: "center",
        lineHeight: "122%",
        color: colors.sectorHeader
    },
    serviceText: {
        textAlign: "center",
        width: "933px",
        margin: sizes.marginAuto,
        fontSize: "16px"
    },
    textsDiv: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    cardsContainer: {
        display: "flex",
        marginTop: "2rem",
        justifyContent: "space-around",
    },
    card: {
        backgroundColor: "#fff",
        padding: "1.5rem",
        borderRadius: "28px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        // textAlign: "center",
        transition: "transform 0.3s ease-in-out",
        width:"280.0002136230469px",
        height:"100%",
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        position:"relative"

    },
    cardText:{
        lineHeight: "1.2rem",
        // marginTop:"1rem"
    },
    iconContainer: {
        display: "flex",
        justifyContent: "center",
        gap:"1rem",
        alignItems: "center",
        marginBottom: "1rem",

    },
    marginTopCart2:{
        marginTop:"1rem"
    },
    marginTopCart3:{
        marginTop:"2rem"
    },
    marginTopCart4:{
        marginTop:"3rem"
    },
    cardHeader:{
        fontSize:"20px",
        lineHeight:"128%",
        color:colors.aboutUsHeader,
        fontWeight:"700"
    },
    cardEffect:{
        "&&::before":{
            content: "''",
            position: "absolute",
            right: "0",
            bottom: "0",
            width: "90%",
            height:" 6.25rem",
            backgroundColor:" #12475f",
            borderRadius: "28px",
            opacity:" .05",
            transform: "translate(-2px, 8px) rotate(6deg)",
            zIndex:" -1"
        }
    }
};

export const useServiceStyle = createUseStyles(styles);
