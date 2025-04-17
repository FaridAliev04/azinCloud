import { useAboutStyle } from './about.style';
import MainAboutComponent from './components/main-about/main-about.component';
import AboutServiceComponent from './components/about-service/about-service.component';

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
