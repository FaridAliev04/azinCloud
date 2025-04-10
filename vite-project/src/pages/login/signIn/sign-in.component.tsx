import { Form, Input } from "antd";
import useLocalization from "../../../assets/lang";
import { useSignInStyles } from "./sign-in.style";
import { useSignIn } from "./action/sign-in.query";
import { environment } from "../../../core/configs/app.config";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const SignInComponent = () => {
    const classes = useSignInStyles();
    const translate = useLocalization();
    const { data } = useSignIn(); 
    console.log(data);
    const navigate = useNavigate();

    const onFinish = useCallback((values: { email: string; password: string }) => {
        if (data) {
            const user = data.find(
                (user: any) =>
                    user.email === values.email && user.password === values.password
            );
    
            if (user) {
                localStorage.setItem("email", user.email);
                localStorage.setItem("ad", `${user.name} ${user.surname}`);
                localStorage.setItem("id", user.id);
                localStorage.setItem(`${environment.applicationName}-token`, "token");
    
                navigate("/");
            } else {
                alert(translate("email_or_password_is_incorrect"));
            }
        }
    }, [data, navigate]);

    return (
        <Form name="login" layout="vertical" className={classes.mainDiv} onFinish={onFinish}>
            <Form.Item
                name="email"
                rules={[
                    { required: true, message: translate("email_must_be_entered") },
                    { type: "email", message: translate("email_format_is_incorrect") }
                ]}
            >
                <Input placeholder={translate("email")} className={classes.signInput} type="email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: translate("password_required") }
                ]}
            >
                <Input placeholder={translate("password")} className={classes.signInput} type="password" />
            </Form.Item>
            <button className={classes.btn}>{translate("singIn")}</button>
        </Form>
    );
};

export default SignInComponent;
