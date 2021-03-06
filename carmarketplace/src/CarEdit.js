import { Field, Form, Formik, ErrorMessage } from "formik"
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createCar, editCar } from "./ducks/cars/actions";
import * as Yup from 'yup';
// import { v4 as uuidv4 } from 'uuid';
import { t } from "i18next";

const CarEdit = ({car, createCar, editCar, seller},props) => {

    window.scrollTo(0, 0)
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const reformed = today.toISOString();

    const handleSubmit = (values) => {
        if (car.id === ''){
            createCar(values)
            window.history.back()
        }
        else {
            editCar(values);
            window.history.back()
        }
    }

    const userSchema = Yup.object().shape({
        title: Yup.string().max(30, 'Title cannot have more than 30 letters!').required('Title required!'),
        make: Yup.string().max(20, 'Make cannot have more than 20 letters!').required('Make required!'),
        model: Yup.string().max(20, 'Model cannot have more than 30 letters!').required('Model required!'),
        price: Yup.number().max(99999999, 'Price cannot be higher than more than 99999999PLN!').required('Price required!').positive('The value has to be positive!').integer('The value has to be integer!'),
        production_year: Yup.number().min(1900, 'Production year cannot be lower than 1900!').max(2022, 'Production year cannot be higher than year 2022!').required('Production year required!').integer('The value has to be integer'),
        mileage: Yup.number().max(9999999, 'Mileage cannot be higher than 9999999km!').required('Mileage required!').positive('The value has to be positive!').integer('The value has to be integer!'),
        fuel_type: Yup.string().required('Fuel type required!'),
        engine_size: Yup.number().min(0, 'Engine size cannot be smaller than 0cm³!').max(10000, 'Engine size cannot be higher than 10000!').required('Engine size required!').integer('The value has to be integer!'),
        horse_power: Yup.number().max(2000, 'Horse power cannot be higher than 2000!').required('Horse power required!').positive('The value has to be positive!').integer('The value has to be integer!'),
        wheel_drive: Yup.string().required('Wheel drive required!'),
        gearbox: Yup.string().required('Gearbox required!'),
        vin: Yup.string().min(17,'VIN must be 17 letters long').max(17,'VIN must be 17 letters long').required('Vin required'),
        image_url: Yup.string().url('Invalid url!'),
        description: Yup.string().max(255, 'Description can have maximum 255 letters!')
    })

    return (
        <div className="car-form-container">
            <div className="car-form-content">
                { car.id === '' ?  <h2>{t('add')} {t('car')}</h2> : <h2>{t('edit')} {t('car')}</h2>}
                <div className="car-forms">
                    <Formik
                        initialValues={{
                            id: car.id,
                            title: car.title,
                            make:car.make,
                            model:car.model,
                            price:car.price,
                            production_year:car.production_year,
                            mileage:car.mileage,
                            fuel_type:car.fuel_type,
                            engine_size:car.engine_size,
                            horse_power:car.horse_power,
                            wheel_drive:car.wheel_drive,
                            gearbox:car.gearbox,
                            vin:car.vin,
                            image_url:car.image_url,
                            description:car.description,
                            upload_date: reformed,
                            owner_id: car.owner_id
                        }}
                        validationSchema={userSchema}
                        onSubmit={(values) => handleSubmit(values)}
                        enableReinitialize={true}>
                        <Form>
                            <div className="car-form">
                                <div>
                                    <div>{t('title')}</div>
                                    <Field className="form-input" name="title" type="text" maxLength="30"  placeholder="Title"/>
                                    <ErrorMessage className="error-message" name="title" component="div"/>
                                </div>
                                <div>
                                    <div>{t('make')}</div>
                                    <Field className="form-input" name="make" type="text" maxLength="20"  placeholder="Make"/>
                                    <ErrorMessage className="error-message" name="make" component="div"/>
                                </div>
                                <div>
                                    <div>{t('model')}</div>
                                    <Field className="form-input" name="model" type="text" maxLength="20" placeholder="Model"/>
                                    <ErrorMessage className="error-message" name="model" component="div"/>
                                </div>
                                <div>
                                    <div>{t('price')}</div>
                                    <Field className="form-input" name="price" type="number" min="0" max="99999999" placeholder="Price" />
                                    <ErrorMessage className="error-message" name="price" component="div"/>
                                </div>
                                <div>
                                    <div>Production {t('year')}</div>
                                    <Field className="form-input" name="production_year" type="number" min="1900" max="2022" placeholder="Production year"/>
                                    <ErrorMessage className="error-message" name="production_year" component="div"/>
                                </div>
                                <div>
                                    <div>{t('mileage')} (km)</div>
                                    <Field className="form-input" name="mileage" type="number" min="0" max="9999999" placeholder="Mileage"/>
                                    <ErrorMessage className="error-message" name="mileage" component="div"/>
                                </div>
                                <div>
                                    <div>{t('fuel')} type</div>
                                    <Field className="form-input"  as="select" name="fuel_type" >
                                        <option disabled value=""></option>
                                        <option value="Petrol">Petrol</option>
                                        <option value="Petrol/LPG">Petrol/LPG</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="Electric">Electric</option>
                                    </Field>
                                    <ErrorMessage className="error-message" name="fuel_type" component="div"/>
                                </div>
                                <div>
                                    <div>{t('engine_size')} (cm³)</div>
                                    <Field className="form-input" name="engine_size" type="number" min="0" max="10000" placeholder="Engine size"/>
                                    <ErrorMessage className="error-message" name="engine_size" component="div"/>
                                </div>
                                <div>
                                    <div>{t('power')}</div>
                                    <Field className="form-input" name="horse_power"  type="number" min="0" max="2000" placeholder="Power"/>
                                    <ErrorMessage className="error-message" name="horse_power" component="div"/>
                                </div>
                                <div>
                                    <div>{t('wheel_drive')}</div>
                                    <Field className="form-input" as="select" name="wheel_drive" >
                                    <option disabled value=""></option>
                                        <option value="Front">Front</option>
                                        <option value="Rear">Rear</option>
                                        <option value="All">All</option>
                                    </Field>
                                    <ErrorMessage className="error-message" name="wheel_drive" component="div"/>
                                </div>
                                <div>
                                    <div>{t('gearbox')}</div>
                                    <Field className="form-input" as="select" name="gearbox" >
                                        <option disabled value=""></option>
                                        <option value="Manual">Manual</option>
                                        <option value="Automatic">Automatic</option>
                                    </Field>
                                    <ErrorMessage className="error-message" name="gearbox" component="div"/>
                                </div>
                                <div>
                                    <div>Vin</div>
                                    <Field className="form-input" name="vin" type="text"  minLength="17" maxLength="17" placeholder="Vin"/>
                                    <ErrorMessage className="error-message" name="vin" component="div"/>
                                </div>
                                <div>
                                    <div>{t('image')} url (optional)</div>
                                    <Field className="form-input" name="image_url" type="url" placeholder="Image url"/>
                                    <ErrorMessage className="error-message" name="image_url" component="div"/>
                                </div>
                                <div>
                                    <div>{t('description')} (optional)</div>
                                    <Field as="textarea" className="form-input" name="description" type="text" maxLength="255" placeholder="Description" rows="4" cols="50"/>
                                    <ErrorMessage className="error-message" name="description" component="div"/>
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
    if (props.match.path === "/cars/:id/edit"){
        const id = parseInt(props.match.params.id)
        const car = state.cars.filter(car => car.id === id)
        return {
            car: car[0]
        }
    }
    if (props.match.path === "/sellers/:id/addOffer"){
        const id = parseInt(props.match.params.id)
        const car = [{
            id: '',
            title:'',
            make:'',
            model:'',
            price:'',
            production_year:'',
            mileage:'',
            fuel_type:'',
            engine_size:'',
            horse_power:'',
            wheel_drive:'',
            gearbox:'',
            vin:'',
            image_url:'',
            description:'',
            owner_id: id
        }]
        return {
            car: car[0]
        }
    }
    else{
        const car = [{
            id: '',
            title:'',
            make:'',
            model:'',
            price:'',
            production_year:'',
            mileage:'',
            fuel_type:'',
            engine_size:'',
            horse_power:'',
            wheel_drive:'',
            gearbox:'',
            vin:'',
            image_url:'',
            description:'',
            owner_id: null
        }]
        return {
            car: car[0]
        }
    }
};

const mapDispatchToProps = {
    createCar,
    editCar
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarEdit));