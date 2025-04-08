import React, { useCallback, useState } from 'react';
import useLocalization from '../../../../assets/lang';
import { useEmailChangeStyles } from './email-change.style';
import { Form, Input, Button } from 'antd';
import { useUpdateEmail } from './action/email-change.mutation';
import Edit from '../../../../assets/images/icons/edit';
import { useGetUser } from './action/email-change.query';

const EmailChangeComponent = () => {
    const classes = useEmailChangeStyles();
    const [newEmail, setNewEmail] = useState('');
    const translate = useLocalization();
    const email = localStorage.getItem("email");
    const id = localStorage.getItem("id");

    const { mutate: updateEmail } = useUpdateEmail(id);
    const { data, isLoading } = useGetUser(id);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
    },[])

    const handleSubmit = useCallback(() => {
        if (!newEmail) {
            alert("Yeni e-poçt daxil edin!");
            return;
        }
    
        updateEmail(newEmail);
        localStorage.setItem("email", newEmail);
        window.location.reload();
    }, [newEmail, updateEmail]);

    return (
        <div className={classes.mainDiv}>
            <div className={classes.personEmailMainDiv}>
                <div className={classes.personEmailDiv}>
                    <h1 className={classes.email}>{translate("email_person")}</h1>
                    <p className={classes.personEmail}>{data?.email}</p>
                </div>

                <div className={classes.personEmailDiv}>
                    <div className={classes.changeEmailDiv}>
                        <h1 className={classes.changeEmail}>{translate("cahange_your_email")}</h1>
                        <div>
                            <Edit />
                        </div>
                    </div>

                    <div>
                        <Form onFinish={handleSubmit}>
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: translate("email_required") },
                                    { type: 'email', message: translate("please_enter_a_valid_email") },
                                ]}
                            >
                                <Input
                                    type="email"
                                    value={newEmail}
                                    onChange={handleEmailChange}
                                    placeholder={translate("enter_new_email")}
                                />
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                {translate("change_email")}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailChangeComponent;

