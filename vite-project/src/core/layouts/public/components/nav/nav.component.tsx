import { NavLink, useNavigate } from "react-router-dom";
import logoAzinCloud from "../../../../../assets/images/icons/Group.svg";
import search from "../../../../../assets/images/icons/search-normal.svg";
import { useNavStyle } from "./nav.style";
import { Select } from "antd";
import { Routes } from "../../../../../router/routes";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "../../../../../store/store.config";
import { environment } from "../../../../configs/app.config";
import { useCallback, useEffect, useMemo, useState } from "react";
import { setLocale } from "../../../../../store/store.reducer";
import { ILang } from "../../../../../assets/lang/lang";
import useLocalization from "../../../../../assets/lang";
import Logout from "../../../../../assets/images/icons/logout";
import Down from "../../../../../assets/images/icons/down";

const NavComponent = () => {
  const classes = useNavStyle();
  const dispatch = useDispatch();
  const languages = useStore('language');
  const locale = useSelector((state: any) => state.locale);
  const navigate=useNavigate()
  const [profil,setProfil]=useState(false)

    const translate=useLocalization()

  const currentLang = useMemo(() => {
    return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || "az";
  }, [locale]);

  const profilWatch=()=>{
    if(profil===true){
      setProfil(false)
    }else{
      setProfil(true)
    }
  }

  const btnFunc=()=>{
    if(!localStorage.getItem(`${environment.applicationName}-token`)){
      navigate(Routes.login)
    }

    profilWatch()
  }

  const logOut=()=>{
    localStorage.removeItem("ad")
    localStorage.removeItem(`${environment.applicationName}-token`)
    localStorage.removeItem("email")
    navigate('/')
    window.location.reload();
  }

  const profilNone=useCallback(()=>{
    setProfil(false)
  },[profil])

  useEffect(() => {
    dispatch(setLocale(currentLang));
  }, [currentLang, dispatch]);


  return (
    <nav className={classes.nav}>
      <div onClick={()=>profilNone()} className={profil?classes.noneDivActive:""}></div>
      <div className={classes.mainDiv}>  
        <div>
          <NavLink to={Routes.default}>
            <img src={logoAzinCloud} alt="AzinCloud logo" />
          </NavLink>
        </div>
        <div className={classes.includeDiv}>
          <ul className={classes.listNav}>
            <li>
              <NavLink to={Routes.about} className={classes.listLink}>
               {translate("nav_about_us")}
              </NavLink>
            </li>
            <li>
              <NavLink to={Routes.service} className={classes.listLink}>
              {translate("nav_products_and_services")}
                
              </NavLink>
            </li>
            <li>
              <NavLink to={Routes.news} className={classes.listLink}>
              {translate("nav_news_and_blog")}
                
              </NavLink>
            </li>
            <li>
              <NavLink to={Routes.contact}  className={classes.listLink}>
              {translate("nav_contact")}
              </NavLink>
            </li>
          </ul>
          <div className={classes.serarchIconDiv}>
            <img src={search} alt="Search" />
          </div>
          <div className={classes.selectDiv}>
            <Select
              defaultValue={currentLang}
              style={{ width: 70 }}
              options={languages.map((lang: any) => ({
                value: lang.key,
                label: lang.value,
              }))}
              onChange={(value:any) => dispatch(setLocale(value))}
              suffixIcon={null}
            />
          </div>
          <div className={classes.btnDiv} >
          <button onClick={() => btnFunc()} 
              className={localStorage.getItem(`${environment.applicationName}-token`) === "token" 
                  ? classes.profilBtn 
                  : classes.navBtn}>
              <div className={classes.nameDiv}>
                  {localStorage.getItem(`${environment.applicationName}-token`) === "token"
                      ? <>
                      <span className={classes.nameSpan}>
                         {localStorage.getItem("ad")} 
                      </span>
                         <div className={classes.downIcons}><Down/></div>
                        </>
                      : translate("nav_login")}
              </div>
          </button>


           {localStorage.getItem(`${environment.applicationName}-token`)==="token"?profil===true? <div className={classes.profilDiv}>
              <p onClick={()=>navigate(Routes.personInfo)} className={classes.personInfo}>{translate("personal_informations")}</p>
              <div className={classes.exitDiv}>
                <p onClick={()=>logOut()} className={classes.exitText}>{translate("exit")}</p>
                <div onClick={()=>logOut()} className={classes.logout}>
                  <Logout/>
                </div>
                
              </div>
            </div>:"":""}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
