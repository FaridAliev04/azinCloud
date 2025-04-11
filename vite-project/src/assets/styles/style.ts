import {createUseStyles} from 'react-jss';
import typography from './base/typography';
import commonStyles from './base/common';

const useGlobalStyles = createUseStyles({
    ...typography,
    ...commonStyles
});

export default useGlobalStyles;
