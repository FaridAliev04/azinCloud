import Company from "../../../../assets/images/icons/company";
import { useAboutServiceStyle } from "./aboutService.style";
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
                       <h1 className={classes.iconsHeader}>{translate("Company_profile")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("profil_text")}
                    </p>
                    
                </div>
                <div className={classes.iconsMainDiv}>
                    <div className={classes.iconsDiv}>
                       <CompanyTarget/> 
                       <h1 className={classes.iconsHeader}>{translate("Our_Target")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("target_text")}
                    </p>
                    
                </div>
                <div className={classes.iconsMainDiv}>
                    <div className={classes.iconsDiv}>
                       <CompanySupport/> 
                       <h1 className={classes.iconsHeader}>{translate("Special_Support")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("support_text")}
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
                       <h1 className={classes.iconsHeader}>{translate("Market_Advantages")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("market_text")}
                    </p>
                    
                </div>
                <div className={classes.iconsMainDiv}>
                    <div className={classes.iconsDiv}>
                       <CompanyTechnology/> 
                       <h1 className={classes.iconsHeader}>{translate("Technology_Advantages")}</h1>
                    </div>
                    <p className={classes.iconsText}>
                    {translate("Technology_text")}
                    </p>
                    
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default AboutServiceComponent;
