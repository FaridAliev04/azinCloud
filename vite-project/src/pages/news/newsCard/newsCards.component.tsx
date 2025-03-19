import { useMemo, useState } from 'react';
import { useNewsCard } from './action/newsCard.query';
import { useNewsCardStyle } from './newsCard.style';
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
         
        const idFunc=(e:number)=>{
            setId(e)
            navigate(`/news/${e}`)
        }
        const locale = useSelector((state: any) => state.locale);

        const translate=useLocalization()
    
      const currentLang = useMemo(() => {
        return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || "az";
      }, [locale]);
    return (
        <div  className={classes.mainDiv}>
            <div>
                <h1 className={classes.newsHeader}>
                    {translate("News_and_blog")}
                </h1>
            </div>
            <div className={classes.cardContainer}>

                    {
                       data?.map((e:any)=>{
                           return <div onClick={()=>idFunc(e.id)} className={classes.card}>
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
