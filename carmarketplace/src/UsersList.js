// import { Link } from "react-router-dom";
import './App.css';
import { connect } from "react-redux";
// import { getUserList } from "../actions/UserActions";
import { filterUsersList, getUsersList } from "./ducks/users/actions";
import { ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const UsersList = ({users, filterUsersList, getUsersList} ) => {

    console.log(users)
    
    return (
        <div>
            <h1> Sellers List </h1>
            <div className='user-container'>
            {users && users.map(user => (
                <div className='user' >
                    <Link to={`/sellers/${user.id}`} style={{textDecoration: 'none',color: "white"}}><div>Name: {user.first_name} {user.last_name} </div><div>Phone: {user.phone}</div><div>Email: {user.mail}</div><div>City: {user.city}</div></Link>
                </div>))}
            </div>
            <footer className="footer">
                <div>
                    Tel: 999888777
                </div>
            </footer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)