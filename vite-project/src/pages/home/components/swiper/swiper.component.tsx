import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperStyle } from "./swiper.style";
import { motion } from "framer-motion";
import useLocalization from "../../../../assets/lang";


const SwiperComponent = () => {
    const swiperRef = useRef<SwiperType | null>(null); 
    const classes=useSwiperStyle()
    const [cloudNumber,setCloudNumber]=useState(1)
    const translate=useLocalization()

    const data = [
      {
        id: 1,
        text: translate("data1"),
      },
      {
        id: 2,
        text: translate("data2"),
      },
      {
        id: 3,
        text: translate("data3"),
      },
    ];
  
    const goToSlide = (index: number) => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index - 1); 
        setCloudNumber(index)
      }
    };
    return (
        <div className={classes.mainDiv}>
          <motion.div
          whileInView={{ x: 0, opacity: 1 }} 
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileInViewOnce={true}  
      >
        <Swiper
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)} 
        spaceBetween={50}
        slidesPerView={1}
      >
        {data.map((e) => {
          return <SwiperSlide className={classes.swiperHeader} key={e.id}>{e.text}</SwiperSlide> 
        })}
      </Swiper>
</motion.div>
      
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {data.map((e) => {
          return (
            <div
              key={e.id}
              onClick={() => goToSlide(e.id)}
              style={{ cursor: "pointer" }}
              className={e.id==cloudNumber?classes.swiperDiv:classes.activeSwiperDiv}
            >
            </div>
          );
        })}
      </div>
        </div>
    );
}

export default SwiperComponent;
