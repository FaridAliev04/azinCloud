import  { useCallback, useMemo } from 'react';
import { useNewsCard } from './action/news.query';
import { useNavigate, useParams } from 'react-router-dom';
import { useNewsParamsStyles } from './news-params.style';
import Exit from '../../assets/images/icons/exit';
import { Routes } from '../../router/routes';
import useLocalization from '../../assets/lang';
import { useSelector } from 'react-redux';
import {environment} from '../../core/configs/app.config'
import {ILang} from '../../assets/lang/lang'

const NewsParamsComoponent = () => {
    const {id}=useParams()
    const {data}=useNewsCard(id)
    const classes=useNewsParamsStyles()
    const navigate=useNavigate()
console.log(data)
    const backFunc = useCallback(() => {
        navigate(Routes.news);
      }, [navigate]);
      
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
            <div  className={classes.news}>
                        <h1 className={classes.header}>
                            {currentLang==="en"?data?.header:data?.headerAz}
                        </h1>
                        <p className={classes.tarix}>{data?.time}</p>
                        <img className={classes.img} src={data?.mainImg ||undefined} alt="" />

                        <h3 className={classes.mainTexts}>
                            {currentLang==="en"?data?.mainText:data?.mainTextAz}
                        </h3>
                        {currentLang==="en"?(data?.texts || []).map((event:any,key:number)=>{
                            return <p key={key} className={classes.texts}>
                                {event}
                            </p>
                        }):(data?.textsAz||[]).map((event:any,keys:number)=>{
                            return <p key={keys} className={classes.texts}>
                            {event}
                        </p>
                        })}
                    </div>
                    
        </div>
    );
}

export default NewsParamsComoponent;
