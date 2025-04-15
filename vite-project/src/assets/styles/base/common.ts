
import fonts from '../abstracts/fonts';
import sizes from '../abstracts/sizes';

const commonStyles = {
    '@global': {
        html: {
            fontSize: sizes.base,
        },
        body: {
            margin: 0,
            fontFamily: `${fonts.font}`
        },
        img: {maxWidth: '100%',},
        ul: {listStyleType: 'none', padding: 0, margin: 0,},
        ".swiper-vertical":{height:"20rem"}
    },
};

export default commonStyles;