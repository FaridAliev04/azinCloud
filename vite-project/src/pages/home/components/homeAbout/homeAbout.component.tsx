import { useRef } from "react";
import cloud from '../../../../assets/images/icons/cloud.svg';
import Rectangle4 from "../../../../assets/images/icons/Rectangle 4";
import Rectangle3 from "../../../../assets/images/icons/Rectangle 3";
import { Swiper as SwiperType } from "swiper"; 
import { useHomeAboutStyle } from "./homeAbout.style";
import SwiperComponent from "../swiper/swiper.component";
import Cloud from "../../../../assets/images/icons/cloud";

const MySwiper = () => {
    const classes=useHomeAboutStyle()

  return (
    <div className={classes.mainDiv}>
        <SwiperComponent/>      
        <Cloud/>
         
    </div>
  );
};

export default MySwiper;