import { useState } from 'react';
import { useMainLoginStyles } from './main-login.style';
import LoginTop from '../../../assets/images/icons/loginTop';
import LoginBottom from '../../../assets/images/icons/loginBottom';
import SignInComponent from '../signIn/sign-in.component';
import useLocalization from '../../../assets/lang';
import SignUpComponent from '../signUp/sign-up.component';
import classNames from 'classnames';

const MainLoginComponent = () => {
    const classes=useMainLoginStyles()
    const translate=useLocalization()
    const [category,setCategory]=useState("signIn")

    const signInClass=classNames({
       [ classes.categoryName]:category==="signIn",
       [classes.noneCategorName]:category!=="signIn"
    })
    const signUpClass=classNames({
        [ classes.categoryName]:category==="signUp",
        [classes.noneCategorName]:category!=="signUp"
     })
    return (
        <div className={classes.mainDiv}>
            <div className={classes.loginDiv}>
               <div className={classes.loginTop}>
                <LoginTop/>
               </div>
               <div className={classes.loginBottom}>
                <LoginBottom/>
               </div>
                <div className={classes.mainCategory}>
                    <div className={classes.category}>
                        <h1 onClick={()=>setCategory("signIn")} className={signInClass}>{translate("singIn")}</h1>
                        <h1 onClick={()=>setCategory("signUp")} className={signUpClass}>{translate("signUp")}</h1>
                    </div>
                    <div className={classes.border}></div>
                </div>
              {category==="signIn"? <SignInComponent/>:<SignUpComponent/>}
            </div>
        </div>
    );
}

export default MainLoginComponent;
