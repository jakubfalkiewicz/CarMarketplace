import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addOwnerAction,editCar } from "./ducks/cars/actions";
import { useState } from "react";



const AddOwner = ({addOwnerAction, editCar, users, car}, props) => {

    const [seller,setSeller] = useState('')

    return (
        <div>
            <div>
                <h1> Choose owner:</h1>
                <div>
                {users && users.map(user => (
                    <div key={user.id}>
                        <div onClick={() => setSeller(user)} id={user.id}>
                            
                            <div>{user.first_name} {user.last_name}</div>
                                                  
                        </div>
                    </div>))}
                </div>
                <div className="chosen">{seller && <div>Chosen: {seller.first_name} {seller.last_name}</div>}</div>
                <button onClick={() => editCar({...car,owner_id: seller.id})}> Add owner </button>
                <Link to="/cars"><button>Back to List</button></Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
};

const mapDispatchToProps = {
    addOwnerAction,
    editCar
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOwner)