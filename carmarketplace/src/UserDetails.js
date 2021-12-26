import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const UserDetails = ({user, cars}, props) => {
    return  (
        <div  >
            <div className="details-container">
                <h2>Seller's Info:</h2>
                {user.map(el =>
                <div className="user-info">
                    <div>
                        <div>
                        {el.first_name} {el.last_name}
                        </div>
                        <div>
                        {el.mail}
                        </div>
                        <div>
                        {el.phone}
                        </div>
                        <div>
                        {el.city}
                        </div>
                    </div>
                    <div>
                        <div><button> Add offer</button></div>
                    </div>
                    
                </div>)}
                <h2>Offers:</h2>
                {cars && cars.map(car => (
                    <div className="offer">
                        <div key={car.id} className="offer-photo">
                            <div className="car-title">
                                {car.title} 
                            </div>
                            <div className='photo'>
                                <img className="car-img" src={car.image_url} alt="car"></img>
                            </div>
                            
                        </div>
                        <div className="offer-details">
                            <div className="car-data">
                                <div>{car.engine_size}cm³ | {car.horse_power}hp | {car.mileage} km | {car.production_year}yr </div>
                                <div>{car.wheel_drive} wheel-drive | {car.gearbox} | {car.fuel_type} </div>
                            </div>
                            <div className="price">
                                {car.price} zł
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
        
    )
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    const user = state.users.filter(user => user.id === id)
    const cars = state.cars.filter(car => car.owner_id === id)
    return {
        user: user,
        cars: cars
    }
};

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails))