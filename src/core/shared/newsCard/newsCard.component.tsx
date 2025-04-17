import { useNewsCardStyle } from './newsCard.style';
import { useNewsCard } from './action/newsCard.query';

const NewsCardComponent = () => {
    const classes=useNewsCardStyle() 
    const { data }=useNewsCard()
    return (
        <div className={classes.main}>
            {
                data?.map((e:any)=>{
                    return <div className={classes.card}>
                        <div>
                            <img className={classes.img} src={e.mainImg} alt="" />
                        </div>

                            <h1>
                                {e.header}
                            </h1>
                            <p>
                                {e.mainText}
                            </p>
                            <div>
                                <span>
                                {e.tarix}
                            </span>
                            </div>
                            

                    </div>
                })
            }

        </div>
    );
}

export default NewsCardComponent;
