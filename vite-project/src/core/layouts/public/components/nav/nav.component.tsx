import { NavLink } from "react-router-dom";
import logoAzinCloud from "../../../../../assets/images/icons/Group.svg";
import search from "../../../../../assets/images/icons/search-normal.svg";
import { useNavStyle } from "./nav.style";
import { Select } from "antd";
import { Routes } from "../../../../../router/routes";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "../../../../../store/store.config";
import { environment } from "../../../../configs/app.config";
import { useEffect, useMemo } from "react";
import { setLocale } from "../../../../../store/store.reducer";
import { ILang } from "../../../../../assets/lang/lang";
import useLocalization from "../../../../../assets/lang";

const NavComponent = () => {
  const classes = useNavStyle();
  const dispatch = useDispatch();
  const languages = useStore('language');
  const locale = useSelector((state: any) => state.locale);

    const translate=useLocalization()

  const currentLang = useMemo(() => {
    return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || "az";
  }, [locale]);

  useEffect(() => {
    dispatch(setLocale(currentLang));
  }, [currentLang, dispatch]);

  return (
    <nav className={classes.nav}>
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
               {translate("About_us")}
              </NavLink>
            </li>
            <li>
              <NavLink to={Routes.service} className={classes.listLink}>
              {translate("Products_and_services")}
                
              </NavLink>
            </li>
            <li>
              <NavLink to={Routes.news} className={classes.listLink}>
              {translate("News_and_blog")}
                
              </NavLink>
            </li>
            <li>
              <NavLink to={Routes.contact}  className={classes.listLink}>
              {translate("Contact")}
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
          <div>
            <button className={classes.navBtn}> {translate("Login")}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
