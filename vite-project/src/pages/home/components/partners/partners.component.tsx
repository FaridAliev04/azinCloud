import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Grid } from "swiper/modules";
import alibaba from "../../../../assets/images/statics/alibaba.png";
import google from "../../../../assets/images/statics/google.png";
import core from "../../../../assets/images/statics/core.png";
import vm from "../../../../assets/images/statics/vm.png";
import ArrowUp from "../../../../assets/images/icons/arrowUp";
import ArrowDown from "../../../../assets/images/icons/arrowDown";
import { usePartnersStyle } from "./partners.style";
import Partners from "../../../../assets/images/icons/partners";
import Marks from "../../../../assets/images/icons/marks";
import useLocalization from "../../../../assets/lang";

const PartnersComponent = () => {
  const partners = [core, google, vm, alibaba,core, google, vm, alibaba];
  const classes=usePartnersStyle()

  const chunkArray = (array:any, size:number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const groupedPartners = chunkArray(partners.concat(partners), 2);

  const translate=useLocalization()

  return (
    <div className={`bg-[#F5F9FC] py-16 relative ${classes.mainDiv}`}>
        <div className={classes.swiper}>
            <div className={classes.partnersHeaderDiv}>
                <h1 className={classes.partnersHeader}>
                    {translate("partners_header")}
                </h1>
            </div>
            <div className={`max-w-5xl mx-auto text-center ${classes.swiperDiv}`}>
                <div>
                    <button className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 swiper-button-prev ${classes.btn}`}>
                        <ArrowUp />
                    </button>
                    <button className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 swiper-button-next ${classes.btn}`}>
                        <ArrowDown />
                    </button>
                </div>

                <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={2} 
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            className="w-full"
          >
            {groupedPartners.map((group, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="grid grid-cols-2 gap-6">
                  {group.map((src:any, idx:number) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-lg w-60 flex items-center justify-center">
                      <img src={src} alt={`Partner ${index * 2 + idx + 1}`} className="w-40 h-auto object-contain" />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

            </div>

        </div>

        <div className={classes.partnersSvg}>
            <div className={classes.svgDiv}>
                <div>
                  <Partners/>  
                </div>
                <div className={classes.markSvg}>
                  <Marks/>  
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default PartnersComponent;

