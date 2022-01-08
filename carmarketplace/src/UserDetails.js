import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { createCar, deleteCar } from "./ducks/cars/actions";
import { sortCarsList } from "./ducks/cars/actions";
import { ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import { useTranslation } from 'react-i18next';

const UserDetails = ({user, userCars, cars, sortCarsList}, props) => {
    const { t, i18n } = useTranslation();
    
    console.log(user[0].city)

    return  (
        
        <div className="body-width">
            <div className="user-details-container">
            
                <h2>{t('seller')}:</h2>
                {user.map(el =>
                <div className="user-info">
                    <div>
                        <div>{el.first_name} {el.last_name}</div>
                        <div>{el.mail}</div>
                        <div>{el.phone}</div>
                        <div>{t('number')}: {userCars.length}</div>
                        <div>{el.city}</div>
                    </div>
                </div>)}
                <div className="iframe">
                    <iframe
                            frameborder="0"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-JHebzH64VmdzTBItbk9TaBReCxjTbjc&q=${user[0].city}`} allowfullscreen>
                    </iframe>
                </div>
                <h2>{t('cars')}:</h2>
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
                                <div className="formik-select">
                                    {t('sort')}
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
                                Submit
                            </button>
                        </div>
                    </Form>
                </Formik>
                <div className="user-offers">
                {userCars && userCars.map(car => (
                    
                    <Link to={`/cars/${car.id}`} style={{textDecoration: 'none',color: "white"}} className="offer">
                        <div key={car.id} className="offer-photo">
                            <div className="car-title">
                                {car.title} 
                            </div>
                            <div className='photo'>
                                <img className="car-img" src={car.image_url} alt="car"></img>
                            </div>
                        </div>
                        <div className="price">
                                {car.price}PLN
                            </div>
                        <div className="spec-container-list">
                            <div className="car-spec">
                                <div>{t('year')}<div> {car.production_year} </div></div>
                                <div>{t('mileage')}<div> {car.mileage}km </div></div>
                                <div>{t('fuel')}<div> {car.fuel_type} </div></div>
                                <div>{t('gearbox')}<div> {car.gearbox} </div></div>
                                <div>{t('power')}<div>{car.horse_power}HP </div></div>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <div id="outer">
                                <Link to={`/cars/${car.id}/edit`}><div class="button_slide slide_diagonal blue">{t('edit')}</div></Link>
                            </div>
                            <div id="outer">
                                <div class="button_slide slide_diagonal red">{t('delete')}</div>
                            </div>
                        </div>
                    </Link>
                    ))}

                </div>
                <div>
                <Link to={`/sellers/${user[0].id}/addOffer`}><div id="outer">
                        <div class="button_slide slide_diagonal green">{t('add')} {t('car')}</div>
                    </div></Link>
                </div>
            </div>
        </div>
        
    )
}

const mapStateToProps =  (state,props) => {
    const id = parseInt(props.match.params.id)
    const user = state.users.filter(user => user.id === id)
    const cars = state.cars.filter(car => car.owner_id === id)
    return {
        user: user,
        userCars: cars,
        cars: state.cars
    }
};

const mapDispatchToProps = {
    createCar,
    sortCarsList
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails))