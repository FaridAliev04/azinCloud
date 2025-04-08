import { useCallback, useMemo, useState } from 'react';
import { useNewsCard } from './action/news-card.query';
import { useNewsCardStyle } from './news-card.style';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useLocalization from '../../../assets/lang';
import {environment} from '../../../core/configs/app.config'
import {ILang} from "../../../assets/lang/lang"
const NewsCardsComponent = () => {
        const { data }=useNewsCard()
        const classes=useNewsCardStyle() 
        const navigate=useNavigate()
        const [id,setId]=useState<number | undefined>()
         
        const idFunc = useCallback((e: number) => {
            setId(e);
            navigate(`/news/${e}`);
          }, [navigate]);
        const locale = useSelector((state: any) => state.locale);

        const translate=useLocalization()
    
      const currentLang = useMemo(() => {
        return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || "az";
      }, [locale]);
    return (
        <div  className={classes.mainDiv}>
            <div>
                <h1 className={classes.newsHeader}>
                    {translate("nav_news_and_blog")}
                </h1>
            </div>
            <div className={classes.cardContainer}>

                    {
                       data?.map((e:any,key:number)=>{
                           return <div key={key} onClick={()=>idFunc(e.id)} className={classes.card}>
                           <div className={classes.imgDiv}>
                               <img className={classes.img} src={e.mainImg} alt={e.header} />
                           </div>
                           <div className={classes.texts}>
                               <h1 className={classes.textsHeader}>{currentLang==="en"?e.header:e.headerAz}</h1>
                               <p className={classes.textsText}>{currentLang==="en"?e.mainText:e.mainTextAz}</p>
                               <span className={classes.textDate}>{e.tarix}</span>
                           </div>

                       </div>
                       })
                    }

            </div>
        </div>
    );
}

export default NewsCardsComponent;
