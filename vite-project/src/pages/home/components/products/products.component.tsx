import { useProductsStyle } from './products.style';
import IconamoonLightning1Fill1 from '../../../../assets/images/icons/iconamoon_lightning-1-fill (1)';
import MingcuteRocketFill from '../../../../assets/images/icons/mingcute_rocket-fill';
import { useMemo, useState } from 'react';
import { useProducts } from './action/products.query';
import Group34502 from '../../../../assets/images/icons/Group 34502';
import { Swiper, SwiperSlide } from 'swiper/react';
import Vuesax from '../../../../assets/images/icons/vuesax';
import useLocalization from '../../../../assets/lang';
import{ ILang }from '../../../../assets/lang/lang'
import {environment} from '../../../../core/configs/app.config'
import { useSelector } from 'react-redux';
const ProductsComponent = () => {
    const classes = useProductsStyle();
    const [activeProduct, setActiveProduct] = useState('Available');  
    const { data } = useProducts(activeProduct);

    const toggleSort = (sortType: string) => {
        setActiveProduct(sortType); 
        console.log(activeProduct)
    };
    const translate=useLocalization()
    const locale = useSelector((state: any) => state.locale);

  const currentLang = useMemo(() => {
    return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || "az";
  }, [locale]);
    return (
        <div className={classes.mainDiv}>
            <div className={classes.productsSortDiv}>
                <div 
                    onClick={() => toggleSort('Available')} 
                    className={activeProduct === 'Available' ? classes.activeSort : classes.productsSort}
                >
                    <IconamoonLightning1Fill1 activeProduct={activeProduct}/>
                    <span>{translate("Available_products")}</span>
                </div>
                <div 
                    onClick={() => toggleSort('Upcoming')} 
                    className={activeProduct === 'Upcoming' ? classes.activeSort : classes.productsSort}
                >
                    <MingcuteRocketFill activeProduct={activeProduct}/>
                    <span>{translate("Upcoming")}</span>
                </div>
            </div>

            <Swiper spaceBetween={50} slidesPerView={3} width={window.innerWidth - 400} height={700} className={classes.swiper}>
                {
                    data?.map((e: any) => (
                        <SwiperSlide key={e.id} className={classes.swiperSlide}>
                            <div className={classes.productIcons}>
                                <Group34502 />
                            </div>
                            <div className={classes.productTextsDiv}>
                                <h1 className={classes.productHeader}>{currentLang==="en"?e.header:e.headerAz}</h1>
                                <p className={classes.productText}>{currentLang==="en"?e.text:e.textAz}</p>
                            </div>
                            <div className={classes.moneyDiv}>
                                <button className={classes.btn}>
                                    <span>{e.pul}</span>
                                    <span>AZN</span>
                                </button>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className={classes.moreDiv}>
                <p>{translate("more")}</p> 
                <div className={classes.moreIcons}>
                    <Vuesax/>
                </div>
            </div>
        </div>
    );
};

export default ProductsComponent;
