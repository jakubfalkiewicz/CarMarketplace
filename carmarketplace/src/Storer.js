import { connect } from "react-redux";
import { getCarsList } from "./ducks/cars/actions";
import { getUsersList } from './ducks/users/actions';
import { useEffect} from "react";

const Storer = ({cars, sellers, getCarsList, getUsersList}) => {

    useEffect(() => {
        if (sellers.length === 0){
            console.log("USERS EMPTY")
            getUsersList()
        }
        if (cars.length === 0){
            console.log("CARS EMPTY")
            getCarsList()
        }
    },)

    return (
        null
    )

}

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        sellers: state.users,
    }
  };
  
  const mapDispatchToProps = {
    getUsersList,
    getCarsList
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Storer)