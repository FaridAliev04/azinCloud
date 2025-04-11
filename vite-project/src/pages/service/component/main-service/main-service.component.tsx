import  { useCallback, useMemo, useState } from 'react';
import { useMainService } from './action/main-service.query';
import IconamoonLightning1Fill1 from '../../../../assets/images/icons/iconamoon_lightning-1-fill (1)';
import MingcuteRocketFill from '../../../../assets/images/icons/mingcute_rocket-fill';
import { useMainServiceStyle } from './main-service.style';
import Group34502 from '../../../../assets/images/icons/Group 34502';
import { useSelector } from 'react-redux';
import useLocalization from '../../../../assets/lang';
import {environment} from '../../../../core/configs/app.config'
import {ILang} from '../../../../assets/lang/lang'
import classNames from 'classnames';

const MainServiceComponent = () => {
        const [activeProduct, setActiveProduct] = useState('Available'); 
        const classes=useMainServiceStyle()
        const { data } = useMainService(activeProduct);

       const toggleSort = useCallback((sortType: string) => {
        setActiveProduct(sortType); 
    },[activeProduct]);

    const locale = useSelector((state: any) => state.locale);

    const translate=useLocalization()

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
            <div className={classes.mainServiceDiv}>
                <h1 className={classes.header}>
                    {translate("nav_products_and_services")}
                </h1>
                <div className={classes.productsSortDiv}>
                <div 
                    onClick={() => toggleSort('Available')} 
                    className={availableClass}
                >
                    <IconamoonLightning1Fill1 activeProduct={activeProduct}/>
                    <span className={classes.span}>{translate("available_products")}</span>
                </div>
                <div 
                    onClick={() => toggleSort('Upcoming')} 
                    className={upcomingClass}
                >
                    <MingcuteRocketFill activeProduct={activeProduct}/>
                    <span className={classes.span}>{translate("upcoming")}</span>
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
                                    <span className={classes.span}>{e.pul}</span>
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
