import React from 'react';
import { useAboutUsSvgStyle } from './aboutUsSvg.style';
import AboutUsSvg from '../../../assets/images/icons/aboutSvg';
import AboutLogo from '../../../assets/images/icons/aboutLogo';
const AboutUsSvgComponent = () => {
    const classes=useAboutUsSvgStyle()
    return (
        <div className={classes.aboutMainSvg}>
        <div className={classes.svgDiv}>
            <div className={classes.svgDiv}>
                <AboutUsSvg/>
            </div>
            <div className={classes.aboutLogoSvg}>
                <AboutLogo/>
            </div>
        </div>
        </div>
    );
}

export default AboutUsSvgComponent;
