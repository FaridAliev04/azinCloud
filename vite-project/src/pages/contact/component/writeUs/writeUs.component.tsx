import React from 'react';
import { useWriteUsStyle } from './writeUs.style';
import useLocalization from '../../../../assets/lang';
import ContactSVG from '../../../../assets/images/icons/contactSVG';
import ContactMesaj from '../../../../assets/images/icons/contactMesaj';

const WriteUsComponent = () => {
    const classes=useWriteUsStyle()
    const translate=useLocalization()
    return (
        <div className={classes.mainDiv}>
            <div className={classes.inpDiv}>
                <h1 className={classes.header}>{translate("Write_us")}</h1>
                <div className={classes.includeInp}>
                    <input placeholder={translate("inpFirst")} className={classes.inpt} type="text" />
                    <input placeholder={translate("inptSecond")} className={classes.inpt} type="text"  />
                </div>
                <input placeholder={translate("inpEmail")} className={classes.inptMedium} type="text"/>
                <input placeholder={translate("inpNumber")} className={classes.inptMedium} type="number" />
                <input  className={classes.inpLarge} type="text" />
                <button className={classes.btn}>{translate("send")}</button>
                <div className={classes.svgDiv}>
                    <div>
                        <ContactSVG/>
                    </div>
                    <div className={classes.mesajSvg}>
                        <ContactMesaj/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WriteUsComponent;
