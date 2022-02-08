import { Field, Form, Formik, ErrorMessage } from "formik"
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createUser, editUser } from "./ducks/users/actions";
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const UserCreate = ({createUser, seller, editUser},props) => {
    const { t } = useTranslation();

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const reformed = today.toISOString();

    const handleSubmit = (values) => {
        if (seller.id === ''){
            createUser(values)
            window.history.back()
        }
        else {
            editUser(values);
            window.history.back()
        }
    }

    const userSchema = Yup.object().shape({
        first_name: Yup.string().max(30, 'First name cannot have more than 30 letters!').required('First name required!'),
        last_name: Yup.string().max(30, 'Last Name cannot have more than 20 letters!').required('Last name required!'),
        mail: Yup.string().max(30, 'Mail cannot have more than 30 letters!').required('Mail required!'),
        phone: Yup.string().min(9, 'Phone nuber has to be at least 9 letters long').max(12, 'Phone number cannot have more than 12 digits').required('Phone number required!'),
        city: Yup.string().max(60, 'City cannot have more than 60 letters').required('City is required!')
    })

    return (
        <div className="car-form-container height">
            <div className="car-form-content">
            { seller.id === '' ?  <h2>{t('add')} {t('seller')}</h2> : <h2>{t('edit')} {t('seller')}</h2>}
                <div className="car-forms">
                    <Formik
                        initialValues={{
                            id: seller.id,
                            first_name: seller.first_name,
                            last_name: seller.last_name,
                            mail: seller.mail,
                            phone: seller.phone,
                            city: seller.city,
                            upload_date: reformed
                        }}
                        validationSchema={userSchema}
                        onSubmit={(values) => {handleSubmit(values)}}
                        enableReinitialize={true}>
                        <Form>
                            <div className="car-form">
                                <div>
                                    <div>{t('first_name')}</div>
                                    <Field className="form-input" name="first_name" type="text" maxLength="30" placeholder="First name"/>
                                    <ErrorMessage className="error-message" name="first_name" component="div"/>
                                </div>
                                <div>
                                    <div>{t('last_name')}</div>
                                    <Field className="form-input" name="last_name" type="text" maxLength="30" placeholder="Last name"/>
                                    <ErrorMessage className="error-message" name="last_name" component="div"/>
                                </div>
                                <div>
                                    <div>Mail</div>
                                    <Field className="form-input" name="mail" type="text" min="0" max="99999999" placeholder="Mail" />
                                    <ErrorMessage className="error-message" name="mail" component="div"/>
                                </div>
                                <div>
                                    <div>{t('phone')}</div>
                                    <Field className="form-input" name="phone" type="text" maxLength="12" placeholder="Phone"/>
                                    <ErrorMessage className="error-message" name="phone" component="div"/>
                                </div>
                                <div>
                                    <div>{t('city')}</div>
                                    <Field className="form-input" name="city" type="text" maxLength="60" placeholder="City"/>
                                    <ErrorMessage className="error-message" name="city" component="div"/>
                                </div>
                            </div>
                            <button type="submit">
                            {t('submit')}
                            </button>
                        </Form>
                    </Formik>
                    <button onClick={() => window.history.back()}>{t('back')}</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    if (props.match.path === "/sellers/:id/edit"){
        const id = parseInt(props.match.params.id)
        const seller = state.users.filter(el => el.id === id)
        return {
            seller: seller[0]
        }
    }
    else{
        const seller = [{
            id: '',
            first_name:'',
            last_name: '',
            mail: '',
            phone: '',
            city: ''
        }]
        return {
            seller: seller[0]
        }
    }
};

const mapDispatchToProps = {
    createUser,
    editUser
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserCreate));