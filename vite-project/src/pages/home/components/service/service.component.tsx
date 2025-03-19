import React from 'react';
import { useServiceStyle } from './service.style';
import   MissinIcons  from '../../../../assets/images/icons/MissinIcons';
import GoalsIcons  from '../../../../assets/images/icons/GoalsIcons';
import VisionIcon  from '../../../../assets/images/icons/VisionIcon';
import ValuesIcon  from '../../../../assets/images/icons/ValuesIcons';
import ValuesIcons from '../../../../assets/images/icons/ValuesIcons';
import classNames from "classnames";
import { delay, motion } from "framer-motion";
import useLocalization from '../../../../assets/lang';

const ServiceComponent = () => {
    const classes = useServiceStyle();
    const translete=useLocalization()
    return (
        <div className={classes.serviceMainDiv}>
            <div className={classes.textsDiv}>
                <h1 className={classes.serviceHeader}>{translete("service_header")}</h1>
                <p className={classes.serviceText}>
                {translete("service_text")}
                </p>
            </div>
            <div className={classes.cardsContainer}>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }} 
                initial={{ x: -90, opacity: 0 }}
                transition={{  ease: "easeIn" }}
                whileInViewOnce={true}  
            >
                <div className={classes.card}>
                    <div  className={classes.iconContainer}>
                        <div>
                          <MissinIcons/>  
                        </div>
                        <div>
                            <h3 className={classes.cardHeader}>
                            {translete("Mission")}
                            </h3>
                        </div>
                    </div>
                    <p className={classes.cardText}>
                    {translete("mission_text")}

                    </p>
                    <div className={classes.cardEffect}></div>

                </div>
            </motion.div>
                
            <motion.div
                whileInView={{ x: 0, opacity: 1 }} 
                initial={{ x: -90, opacity: 0 }}
                transition={{ ease: "easeIn" ,delay:1}}
                whileInViewOnce={true}  
            >
                <div  className={classNames(classes.card, classes.marginTopCart2)}>
                    <div  className={classes.iconContainer}>
                        <div>
                          <GoalsIcons/>  
                        </div>
                        <div>
                            <h3 className={classes.cardHeader}>
                            {translete("Goals")}
                            </h3>
                        </div>
                    </div>
                    <p className={classes.cardText}>
                    {translete("mission_text")}
                    </p>
                    <div className={classes.cardEffect}></div>
                </div>
            </motion.div>
            
            <motion.div
                whileInView={{ x: 0, opacity: 1 }} 
                initial={{ x: -80, opacity: 0 }}
                transition={{  ease: "easeIn",delay:2 }}
                whileInViewOnce={true}  
            >
                <div className={classNames(classes.card, classes.marginTopCart3)}>
                    <div  className={classes.iconContainer}>
                        <div>
                          <VisionIcon/>  
                        </div>
                        <div>
                            <h3 className={classes.cardHeader}>
                            {translete("Vision")}
                            
                            </h3>
                        </div>
                    </div>
                    <p className={classes.cardText}>
                    {translete("mission_text")}
                    </p>
                    <div className={classes.cardEffect}></div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ x: 0, opacity: 1 }} 
                initial={{ x: -70, opacity: 0 }}
                transition={{  ease: "easeIn" , delay:3}}
                whileInViewOnce={true}  
            >
            <div className={classNames(classes.card, classes.marginTopCart4)}>
                    <div className={classes.iconContainer}>
                        <div>
                          <ValuesIcons/>  
                        </div>
                        <div>
                            <h3 className={classes.cardHeader}>
                            {translete("Values")}
                            </h3>
                        </div>
                    </div>
                    <p className={classes.cardText}>
                    {translete("mission_text")}
                    </p>
                    <div className={classes.cardEffect}></div>
                </div>
            </motion.div>
            </div>
        </div>
    );
}

export default ServiceComponent;
