import { useHomeAboutStyle } from "./home-about.style";
import SwiperComponent from "../swiper/swiper.component";
import Cloud from "../../../../assets/images/icons/cloud";

const HomeAbout = () => {
    const classes=useHomeAboutStyle()

  return (
    <div className={classes.container}>
      <div className={classes.mainDiv}>
        <SwiperComponent/>      
        <Cloud/>
         <div className={classes.svg}>
          <div className={classes.svgMain}>
          {/* <Rectangle4/> */}
          </div>
          {/* <div className={classes.secondSvg}>
            <Rectangle3/>
          </div> */}
         </div>
      </div>
        
    </div>
  );
};

export default HomeAbout;