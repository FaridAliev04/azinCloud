import { motion } from "framer-motion";
import AboutUsSvgComponent from "../../../../core/shared/aboutUsSvg/aboutUsSvg.component";
import Cpu from "../../../../assets/images/icons/cpu";
import { useAboutUsStyle } from "./abou-us.style";
import { useNavigate } from "react-router-dom";
import useLocalization from "../../../../assets/lang";

const AboutUsComponent = () => {
    const classes = useAboutUsStyle();
    const navigate=useNavigate()
    const traslate=useLocalization()

    return (
        <div className={classes.aboutMain}>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }} 
                initial={{ x: -100, opacity: 0 }}
                transition={{  ease: "easeIn" }}
                whileInViewOnce={true}  
            >
                <AboutUsSvgComponent />
            </motion.div>

            <div className={classes.texts}>
                <motion.div
                    whileInView={{ x: 0, opacity: 1 }} 
                    initial={{ x: 100, opacity: 0 }} 
                    transition={{  ease: "easeIn", delay: 0.3 }} 
                    whileInViewOnce={true}  
                    className={classes.textsAnimationDiv}
                >
                    <h1 className={classes.textsHeader}>{traslate("about_us")}</h1>
                    <p className={classes.text}>
                    {traslate("about_text")}
                    </p>
                </motion.div>

                <motion.div
                    className={classes.logoInculdeDiv}
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                    whileInViewOnce={true}  
                >
                    <div className={classes.logosDiv}>
                        <div className={classes.logoInculdeDiv}>
                            <Cpu />
                            <p className={classes.logoInculdeHeader}>{traslate("about_us_special_support")}</p>
                        </div>
                        <div className={classes.border}></div>
                        <div className={classes.logoInculdeDiv}>
                            <Cpu />
                            <p className={classes.logoInculdeHeader}>{traslate("about_us_our_target")}</p>
                        </div>
                        <div className={classes.border}></div>
                        <div className={classes.logoInculdeDiv}>
                            <Cpu />
                            <p className={classes.logoInculdeHeader}>{traslate("about_us_market_advantages")}</p>
                        </div>
                        <div className={classes.border}></div>
                        <div className={classes.logoInculdeDiv}>
                            <Cpu />
                            <p className={classes.logoInculdeHeader}>{traslate("about_us_technology_advantages")}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={classes.logoInculdeDiv}
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                    whileInViewOnce={true}  
                >
                    <div>
                        <button onClick={()=>navigate('/about')}  className={classes.btn}>
                            {traslate("more")}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUsComponent;
