import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { deleteUser} from "./ducks/users/actions";
import { deleteCar, sortCarsList } from "./ducks/cars/actions";
import { Field, Form, Formik} from "formik";
import { useTranslation } from 'react-i18next';

const UserDetails = ({user, userCars, cars, sortCarsList, deleteUser, deleteCar}, props) => {
    const { t } = useTranslation();

    window.scrollTo(0, 0)

    const handleUserDelete = (values) => {
        userCars.map(el =>  deleteCar(el))
        deleteUser(values)
        return window.history.back()
    }

    return  (
        
        <div className="body-width">
            {user &&
            <div className="user-details-container">
            
                <h2>{t('seller')}:</h2>
                <div className="buttons-container">
                    <div id="outer">
                        <Link to={`/sellers/${user[0].id}/edit`}><div className="button_slide slide_diagonal blue">{t('edit')}</div></Link>
                    </div>
                    <div id="outer">
                        <div onClick={() => handleUserDelete(user[0])} className="button_slide slide_diagonal red">{t('delete')}</div>
                    </div>
                </div>
                {user && user.map(el =>
                <div key={el.id} className="user-info">
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
                        title="map"
                        frameBorder="0"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-JHebzH64VmdzTBItbk9TaBReCxjTbjc&q=${user[0].city}`} allowFullScreen>
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
                        <div className='car-sort'>
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
                            {t('submit')}
                            </button>
                        </div>
                    </Form>
                </Formik>
                <div className="user-offers">
                {userCars && userCars.map(car => (
                        <div key={car.id} className="offer">
                            <Link to={`/cars/${car.id}`} className="offer-photo link">
                                <div className="car-title"> {car.make} {car.model}</div>
                                
                                <div className='photo'>{car.image_url ? 
                                    <img className="big-img" src={car.image_url} alt="car"></img> :
                                    <img className="big-img" src="https://carmartonline.com.au/uploads/car_no_image.jpg" alt="car"></img>}
                                </div>
                            </Link>
                            <div className='list-details-container'>
                                <div className='list-details'>
                                    <div className="car-info">
                                        <div className="section flex-start">
                                            {car.title} 
                                        </div>
                                        <Link to={`/cars/${car.id}`} className="spec-container-list link flex-start">
                                            <div className="car-spec ">
                                                <div>{car.production_year}</div>
                                                <div>{car.mileage}km</div>
                                                <div>{car.fuel_type}</div>
                                                <div>{car.gearbox}</div>
                                                <div>{car.horse_power}HP </div>
                                            </div>
                                        </Link>
                                        <div className="buttons-container">
                                            <div id="outer">
                                                <Link to={`/cars/${car.id}/edit`}><div className="button_slide slide_diagonal blue">{t('edit')}</div></Link>
                                            </div>
                                            <div id="outer">
                                                <div onClick={() => deleteCar(car)} className="button_slide slide_diagonal red">{t('delete')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="price">
                                    {car.price}PLN
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div>
                    <Link to={`/sellers/${user[0].id}/addOffer`}>
                        <div id="outer">
                            <div className="button_slide slide_diagonal green">{t('add')} {t('car')}</div>
                        </div>
                    </Link>
                    <button onClick={() => window.history.back()}>{t('back')}</button>
                </div>
                
            </div>}
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
    deleteCar,
    deleteUser,
    sortCarsList
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails))