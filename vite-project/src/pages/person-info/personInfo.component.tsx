import PersonComopent from './components/person/person.comopent';
import EmailChangeComponent from './components/email-change/email-change.component';
import { usePersonInfoStyle } from './personInfo.style';

const PersonInfoComponent = () => {
    const classes=usePersonInfoStyle()
    return (
        <div className={classes.mainDiv}>
            <PersonComopent/>
            <EmailChangeComponent />
        </div>
    );
}

export default PersonInfoComponent;
