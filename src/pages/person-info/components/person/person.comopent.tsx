import useLocalization from "../../../../assets/lang";
import { usePostsUser } from "./action/person.query";
import { personD } from "./person";
import { usePersonStyle } from "./person.style";

const PersonComopent = () => {
    const classes=usePersonStyle()
    const translate=useLocalization()
    const email=localStorage.getItem("email")
    const {data}=usePostsUser(email)


    return (
        <div className={classes.mainDiv}>
            <h1 className={classes.header}>{translate("personal_informations")}</h1>
                {
                    data?.map((e:personD , key:number)=>{
                        return <div key={key} className={classes.personCard}>
                                <div className={classes.personDiv}>
                                    <h1 className={classes.labelName}>{translate("surName")}</h1>
                                    <p className={classes.personInfo}>{e.name} {e.surname}</p>
                                </div>
                                <div className={classes.personDiv}>
                                    <h1 className={classes.labelName}>{translate("address_person")}</h1>
                                    <p className={classes.personInfo}>{e.address}</p>
                                </div>
                                <div className={classes.personDiv}>
                                    <h1 className={classes.labelName}>{translate("country_person")}</h1>
                                    <p className={classes.personInfo}>{e.country}</p>
                                </div>
                                <div className={classes.personDiv}>
                                    <h1 className={classes.labelName}>{translate("city_person")}</h1>
                                    <p className={classes.personInfo}>{e.city}</p>
                                </div>
                                <div className={classes.personDiv}> 
                                    <h1 className={classes.labelName}>{translate("email_person")}</h1>
                                    <p className={classes.personInfo}>{e.email}</p>
                                </div>
                            </div>
                    })
                }
              
        </div>
    );
}

export default PersonComopent;
