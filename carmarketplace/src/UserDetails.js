import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { createCar, deleteCar } from "./ducks/cars/actions";
import { sortCarsList } from "./ducks/cars/actions";
import { ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";

const UserDetails = ({user, cars, sortCarsList}, props) => {
    // console.log(user)
    // console.log(cars)
    return  (
        <div  >
            <div className="user-details-container">
                <h2>Seller's Info:</h2>
                {user.map(el =>
                <div className="user-info">
                    <div>
                        <div>{el.first_name} {el.last_name}</div>
                        <div>{el.mail}</div>
                        <div>{el.phone}</div>
                        <div>{el.city}</div>
                        <div>Cars for sell: {cars.length}</div>
                    </div>
                    
                </div>)}
                <h2>Offers:</h2>
                <Formik
                    initialValues= {{
                        filter: ''
                    }}
                    enableReinitialize={true}
                    onSubmit={(values) => {sortCarsList(values)}}
                    >
                    <Form>
                        <div className='car-filters'>
                                <div className="formik-select">
                                    Sort
                                    <div>
                                        <Field className="user-details-sort" name="filter" as="select">
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
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </Form>
                </Formik>
                <div className="user-offers">
                {cars && cars.map(car => (
                    
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
                                <div>Year<div> {car.production_year} </div></div>
                                <div>Mileage<div> {car.mileage}km </div></div>
                                <div>Fuel<div> {car.fuel_type} </div></div>
                                <div>Gearbox<div> {car.gearbox} </div></div>
                                <div>Power<div>{car.horse_power}HP </div></div>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <div id="outer">
                                <Link to={`/cars/${car.id}/edit`}><div class="button_slide slide_diagonal blue">EDIT</div></Link>
                            </div>
                            <div id="outer">
                                <div class="button_slide slide_diagonal red">DELETE</div>
                            </div>
                        </div>
                    </Link>
                    ))}

                </div>
                <div>
                <Link to={`/sellers/${user[0].id}/addOffer`}><div id="outer">
                        <div class="button_slide slide_diagonal green">ADD OFFER</div>
                    </div></Link>
                </div>
            </div>
        </div>
        
    )
}

const mapStateToProps =  (state,props) => {
    const id = parseInt(props.match.params.id)
    console.log(state.cars)
    const user = state.users.filter(user => user.id === id)
    const cars = state.cars.filter(car => car.owner_id === id)
    return {
        user: user,
        cars: cars
    }
};

const mapDispatchToProps = {
    createCar,
    sortCarsList
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails))