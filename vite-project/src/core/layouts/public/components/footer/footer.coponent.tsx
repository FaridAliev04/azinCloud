import React from 'react';
import { useFooterStyle } from './footer.style';
import insta from '../../../../../assets/images/statics/inst.png'
import tg from '../../../../../assets/images/statics/tg.png'
import yt from '../../../../../assets/images/statics/yt.png'
import User from '../../../../../assets/images/icons/user';
import Call from '../../../../../assets/images/icons/call';
import Message from '../../../../../assets/images/icons/message';
import Location from '../../../../../assets/images/icons/location';
import useLocalization from '../../../../../assets/lang';
const FooterCoponent = () => {
    const classes=useFooterStyle()
    const translate=useLocalization()

    return (
        <div className={classes.mainDiv}>
            <footer className={classes.footer}>
                <div className={classes.headerDiv}>
                    <h1 className={classes.header}>
                       {translate("footer_header")}
                    </h1>
                    <div className={classes.inpSoialDiv}>
                        <div className={classes.inpDiv}>
                            <input placeholder={translate("inp_placeholder")} className={classes.inp} type="text" name="" id="" />
                            <button className={classes.btn}>{translate("Subscribe")}</button>
                        </div>
                    </div>
                </div>

                <div className={classes.sosialIconsDiv}>
                            <div>
                                <img src={insta} alt="" />
                            </div>
                            <div>
                            <img src={tg} alt="" />
                            </div>
                            <div>
                               <img src={yt} alt="" /> 
                            </div>
                            
                </div>
                <div className={classes.border}></div>
                <div className={classes.infoMainDiv}>
                    <div className={classes.infoDiv}>
                        <User/>
                        <p>
                            157
                        </p>
                    </div>
                    <div className={classes.infoDiv}>
                        <Call/>
                        <p>
                            +994 12 200 00 20
                        </p>
                    </div>
                    <div className={classes.infoDiv}>
                        <Message/>
                        <p>
                        info@azincloud.az
                        </p>
                    </div>
                    <div className={classes.infoDiv}>
                        <Location/>
                        <p className={classes.info}>
                           {translate("unvan")}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterCoponent;
