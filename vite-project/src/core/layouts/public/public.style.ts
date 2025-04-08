import {createUseStyles} from 'react-jss';
import sizes from '../../../assets/styles/abstracts/sizes';


const styles = {
    componentDiv:{
        width:'80%',
        margin:sizes.marginAuto
    },
    mainDiv:{
        width:"100%"
    }
};

export const usePublicStyle = createUseStyles(styles);
