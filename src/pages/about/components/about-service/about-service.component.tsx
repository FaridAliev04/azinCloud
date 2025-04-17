import Company from "../../../../assets/images/icons/company";
import { useAboutServiceStyle } from "./about-service.style";
import componyImg from '../../../../assets/images/statics/Rectangle 89.png'
import componyImgSecomd from '../../../../assets/images/statics/Rectangle 88.png'
import CompanyTarget from "../../../../assets/images/icons/companyTarget";
import CompanySupport from "../../../../assets/images/icons/companySupport";
import CompamyMarket from "../../../../assets/images/icons/compamyMarket";
import CompanyTechnology from "../../../../assets/images/icons/companyTechnology";
import useLocalization from "../../../../assets/lang";

const AboutServiceComponent = () => {
    const classes=useAboutServiceStyle()
    const translate=useLocalization()
    
    return (
    <div className={classes.container}>
        <div className={classes.mainDiv}> 
            <div className={classes.textsDiv}>
                <h1 className={classes.header}>
                {translate("service_header")}
                </h1>
                <p className={classes.text}>
                {translate("aboutUs_text")}
                </p>
            </div>
            <div className={classes.companyDiv}>
                <div className={classes.companyMainDiv}>
                <div className={classes.iconsMainDiv}>
                    <div className={classes.iconsDiv}>
                       <Company/> 
                       <h1 className={classes.iconsHeader}>{translate("about_company_profile")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("about_profil_text")}
                    </p>
                    
                </div>
                <div className={classes.iconsMainDiv}>
                    <div className={classes.iconsDiv}>
                       <CompanyTarget/> 
                       <h1 className={classes.iconsHeader}>{translate("about_us_our_target")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("about_target_text")}
                    </p>
                    
                </div>
                <div className={classes.iconsMainDiv}>
                    <div className={classes.iconsDiv}>
                       <CompanySupport/> 
                       <h1 className={classes.iconsHeader}>{translate("about_us_special_support")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("about_support_text")}
                    </p>
                    
                </div>
                
                </div>
                <img src={componyImg} alt="" />
            </div>
            <div className={classes.companyDiv}>
            <img src={componyImgSecomd} alt="" />
                <div className={classes.companyMainDiv}>
                <div className={classes.iconsMainDiv}>
                    <div className={classes.iconsDiv}>
                       <CompamyMarket/> 
                       <h1 className={classes.iconsHeader}>{translate("about_us_market_advantages")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("about_market_text")}
                    </p>
                    
                </div>
                <div className={classes.iconsMainDiv}>
                    <div className={classes.iconsDiv}>
                       <CompanyTechnology/> 
                       <h1 className={classes.iconsHeader}>{translate("about_us_technology_advantages")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("about_technology_text")}
                    </p>
                    
                </div>
                
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutServiceComponent;
