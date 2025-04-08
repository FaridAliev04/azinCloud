import { useWriteUsStyle } from './write-us.style';
import useLocalization from '../../../../assets/lang';
import ContactSVG from '../../../../assets/images/icons/contactSVG';
import ContactMesaj from '../../../../assets/images/icons/contactMesaj';

const WriteUsComponent = () => {
    const classes=useWriteUsStyle()
    const translate=useLocalization()
    return (
        <div className={classes.mainDiv}>
            <div className={classes.inpDiv}>
                <h1 className={classes.header}>{translate("write_us")}</h1>
                <div className={classes.includeInp}>
                    <input placeholder={translate("name")} className={classes.inpt} type="text" />
                    <input placeholder={translate("surname")} className={classes.inpt} type="text"  />
                </div>
                <input placeholder={translate("email")} className={classes.inptMedium} type="text"/>
                <input placeholder={translate("number")} className={classes.inptMedium} type="number" />
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
