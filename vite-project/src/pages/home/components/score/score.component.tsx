import Goverment from "../../../../assets/images/icons/goverment";
import Private from "../../../../assets/images/icons/private";
import Project from "../../../../assets/images/icons/project";
import Team from "../../../../assets/images/icons/team";
import useLocalization from "../../../../assets/lang";
import { useScoreStyle } from "./score.style";
import { motion } from "framer-motion";

const ScoreComponent = () => {
    const classes = useScoreStyle();
    const translate = useLocalization();

    return (
        <div className={classes.mainDiv}>
            <div className={classes.scoreCard}>
                <motion.div
                    key={Math.random()}
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                >
                    <Team />
                </motion.div>
                <motion.p 
                    className={classes.valueText} 
                    initial={{ opacity: 0, y: 80 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                >
                    {translate("Our_team")}
                </motion.p>
                <motion.h1 
                    className={classes.score} 
                    initial={{ opacity: 0, y: 80 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    + 420
                </motion.h1>
            </div>
            <div className={classes.border}></div>
            <div className={classes.scoreCard}>
                <motion.div
                    key={Math.random()}
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                >
                    <Project />
                </motion.div>
                <motion.p 
                    className={classes.valueText} 
                    initial={{ opacity: 0, y: 80 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                >
                    {translate("Our_project")}
                </motion.p>
                <motion.h1 
                    className={classes.score} 
                    initial={{ opacity: 0, y: 80 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    + 130
                </motion.h1>
            </div>
            <div className={classes.border}></div>
            <div className={classes.scoreCard}>
                <motion.div
                    key={Math.random()}
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                >
                    <Private />
                </motion.div>
                <motion.p 
                    className={classes.valueText} 
                    initial={{ opacity: 0, y: 80 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                >
                    {translate("Private_customers")}
                </motion.p>
                <motion.h1 
                    className={classes.score} 
                    initial={{ opacity: 0, y: 80 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    91
                </motion.h1>
            </div>
            <div className={classes.border}></div>
            <div className={classes.scoreCard}>
                <motion.div
                    key={Math.random()}
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                >
                    <Goverment />
                </motion.div>
                <motion.p 
                    className={classes.valueText} 
                    initial={{ opacity: 0, y: 80 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                >
                    {translate("Government_customers")}
                </motion.p>
                <motion.h1 
                    className={classes.score} 
                    initial={{ opacity: 0, y: 80 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    70
                </motion.h1>
            </div>
        </div>
    );
};

export default ScoreComponent;


