import {createUseStyles} from 'react-jss';
import sizes from '../../assets/styles/abstracts/sizes';


const styles = {
    mainDiv:{
        width:"80%",
        margin:sizes.marginAuto
    }
}

export const usePersonInfoStyle = createUseStyles(styles);