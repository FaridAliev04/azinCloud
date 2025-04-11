import { Select, Input, Form } from 'antd';
import { useSignUpStyles } from './sign-up.style';
import useLocalization from '../../../../assets/lang';
import { useCallback } from 'react';
import { useSignUp } from './action/sign-up.mutation';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const SignUpComponent = () => {
    const classes = useSignUpStyles();
    const translate = useLocalization();
    const navigate = useNavigate();

    console.log(uuidv4())

    const { mutate } = useSignUp();

    const initialValues: any = {
        name: '',
        surname: '',
        county: '',
        city: '',
        email: '',
        address: '',
        password: '',
    };

    const onSubmit = useCallback((values: any) => {
        const userWithId = {
            ...values,
            id: uuidv4()
        };
        
        mutate(userWithId);
        navigate('/');
        
        localStorage.setItem("ad", `${userWithId.name} ${userWithId.surname}`);
        localStorage.setItem("email", userWithId.email);
        localStorage.setItem("id", userWithId.id);
    }, [mutate]);

    return (
        <Form
            name='signup'
            className={classes.mainDiv}
            layout='vertical'
            initialValues={initialValues}
            onFinish={onSubmit}
        >
            <div className={classes.inpDiv}>
                <Form.Item name='name' rules={[{ required: true, message:translate("name_must_be_entered") }]}>
                    <Input placeholder={translate("name")} className={classes.twinInp} />
                </Form.Item>
                <Form.Item name='surname' rules={[{ required: true, message:translate("surname_must_be_entered")}]}>
                    <Input placeholder={translate("surname")} className={classes.twinInp} />
                </Form.Item>
            </div>
            <div className={classes.inpDiv}>
                <Form.Item name='country' rules={[{ required: true, message: translate("country_must_be_selected") }]}>
                    <Select
                        placeholder={translate("country")}
                        style={{ width: '100%' }}
                        className={`${classes.selection} ${classes.twinInp}`}
                        options={[
                            { value: 'Azerbaycan', label: translate("azerbaijan") },
                            { value: 'Turkiye', label: translate("turkey") },
                            { value: 'Rusiya', label: translate("russia") },
                            { value: 'Iran', label: translate("iran") },
                        ]}
                    />
                </Form.Item>
                <Form.Item name='city' rules={[{ required: true, message: translate("the_city_must_be_included")}]}>
                    <Input placeholder={translate("city")} className={classes.twinInp} />
                </Form.Item>
            </div>
            <Form.Item name='email' rules={[
                { required: true, message: translate("enter_email") },
                { type: 'email', message: translate("the_email_is_not_valid") }
            ]}>
                <Input placeholder={translate("email")} type="email" className={classes.inp} />
            </Form.Item>
            <Form.Item name='address' rules={[{ required: true, message: translate("address_must_be_entered") }]}>
                <Input placeholder={translate("address")} className={classes.inp} />
            </Form.Item>
            <div className={classes.passwordDiv}>
                <Form.Item name='password' rules={[{ required: true, message: translate("password_required") }]}>
                    <Input placeholder={translate("password")} className={classes.twinInp} type='password' />
                </Form.Item>
                <Form.Item
                    name='repeat_password'
                    dependencies={['password']}
                    rules={[
                        { required: true, message: translate("password_must_be_re_entered") },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(translate("passwords_do_not_match")));
                            },
                        }),
                    ]}
                >
                    <Input placeholder={translate("repeat_password")} className={classes.twinInp} type='password' />
                </Form.Item>
            </div>

            <button className={classes.btn}>{translate("signUp")}</button>
        </Form>
    );
}

export default SignUpComponent;
