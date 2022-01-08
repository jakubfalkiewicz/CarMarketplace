import { Field, Form, Formik, ErrorMessage } from "formik"
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { createUser } from "./ducks/users/actions";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { t } from "i18next";

const UserCreate = ({createUser},props) => {

    const handleSubmit = (values) => {
        createUser(values);
        window.history.back()
    }

    const userSchema = Yup.object().shape({
        first_name: Yup.string().max(30, 'First name cannot have more than 30 letters!').required('First name required!'),
        last_name: Yup.string().max(30, 'Last Name cannot have more than 20 letters!').required('Last name required!'),
        mail: Yup.string().max(30, 'Mail cannot have more than 30 letters!').required('Mail required!'),
        phone: Yup.string().min(9, 'Phone nuber has to be at least 9 letters long').max(12, 'Phone number cannot have more than 12 digits').required('Phone number required!'),
        city: Yup.string().max(60, 'City cannot have more than 60 letters').required('City is required!')
    })

    return (
        <div className="car-form-container">
            <div className="car-form-content">
                <h3>{t('add')} {t('seller')}</h3>
                <div className="car-forms">
                    <Formik
                        initialValues={{
                            first_name:'',
                            last_name:'',
                            mail:'',
                            phone:'',
                            city:''
                        }}
                        validationSchema={userSchema}
                        onSubmit={(values) => {handleSubmit(values)}}
                        enableReinitialize={true}>
                        <Form>
                            <div className="car-form">
                                <div>
                                    <label for="first_name">{t('first_name')}</label>
                                    <Field className="form-input" name="first_name" type="text" maxlength="30" placeholder="First name"/>
                                    <ErrorMessage className="error-message" name="first_name" component="div"/>
                                </div>
                                <div>
                                    <label for="last_name">{t('last_name')}</label>
                                    <Field className="form-input" name="last_name" type="text" maxlength="30" placeholder="Last name"/>
                                    <ErrorMessage className="error-message" name="last_name" component="div"/>
                                </div>
                                <div>
                                    <div>Mail</div>
                                    <Field className="form-input" name="mail" type="text" min="0" max="99999999" placeholder="Mail" />
                                    <ErrorMessage className="error-message" name="mail" component="div"/>
                                </div>
                                <div>
                                    <div>{t('phone')}</div>
                                    <Field className="form-input" name="phone" type="text" maxlength="12" placeholder="Phone"/>
                                    <ErrorMessage className="error-message" name="phone" component="div"/>
                                </div>
                                <div>
                                    <div>{t('city')}</div>
                                    <Field className="form-input" name="city" type="text" maxlength="60" placeholder="City"/>
                                    <ErrorMessage className="error-message" name="city" component="div"/>
                                </div>
                            </div>
                            <button type="submit">
                                Submit
                            </button>
                        </Form>
                    </Formik>
                    <Link to="/users"><button>Back to {t('list')}</button></Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = {
    createUser
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserCreate));