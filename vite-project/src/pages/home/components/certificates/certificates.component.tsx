import iso from '../../../../assets/images/statics/iso.png'
import iso2000 from '../../../../assets/images/statics/iso2000.png'
import tier from '../../../../assets/images/statics/tier.png'
import tierSample from '../../../../assets/images/statics/tierSample.png'
import netty from '../../../../assets/images/statics/netty.png'
import { useCertificatesStyle } from './certificates.style'
import useLocalization from '../../../../assets/lang'

const CertificatesComponent = () => {
    const img=[iso,tier, iso2000,tierSample,netty]
    const classes=useCertificatesStyle()
    const translate=useLocalization()
    return (
        <div className={classes.mainDiv}>

                <h1 className={classes.certificateHeader}>
                    {translate("certificates_header")}
                </h1>

            <div className={classes.imgDiv}>
                {
                    img.map((e:any,key:number)=>{
                        return <div className={classes.imgMainDiv}>
                            <img className={classes.img} key={key} src={e} />
                        </div>
                    })
                }

            </div>
        </div>
    );
}

export default CertificatesComponent;
