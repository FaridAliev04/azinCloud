import {createUseStyles} from 'react-jss';
import sizes from '../../../assets/styles/abstracts/sizes';
import colors from '../../../assets/styles/abstracts/color';

const styles = {
    main:{
        display:"flex"
    },
    headerDiv:{
        display:"flex",
        justifyContent: "space-between"
    },
    btn:{
        border: "none",
        background: "none",
        transform:" rotate(90deg)"
    },
    img:{
        width:"22.75rem",
        borderRadius:sizes.borderRadius
    },
    card: {
        width: "384px",
        height: "390px",
        background: colors.newsCardBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        borderRadius:sizes.borderRadius
    }
};

export const useNewsCardStyle = createUseStyles(styles);