import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useNewsStyle } from './news.style';
import { useNewsCard } from './action/news.query';
import Left from '../../../../assets/images/icons/left';
import Right from '../../../../assets/images/icons/right';
import useLocalization from '../../../../assets/lang';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {ILang} from '../../../../assets/lang/lang'
import {environment} from '../../../../core/configs/app.config'

const NewsComponent = () => {
    const classes = useNewsStyle();
    const { data } = useNewsCard();
    const translate=useLocalization()

    const locale = useSelector((state: any) => state.locale);
      const currentLang = useMemo(() => {
        return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || "az";
      }, [locale]);

    return (
        <div className={classes.mainDiv}>
            <div className={classes.headerDiv}>
                <h1 className={classes.newsHeader}>{translate("news")}</h1>
                <div className={`relative ${classes.btnDiv}`}>
                    <button className={`swiper-button-prev-news ${classes.btn} absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200`}>
                        <Right />
                    </button>
                    <button className={`swiper-button-next-news ${classes.btn} absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200`}>
                        <Left />
                    </button>
                </div>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next-news',
                    prevEl: '.swiper-button-prev-news',
                }}
                modules={[Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                classNmae={classes.swiper}
            >
                {
                    data?.map((e: any) => (
                        <SwiperSlide key={e.id}>
                            <div className={classes.card}>
                                <div className={classes.imgDiv}>
                                    <img className={classes.img} src={e.mainImg} alt={e.header} />
                                </div>
                                <div className={classes.texts}>
                                    <h1 className={classes.textsHeader}>{currentLang==="en"?e.header:e.headerAz}</h1>
                                    <p className={classes.textsText}>{currentLang==="en"?e.mainText:e.mainTextAz}</p>
                                    <span className={classes.textDate}>{e.tarix}</span>
                                </div>
                               
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default NewsComponent;
