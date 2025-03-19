import  { useMemo } from 'react';
import { useNewsCard } from './action/news.query';
import { useNavigate, useParams } from 'react-router-dom';
import { useNewsParamsStyles } from './newsParams.style';
import Exit from '../../assets/images/icons/exit';
import { Routes } from '../../router/routes';
import useLocalization from '../../assets/lang';
import { useSelector } from 'react-redux';
import {environment} from '../../core/configs/app.config'
import {ILang} from '../../assets/lang/lang'

const NewsParamsComoponent = () => {
    const {data}=useNewsCard()
    const {id}=useParams()
    const classes=useNewsParamsStyles()
    const navigate=useNavigate()

    const backFunc=()=>{
        navigate(Routes.news)
    }
    const locale = useSelector((state: any) => state.locale);

    const translate=useLocalization()

  const currentLang = useMemo(() => {
    return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || "az";
  }, [locale]);
    return (
        <div className={classes.mainDiv}>
            <div className={classes.backDiv}>
                <div onClick={backFunc} className={classes.backIcons}>
                    <Exit/>
                </div>
                <div className={classes.textDiv}>
                <p className={classes.text}>
                {translate("back")}
                </p>
                </div>
            </div>
            {data?.map((e:any)=>{
                if(e.id==id){
                    return <div className={classes.news}>
                        <h1 className={classes.header}>
                            {currentLang==="en"?e.header:e.headerAz}
                        </h1>
                        <p className={classes.tarix}>{e.tarix}</p>
                        <img className={classes.img} src={e.mainImg} alt="" />

                        <h3 className={classes.mainTexts}>
                            {currentLang==="en"?e.mainText:e.mainTextAz}
                        </h3>
                        {currentLang==="en"?e.texts.map((event:any)=>{
                            return <p className={classes.texts}>
                                {event}
                            </p>
                        }):e.textsAz.map((event:any)=>{
                            return <p className={classes.texts}>
                            {event}
                        </p>
                        })}
                    </div>
                }
            })}
        </div>
    );
}

export default NewsParamsComoponent;
