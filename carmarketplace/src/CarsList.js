import './App.css';
import { connect } from "react-redux";
import { filterCarsList, sortCarsList, getCarsList } from "./ducks/cars/actions";
import { Field, Form, Formik, ErrorMessage} from "formik";
import {Link} from "react-router-dom";
import { useEffect} from "react";
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup'
import { useState } from 'react';

const CarsList = ({cars, sellers, filterCarsList, sortCarsList, getCarsList}) => {
    
    useEffect(() => {
        if (cars.length === 0){
            getCarsList()
        }
    })

    const [wheelDrive,setWheelDrive] = useState('');
    const [gearbox,setGearbox] = useState('')
    const [fuelType,setFuelType] = useState('')
    const [minPrice,setMinPrice] = useState('');
    const [maxPrice,setMaxPrice] = useState('')
    const [minProductionYear,setMinProductionYear] = useState('')
    const [maxProductionYear,setMaxProductionYear] = useState('')
    const [minMileage,setMinMileage] = useState('');
    const [maxMileage,setMaxMileage] = useState('')
    const [minEngineSize,setMinEngineSize] = useState('')
    const [maxEngineSize,setMaxEngineSize] = useState('')
    const [minHorsePower,setMinHorsePower] = useState('')
    const [maxHorsePower,setMaxHorsePower] = useState('')
    

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

    const { t } = useTranslation();

    const filterCars = (values) => {
        setWheelDrive(values.wheel_drive)
        setGearbox(values.gearbox)
        setFuelType(values.fuel_type)
        setMinPrice(values.min_price)
        setMaxPrice(values.max_price)
        setMinProductionYear(values.min_production_year)
        setMaxProductionYear(values.max_production_year)
        setMinMileage(values.min_mileage)
        setMaxMileage(values.max_mileage)
        setMinEngineSize(values.min_engine_size)
        setMaxEngineSize(values.max_engine_size)
        setMinHorsePower(values.min_horse_power)
        setMaxHorsePower(values.max_horse_power)
    }

    return (
        <div className='carslist'>
            <div className="offer-container">
                <Formik
                        initialValues= {{
                            wheel_drive: wheelDrive,
                            gearbox: gearbox,
                            fuel_type: fuelType,
                            min_price: minPrice,
                            max_price: maxPrice,
                            min_production_year: minProductionYear,
                            max_production_year: maxProductionYear,
                            min_mileage: minMileage,
                            max_mileage: maxMileage,
                            min_engine_size: minEngineSize,
                            max_engine_size:maxEngineSize,
                            min_horse_power: minHorsePower,
                            max_horse_power:maxHorsePower}}
                        validationSchema={filterSchema}
                        enableReinitialize={true}
                        onSubmit={(values) => {filterCarsList(values); filterCars(values)}}
                        >
                        <Form className='filter-form'>
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
                        <Form className='filter-form'>
                        <div className='car-sort'>
                                <div className="formik-select">
                                <h2>{t('sort')}</h2>
                                    <div>
                                        <Field className="user-details-sort" name="filter" as="select">
                                            <option value="title">A-Z</option>
                                            <option value="newest">{t('newest_first')}</option>
                                            <option value="price_asc">{t('price')} asc.</option>
                                            <option value="price_desc">{t('price')} desc.</option>
                                            <option value="mileage_asc">{t('mileage')} asc.</option>
                                            <option value="mileage_desc">{t('mileage')} desc.</option>
                                            <option value="power_asc">{t('power')} asc.</option>
                                            <option value="power_desc">{t('power')} desc.</option>
                                        </Field>
                                    </div>
                            </div>
                            <button type="submit">
                            {t('submit')}
                            </button>
                        </div>
                    </Form>
                    </Formik>
                <h1> {t('cars')} {t('list')}  <Link to={`/addOffer`}><div id="outer">
                        <div className="button_slide slide_diagonal green">{t('add')} {t('car')}</div>
                    </div></Link></h1>
                {cars && cars.map(car => (
                    <div key={car.id} >
                    <div className="offer">
                        <Link to={`/cars/${car.id}`} style={{textDecoration: 'none',color: "white"}} className="offer-photo">
                        
                            <div className="car-title">
                                {car.title} 
                            </div>
                            <div className='photo'>{car.image_url ? 
                    <img className="big-img" src={car.image_url} alt="car"></img> :
                    <img className="big-img" src="https://carmartonline.com.au/uploads/car_no_image.jpg" alt="car"></img>}
                            </div>
                            <div className="price">
                                {car.price}PLN
                            </div>
                        </Link>
                        <Link to={`/cars/${car.id}`} style={{textDecoration: 'none',color: "white"}} className="spec-container-list">
                            <div className="car-spec">
                                <div>{t('year')}<div> {car.production_year} </div></div>
                                <div>{t('mileage')}<div> {car.mileage}km </div></div>
                                <div>{t('fuel')}<div> {car.fuel_type} </div></div>
                                <div>{t('gearbox')}<div> {car.gearbox} </div></div>
                                <div>{t('power')}<div>{car.horse_power}HP </div></div>
                            </div>
                        </Link>
                        { sellers.length > 0 && car.owner_id && <Link to={`/sellers/${car.owner_id}`} className='offer-contact' style={{textDecoration: 'none',color: "white"}} >
                            <div>
                                <div>{t('seller')}:</div> {sellers.filter(el => el.id === car.owner_id)[0].first_name}
                            </div>
                            <div>
                                <div>{t('city')}:</div> {sellers.filter(el => el.id === car.owner_id)[0].city}
                            </div>
                            <div>
                                <div>{t('phone')}:</div> {sellers.filter(el => el.id === car.owner_id)[0].phone}
                            </div>
                        </Link>}
                       
                    </div>
                    
                    </div>))}
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
    sortCarsList,
    getCarsList
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsList)