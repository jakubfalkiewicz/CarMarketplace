import { Field, Form, Formik, ErrorMessage } from "formik"
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { createCar, editCar } from "./ducks/cars/actions";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

const CarEdit = ({car, createCar, editCar},props) => {

    const handleSubmit = (values) => {
        editCar(values);
        window.history.back()
    }

    const userSchema = Yup.object().shape({
        title: Yup.string().max(30, 'Title cannot have more than 30 letters!').required('Title required!'),
        make: Yup.string().max(20, 'Make cannot have more than 20 letters!').required('Make required!'),
        model: Yup.string().max(20, 'Model cannot have more than 30 letters!').required('Model required!'),
        price: Yup.number().max(99999999, 'Price cannot be higher than more than 99999999PLN!').required('Price required!').positive('The value has to be positive!').integer('The value has to be integer!'),
        production_year: Yup.number().min(1900, 'Production year cannot be lower than 1900!').max(2022, 'Production year cannot be higher than year 2022!').required('Production year required!').integer('The value has to be integer'),
        mileage: Yup.number().max(9999999, 'Mileage cannot be higher than 9999999km!').required('Mileage required!').positive('The value has to be positive!').integer('The value has to be integer!'),
        fuel_type: Yup.string().required('Fuel type required!'),
        engine_size: Yup.number().max(10000, 'Engine size cannot be higher than 10000!').required('Engine size required!').positive('The value has to be positive!').integer('The value has to be integer!'),
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
                <h3>Add Car</h3>
                <div className="car-forms">
                    <Formik
                        initialValues={{
                            id:car.id,
                            title:car.title,
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
                            owner_id: car.owner_id
                        }}
                        validationSchema={userSchema}
                        onSubmit={(values) => handleSubmit(values)}
                        enableReinitialize={true}>
                        <Form>
                            <div className="car-form">
                                <div>
                                    <label for="title">Title</label>
                                    <Field className="form-input" name="title" type="text" maxlength="30"  placeholder="Title"/>
                                    <ErrorMessage className="error-message" name="title" component="div"/>
                                </div>
                                <div>
                                    <label for="make">Make</label>
                                    <Field className="form-input" name="make" type="text" maxlength="20"  placeholder="Make"/>
                                    <ErrorMessage className="error-message" name="make" component="div"/>
                                </div>
                                <div>
                                    <label for="model">Model</label>
                                    <Field className="form-input" name="model" type="text" maxlength="20" placeholder="Model"/>
                                    <ErrorMessage className="error-message" name="model" component="div"/>
                                </div>
                                <div>
                                    <div>Price</div>
                                    <Field className="form-input" name="price" type="number" min="0" max="99999999" placeholder="Price" />
                                    <ErrorMessage className="error-message" name="price" component="div"/>
                                </div>
                                <div>
                                    <div>Production year</div>
                                    <Field className="form-input" name="production_year" type="number" min="1900" max="2022" placeholder="Production year"/>
                                    <ErrorMessage className="error-message" name="production_year" component="div"/>
                                </div>
                                <div>
                                    <div>Mileage (km)</div>
                                    <Field className="form-input" name="mileage" type="number" min="0" max="9999999" placeholder="Mileage"/>
                                    <ErrorMessage className="error-message" name="mileage" component="div"/>
                                </div>
                                <div>
                                    <div>Fuel type</div>
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
                                    <div>Engine size</div>
                                    <Field className="form-input" name="engine_size" type="number" min="0" max="10000" placeholder="Engine size"/>
                                    <ErrorMessage className="error-message" name="engine_size" component="div"/>
                                </div>
                                <div>
                                    <div>Power</div>
                                    <Field className="form-input" name="horse_power"  type="number" min="0" max="2000" placeholder="Power"/>
                                    <ErrorMessage className="error-message" name="horse_power" component="div"/>
                                </div>
                                <div>
                                    <div>Wheel drive</div>
                                    <Field className="form-input" as="select" name="wheel_drive" >
                                    <option disabled value=""></option>
                                        <option value="Front">Front</option>
                                        <option value="Rear">Rear</option>
                                        <option value="All">All</option>
                                    </Field>
                                    <ErrorMessage className="error-message" name="wheel_drive" component="div"/>
                                </div>
                                <div>
                                    <div>Gearbox</div>
                                    <Field className="form-input" as="select" name="gearbox" >
                                        <option disabled value=""></option>
                                        <option value="Manual">Manual</option>
                                        <option value="Automatic">Automatic</option>
                                    </Field>
                                    <ErrorMessage className="error-message" name="gearbox" component="div"/>
                                </div>
                                <div>
                                    <div>Vin</div>
                                    <Field className="form-input" name="vin" type="text"  minLength="17" maxlength="17" placeholder="Vin"/>
                                    <ErrorMessage className="error-message" name="vin" component="div"/>
                                </div>
                                <div>
                                    <div>Image url (optional)</div>
                                    <Field className="form-input" name="image_url" type="url" placeholder="Image url"/>
                                    <ErrorMessage className="error-message" name="image_url" component="div"/>
                                </div>
                                <div>
                                    <div>Description (optional)</div>
                                    <Field as="textarea" className="form-input" name="description" type="text" maxlength="255" placeholder="Description" rows="4" cols="50"/>
                                    <ErrorMessage className="error-message" name="description" component="div"/>
                                </div>
                            </div>
                            <button type="submit">
                                Submit
                            </button>
                        </Form>
                    </Formik>
                    <Link to="/cars"><button>Back to list</button></Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    const id = parseInt(props.match.params.id)
    console.log(id)
    const car = state.cars.filter(car => car.id === id)
    console.log(car)
    return {
        car: car[0],
        // seller: seller
    }
};

const mapDispatchToProps = {
    createCar,
    editCar
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarEdit));