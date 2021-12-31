// import { Link } from "react-router-dom";
import './App.css';
import { connect } from "react-redux";
// import { getUserList } from "../actions/UserActions";
import { filterCarsList, sortCarsList } from "./ducks/cars/actions";
import { ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import * as Yup from 'yup';
import axios from 'axios';
import { useEffect, useState } from "react";

const CarsList = ({cars, sellers, filterCarsList, sortCarsList} ) => {
        
    // const makeSet = new Set(cars.map(car => car.make))
    // const values = makeSet.map(el => el.value)
    // console.log(makeSet)
    // console.log(values)
    // useEffect(() =>{
    //     console.log(wheel_drive)
    //     console.log(gearbox)
    //     console.log(fuel_type)
    // })

    // const [wheel_drive,setWheelDrive] = useState('');
    // const [gearbox,setGearbox] = useState('')
    // const [fuel_type,setFuelType] = useState('')

    const filterSchema = Yup.object().shape({
        min_price: Yup.number().min(0).max(99999999),
        max_price: Yup.number().min(0).max(99999999),
        min_production_year: Yup.number().min(1900).max(2022),
        max_production_year: Yup.number().min(1900).max(2022),
        min_mileage: Yup.number().min(0).max(9999999),
        max_mileage: Yup.number().min(0).max(9999999),
        min_engine_size: Yup.number().min(0).max(10000),
        max_engine_size: Yup.number().min(0).max(10000),
        min_horse_power: Yup.number().min(0).max(2000),
        max_horse_power: Yup.number().min(0).max(2000)
    })

    return (
        <div className='carslist'>
            <div className="offer-container">
                <Formik
                        initialValues= {{
                            wheel_drive: '',
                            gearbox: '',
                            fuel_type:'',
                            min_price: '',
                            max_price: '',
                            min_production_year: '',
                            max_production_year: '',
                            min_mileage: '',
                            max_mileage:'',
                            min_engine_size:'',
                            max_engine_size:'',
                            min_horse_power:'',
                            max_horse_power:''}}
                        validationSchema={filterSchema}
                        enableReinitialize={true}
                        onSubmit={(values) => {filterCarsList(values)}}
                        >
                        <Form>
                            <div className='car-filters'>
                                <h2>Filters: </h2>
                                <div className="fields-container">
                                    <div className="formik-field">
                                        Production year
                                        <div>
                                            <Field name="min_production_year" placeholder="From"/>
                                            <ErrorMessage name="min_production_year" component="div"/>
                                            <Field name="max_production_year" placeholder="To"/>
                                            <ErrorMessage name="miax_production_year" component="div"/>
                                        </div>
                                        
                                    </div>
                                    <div className="formik-field">
                                        Mileage
                                        <div>
                                            <Field name="min_mileage" placeholder="From"/>
                                            <ErrorMessage name="min_mileage" component="div"/>
                                            <Field name="max_mileage" placeholder="To"/>
                                            <ErrorMessage name="max_mileage" component="div"/>
                                        </div>
                                    </div>
                                    <div className="formik-field">
                                        Price
                                        <div>
                                            <Field name="min_price" placeholder="From"/>
                                            <ErrorMessage name="min_price" component="div"/>
                                            <Field name="max_price" placeholder="To"/>
                                            <ErrorMessage name="max_price" component="div"/>
                                        </div>
                                    </div>
                                    <div className="formik-field">
                                        Engine size
                                        <div>
                                            <Field name="min_engine_size" placeholder="From"/>
                                            <ErrorMessage name="min_engine_size" component="div"/>
                                            <Field name="max_engine_size" placeholder="To"/>
                                            <ErrorMessage name="max_engine_size" component="div"/>
                                        </div>
                                    </div>
                                    <div className="formik-field">
                                        Horse power
                                        <div>
                                            <Field name="min_horse_power" placeholder="From"/>
                                            <ErrorMessage name="min_horse_power" component="div"/>
                                            <Field name="max_horse_power" placeholder="To"/>
                                            <ErrorMessage name="max_horse_power" component="div"/>
                                        </div>
                                    </div>
                                    <div className="formik-select-container">
                                        <div className="formik-select">
                                            Wheel drive
                                            <div>
                                                <Field name="wheel_drive" as="select">
                                                    <option disabled>Wheel drive</option>
                                                    <option value="">None</option>
                                                    <option value="Front">Front wheel drive</option>
                                                    <option value="Rear">Rear wheel drive</option>
                                                    <option value="All">All wheel drive</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="formik-select">
                                            Gearbox
                                            <div>
                                                <Field name="gearbox" as="select">
                                                    <option disabled>Gearbox</option>
                                                    <option value="">None</option>
                                                    <option value="Manual">Manual</option>
                                                    <option value="Automatic">Automatic</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="formik-select">
                                            Fuel
                                            <div>
                                                <Field name="fuel_type" as="select">
                                                    <option disabled>Fuel</option>
                                                    <option value="">None</option>
                                                    <option value="Petrol">Petrol</option>
                                                    <option value="Petrol/LPG">Petrol/LPG</option>
                                                    <option value="Diesel">Diesel</option>
                                                    <option value="Hybrid">Hybrid</option>
                                                    <option value="Electric">Electric</option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Formik>
                    <Formik
                        initialValues= {{
                            filter: '',
                            store: cars
                        }}
                        enableReinitialize={true}
                        onSubmit={(values) => {sortCarsList(values)}}
                        >
                        <Form>
                            <div className='car-filters'>
                                <h2>Sort: </h2>
                                <div className="fields-container">
                                    <div className="formik-select">
                                        Sort
                                        <div>
                                            <Field name="filter" as="select">
                                                <option value="title">A-Z</option>
                                                <option value="price_asc">Price asc.</option>
                                                <option value="price_desc">Price desc.</option>
                                                <option value="mileage_asc">Mileage asc.</option>
                                                <option value="mileage_desc">Mileage desc.</option>
                                                <option value="power_asc">Power asc.</option>
                                                <option value="power_desc">Power desc.</option>
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Formik>
                <h1> Cars List </h1>
                {cars && cars.map(car => (
                    <Link to={`/cars/${car.id}`} style={{textDecoration: 'none',color: "white"}}>
                    <div key={car.id} className="offer">
                        
                        <div key={car.id} className="offer-photo">
                            <div className="car-title">
                                {car.title} 
                            </div>
                            <div className='photo'>
                                <img className="car-img" src={car.image_url} alt="car"></img>
                            </div>
                            <div className="price">
                                {car.price}PLN
                            </div>
                        </div>
                        <div className="spec-container-list">
                            <div className="car-spec">
                                <div>Year<div> {car.production_year} </div></div>
                                <div>Mileage<div> {car.mileage}km </div></div>
                                <div>Fuel<div> {car.fuel_type} </div></div>
                                <div>Gearbox<div> {car.gearbox} </div></div>
                                <div>Power<div>{car.horse_power}HP </div></div>
                            </div>
                        </div>
                        <Link to={`/sellers/${car.owner_id}`} className='offer-contact' style={{textDecoration: 'none',color: "white"}} >
                            <div>
                                <div>Seller:</div> {sellers.filter(el => el.id === car.owner_id)[0].first_name}
                            </div>
                            <div>
                                <div>City:</div> {sellers.filter(el => el.id === car.owner_id)[0].city}
                            </div>
                            <div>
                                <div>Phone:</div> {sellers.filter(el => el.id === car.owner_id)[0].phone}
                            </div>
                        </Link>
                       
                    </div>
                    </Link>))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        sellers: state.users
    }
};

const mapDispatchToProps = {
    filterCarsList,
    sortCarsList
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsList)