import React from 'react';
import Azercell from '../../../../assets/images/icons/azercell';
import AzTv from '../../../../assets/images/icons/azTv';
import ElektronHokumet from '../../../../assets/images/icons/elektronHokumet';
import Gencler from '../../../../assets/images/icons/gencler';
import Mida from '../../../../assets/images/icons/mida';
import TemizSeher from '../../../../assets/images/icons/temizSeher';
import { useSectorStyle } from './sector.style';
import useLocalization from '../../../../assets/lang';

const SectorComponent = () => {
    const classes=useSectorStyle()
    const translate=useLocalization()

    return (
        <div className={classes.sectorMainDiv}>
            <h1 className={classes.sectorHeader}>
                {translate("sector_header")}
            </h1>
            <div className={classes.sectorDiv}>
                <div className={classes.sectorLogoDiv}>
                <Azercell/>
                </div>
                <div className={classes.border}></div>
                <div className={classes.sectorLogoDiv}> 
                    <AzTv/>
                </div>
                <div className={classes.border}></div>
                <div className={classes.sectorLogoDiv}>
                   <ElektronHokumet/> 
                </div>
                <div className={classes.border}></div>
                <div className={classes.sectorLogoDiv}>
                    <Gencler/>
                </div>
                <div className={classes.border}></div>
                <div className={classes.sectorLogoDiv}>
                    <Mida/>
                </div>
                <div className={classes.border}></div>
                <div className={classes.sectorLogoDiv}>
                    <TemizSeher/>
                </div>
                
            </div>
        </div>
    );
}

export default SectorComponent;
