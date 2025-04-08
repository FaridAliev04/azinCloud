import { useAboutStyle } from './about.style';
import MainAboutComponent from './components/mainAbout/main-about.component';
import AboutServiceComponent from './components/aboutService/about-service.component';

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
