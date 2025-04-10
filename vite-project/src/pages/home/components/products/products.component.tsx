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
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../../router/routes';
import classNames from 'classnames';


const ProductsComponent = () => {
    const classes = useProductsStyle();
    const [activeProduct, setActiveProduct] = useState('Available');  
    const { data } = useProducts(activeProduct);
    const navigate=useNavigate()

    const toggleSort = (sortType: string) => {
        setActiveProduct(sortType); 
        console.log(activeProduct)
    };
    const translate=useLocalization()
    const locale = useSelector((state: any) => state.locale);

  const currentLang = useMemo(() => {
    return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || "az";
  }, [locale]);

      const availableClass = classNames({
          [classes.activeSort]: activeProduct === 'Available',
          [classes.productsSort]: activeProduct !== 'Available'
      });
  
      const upcomingClass = classNames({
          [classes.activeSort]: activeProduct === 'Upcoming',
          [classes.productsSort]: activeProduct !== 'Upcoming'
      });
    return (
        <div className={classes.mainDiv}>
            <div className={classes.productsSortDiv}>
                <div 
                    onClick={() => toggleSort('Available')} 
                    className={availableClass}
                >
                    <IconamoonLightning1Fill1 activeProduct={activeProduct}/>
                    <span>{translate("available_products")}</span>
                </div>
                <div 
                    onClick={() => toggleSort('Upcoming')} 
                    className={upcomingClass}
                >
                    <MingcuteRocketFill activeProduct={activeProduct}/>
                    <span>{translate("upcoming")}</span>
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
                                </button>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div onClick={()=>navigate(Routes.service)} className={classes.moreDiv}>
                <p className={classes.more}>{translate("more")}</p> 
                <div className={classes.moreIcons}>
                    <Vuesax/>
                </div>
            </div>
        </div>
    );
};

export default ProductsComponent;
