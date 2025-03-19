import React from 'react';
import { useAboutMainStyle } from './mainAbout.style';
import AboutUsSvgComponent from '../../../../core/shared/aboutUsSvg/aboutUsSvg.component';
import useLocalization from '../../../../assets/lang';

const MainAboutComponent = () => {

    const classes=useAboutMainStyle()
    const translate=useLocalization()

    return (
        <div className={classes.mainDiv}>
            <AboutUsSvgComponent/>
            <div></div>

            <div className={classes.texts}>
                <h1 className={classes.textHeader}>
                   {translate("About_us")}
                </h1>
                <p className={classes.text}>
                {translate("about_text")}
                </p>
            </div>
        </div>
    );
}

export default MainAboutComponent;
