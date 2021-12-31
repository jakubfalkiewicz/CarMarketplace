import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { deleteCar } from "./ducks/cars/actions";

const CarDetails = ({owner, car}, props) => {
    console.log(car)
    // console.log(owner)
    return  (
    <div>
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
                        <div>Year<div> {car.production_year} </div></div>
                        <div>Mileage<div> {car.mileage}km </div></div>
                        <div>Fuel<div> {car.fuel_type} </div></div>
                        <div>Engine size<div> {car.engine_size}cm³ </div></div>
                        <div>Power<div>{car.horse_power}HP </div></div>
                        <div>Gearbox<div> {car.gearbox} </div></div>
                        <div>Wheel drive<div> {car.wheel_drive} </div></div>
                    </div>
                    <div className="description details">
                        <div>Description<div>{car.description}</div></div>
                    </div>
                    <div className="price details margin">
                        Price - {car.price}PLN
                    </div>
                </div>
            </div>))}
        
        {owner.map(el =>
            <div className="user-info">
                
                <Link to={`/sellers/${el.id}`} className="user-info-data" style={{textDecoration: 'none',color: "white"}} >
                    <div className="section">Contact</div>
                    <div>{el.first_name} {el.last_name}</div>
                    <div>{el.mail}</div>
                    <div>{el.phone}</div>
                    <div>{el.city}</div>
                </Link>
                <div className="buttons-container">
                    <div id="outer">
                        <Link to={`/cars/${car[0].id}/edit`}><div className="button_slide_edit slide_diagonal_edit">EDIT</div></Link>
                    </div>
                    <div id="outer">
                        <div onClick={() => deleteCar(car[0])} className="button_slide_delete slide_diagonal_delete">DELETE</div>
                    </div>
                </div>
            </div>
        )}
    </div>
    )
}

const mapStateToProps = (state,props) => {
    
    const id = parseInt(props.match.params.id)
    const car = state.cars.filter(car => car.id === id)
    console.log(car)
    const owner = state.users.filter(user => user.id === car[0].owner_id)
    return {
        owner: owner,
        car: car
    }
};

const mapDispatchToProps = {
    deleteCar
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarDetails))