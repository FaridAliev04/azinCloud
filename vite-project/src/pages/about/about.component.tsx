import React from 'react';
import { useAboutStyle } from './about.style';
import MainAboutComponent from './components/mainAbout/mainAbout.component';
import AboutServiceComponent from './components/aboutService/aboutService.component';

const AboutComponent = () => {
    const classes=useAboutStyle()
    return (
        <div className={classes.mainDiv}>
            <MainAboutComponent/>
            <AboutServiceComponent/>
        </div>
    );
}

export default AboutComponent;
