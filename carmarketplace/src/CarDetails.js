import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { deleteCar } from "./ducks/cars/actions";
import { useState } from "react";
import UsersList from './UsersList';
import { useTranslation } from 'react-i18next';
import AddOwner from "./AddOwner";

const CarDetails = ({owner, car}, props) => {

    const { t, i18n } = useTranslation();

    const [display,setDisplay] = useState(false)
    return  (
    <div className="car-details">
        {car && car.map(car => (
            <div className="details-container">
                <h2>{car.title} </h2>
                <div className="photo-container">
                    <div className="photo-details">
                        <img className="big-img" src={car.image_url} alt="car"></img>
                    </div>
                </div>
                <div className="spec-container">
                    <div className="car-spec details">
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
        
        {owner && 
            <div className="user-info">
                
                <Link to={`/sellers/${owner.id}`} className="user-info-data" style={{textDecoration: 'none',color: "white"}} >
                    <div className="section">{t('contact')}</div>
                    <div>{owner.first_name} {owner.last_name}</div>
                    <div>{owner.mail}</div>
                    <div>{owner.phone}</div>
                    <div>{owner.city}</div>
                </Link>
                
            </div>}
        {owner && 
        <div className="iframe">
            <iframe
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-JHebzH64VmdzTBItbk9TaBReCxjTbjc&q=${owner.city}`} allowFullScreen>
            </iframe>
        </div>
        }
        <div className="buttons-container">
            <div id="outer">
                <Link to={`/cars/${car[0].id}/edit`}><div className="button_slide slide_diagonal blue">{t('edit')}</div></Link>
            </div>
            <div id="outer">
                <div onClick={() => deleteCar(car[0])} className="button_slide slide_diagonal red">{t('delete')}</div>
            </div>
            {car[0].owner_id === null && 
            <div>
                {display === false &&  <div className="button_slide slide_diagonal blue" onClick={() => setDisplay(true)}>{t('add')} {t('owner')}</div>}
            </div>
            }
        </div>
        <div>
            {display === true && car[0].owner_id === null && <div><AddOwner car={car[0]}></AddOwner></div>}
        </div>
    </div>
    )
}

const mapStateToProps = (state,props) => {
    
    const id = parseInt(props.match.params.id)
    const car = state.cars.filter(car => car.id === id)
    const owner = state.users.filter(user => user.id === car[0].owner_id)[0]

    return {
        owner: owner,
        car: car
    }
};

const mapDispatchToProps = {
    deleteCar
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarDetails))