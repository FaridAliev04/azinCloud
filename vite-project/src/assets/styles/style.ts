import {createUseStyles} from 'react-jss';
import typography from './base/typography';

const useGlobalStyles = createUseStyles({
    ...typography,
});

export default useGlobalStyles;
