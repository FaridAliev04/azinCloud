import {createUseStyles} from 'react-jss';
import sizes from '../../assets/styles/abstracts/sizes';

const styles = {
    mainDiv:{
        marginTop:sizes.marginTop
    }
};

export const useAboutStyle = createUseStyles(styles);