import React, { useMemo, useState } from 'react';
import { useMainService } from './action/mainService.query';
import IconamoonLightning1Fill1 from '../../../../assets/images/icons/iconamoon_lightning-1-fill (1)';
import MingcuteRocketFill from '../../../../assets/images/icons/mingcute_rocket-fill';
import { useMainServiceStyle } from './mainService.style';
import Group34502 from '../../../../assets/images/icons/Group 34502';
import { useSelector } from 'react-redux';
import useLocalization from '../../../../assets/lang';
import {environment} from '../../../../core/configs/app.config'
import {ILang} from '../../../../assets/lang/lang'
const MainServiceComponent = () => {
       
        const [activeProduct, setActiveProduct] = useState('Available'); 
        const classes=useMainServiceStyle()
        const { data } = useMainService(activeProduct);

       const toggleSort = (sortType: string) => {
        setActiveProduct(sortType); 
        console.log(activeProduct)
    };

    const locale = useSelector((state: any) => state.locale);

    const translate=useLocalization()

  const currentLang = useMemo(() => {
    return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || "az";
  }, [locale]);

    return (
        <div className={classes.mainDiv}>
            <div className={classes.mainServiceDiv}>
                <h1 className={classes.header}>
                    {translate("Products_and_services")}
                </h1>
                <div className={classes.productsSortDiv}>
                <div 
                    onClick={() => toggleSort('Available')} 
                    className={activeProduct === 'Available' ? classes.activeSort : classes.productsSort}
                >
                    <IconamoonLightning1Fill1 activeProduct={activeProduct}/>
                    <span className={classes.span}>{translate("Available_products")}</span>
                </div>
                <div 
                    onClick={() => toggleSort('Upcoming')} 
                    className={activeProduct === 'Upcoming' ? classes.activeSort : classes.productsSort}
                >
                    <MingcuteRocketFill activeProduct={activeProduct}/>
                    <span className={classes.span}>{translate("Upcoming")}</span>
                </div>
            </div>
            </div>

            <div className={classes.serviceDiv}>
                {
                    data?.map((e: any) => (
                        <div key={e.id} className={classes.service}>
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
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default MainServiceComponent;
