import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { deleteCar } from "./ducks/cars/actions";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import AddOwner from "./AddOwner";

const CarDetails = ({owner, car,cars, deleteCar}, props) => {

    window.scrollTo(0, 0)

    const { t} = useTranslation();

    const handleSubmit = (values) => {
        deleteCar(values)
        window.history.back()
    }

    const [display,setDisplay] = useState(false)
    return  (
    <div className="car-details">
        {car && car.map(car => (
            <div key={car.id} className="details-container">
                <h2>{car.title} </h2>
                <div className="photo-container">
                    <div className="photo-details">{car.image_url ? 
                    <img className="big-img" src={car.image_url} alt="car"></img> :
                    <img className="big-img" src="https://carmartonline.com.au/uploads/car_no_image.jpg" alt="car"></img>}
                    </div>
                </div>
                <div className="spec-container">
                    <div className="car-spec details">
                        <div>{t('make')}<div> {car.make} </div></div>
                        <div>{t('model')}<div> {car.model} </div></div>
                        <div>{t('year')}<div> {car.production_year} </div></div>
                        <div>{t('mileage')}<div> {car.mileage}km </div></div>
                        <div>{t('fuel')}<div> {car.fuel_type} </div></div>
                        <div>{t('engine_size')}<div> {car.engine_size}cm³ </div></div>
                        <div>{t('power')}<div>{car.horse_power}HP </div></div>
                        <div>{t('gearbox')}<div> {car.gearbox} </div></div>
                        <div>{t('wheel_drive')}<div> {car.wheel_drive} </div></div>
                    </div>
                    <div className="description details">
                        <div>{t('description')}<div>{car.description}</div></div>
                    </div>
                    <div className="price details margin">
                        {t('price')} - {car.price}PLN
                    </div>
                </div>
            </div>))}
        
        {owner && owner.map(el => (
            <div key={el.id} className="user-info">
                <Link to={`/sellers/${el.id}`} className="user-info-data link" >
                    <div className="section">{t('contact')}</div>
                    <div>{el.first_name} {el.last_name}</div>
                    <div>{el.mail}</div>
                    <div>{el.phone}</div>
                    <div>{el.city}</div>
                </Link>
            </div>
        ))
        }
        {owner && owner.map(el => (
        <div key={`${el.mail}`} className="iframe">
            <iframe
                title="map"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-JHebzH64VmdzTBItbk9TaBReCxjTbjc&q=${el.city}`} allowFullScreen>
            </iframe>
        </div>
        ))
        
        }
        {car && car.map(el => (
        <div key={`${el.title}`} className="buttons-container">
            <div id="outer">
                <Link to={`/cars/${el.id}/edit`}><div className="button_slide slide_diagonal blue">{t('edit')}</div></Link>
            </div>
            <div id="outer">
                <div onClick={() => handleSubmit(el)} className="button_slide slide_diagonal red">{t('delete')}</div>
            </div>
            <button onClick={() => window.history.back()}>{t('back')}</button>
            {el.owner_id === null && 
            <div>
                {display === false && <div className="button_slide slide_diagonal blue" onClick={() => setDisplay(true)}>{t('add')} {t('owner')}</div>}
            </div>
            }
            {el.owner_id !== null && 
            <div>
                {display === false && <div className="button_slide slide_diagonal blue" onClick={() => setDisplay(true)}>{t('change')} {t('owner')}</div>}
            </div>
            }
        </div>
        ))}
        
        {/* <div>
            {display === true && car[0].owner_id === null && <div><AddOwner car={car[0]}></AddOwner></div>}
        </div> */}
    </div>
    )
}

const mapStateToProps = (state,props) => {

    const id = parseInt(props.match.params.id)
    const car = state.cars.filter(car => car.id === id)
    console.log(car)
    const owner = state.users.filter(user => user.id === car[0].owner_id)
    // console.log(car)
    // console.log(owner)

    return {
        owner: owner,
        car: car,
        cars: state.cars
    }
};

const mapDispatchToProps = {
    deleteCar
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarDetails))