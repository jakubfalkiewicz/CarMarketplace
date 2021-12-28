import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const UserDetails = ({user, cars}, props) => {
    console.log(user)
    console.log(cars)
    return  (
        <div  >
            <div className="user-details-container">
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
                    
                </div>)}
                <h2>Offers:</h2>
                <div className="user-offers">
                {cars && cars.map(car => (
                    <Link to={`/cars/${car.id}`} style={{textDecoration: 'none',color: "white"}}>
                    <div className="offer">
                        
                        <div key={car.id} className="offer-photo">
                            <div className="car-title">
                                {car.title} 
                            </div>
                            <div className='photo'>
                                <img className="car-img" src={car.image_url} alt="car"></img>
                            </div>
                        </div>
                        <div className="spec-container-list">
                            <div className="car-spec">
                                <div>Year<div> {car.production_year} </div></div>
                                <div>Mileage<div> {car.mileage}km </div></div>
                                <div>Fuel<div> {car.fuel_type} </div></div>
                                <div>Gearbox<div> {car.gearbox} </div></div>
                            </div>
                            <div className="price">
                                {car.price}PLN
                            </div>
                        </div>
                       
                    </div>
                    </Link>
                    ))}

                </div>
                <div>
                <Link to={`/sellers/${user[0].id}/addOffer`}><button>ADD</button></Link>
                </div>
            </div>
        </div>
        
    )
}

const mapStateToProps = (state,props) => {
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

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails))