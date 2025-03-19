import {createUseStyles} from 'react-jss';



const styles = {
    aboutMainSvg:{
        position: "relative",
        display:"flex"
    },
    svgDiv:{
        position: "absolute",
        left:"0"
    },
    aboutLogoSvg:{
        position: "absolute",
        left:"0",
        top:"3rem"
    },

};

export const useAboutUsSvgStyle = createUseStyles(styles);