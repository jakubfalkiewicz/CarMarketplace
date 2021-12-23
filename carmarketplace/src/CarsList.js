// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { getUserList } from "../actions/UserActions";

const CarsList = ({cars}, ) => {
    console.log(cars)

    return (
        <div className="offer-container">
            <h1> Cars List </h1>
            {cars && cars.map(car => (
                <div className="offer">
                    <div key={car.id} className="offer-photo">
                        <div className="car-title">
                            {car.title} 
                        </div>
                        <img src={car.image_url} alt="zdjecie" max-width='300px' height='150px'></img>
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
    )
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
};

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsList)