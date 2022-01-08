// import { Link } from "react-router-dom";
import './App.css';
import { connect } from "react-redux";
// import { getUserList } from "../actions/UserActions";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsersList } from './ducks/users/actions';
import { useTranslation } from 'react-i18next';

const UsersList = ({users, cars, filterUsersList, getUsersList} ) => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (users.length == 0){
            getUsersList()
        }
    })
    
    return (
        <div className='user-list'>
            <h1> {t('sellers')} {t('list')} </h1>
            <div className='user-container'>
            {users && users.map(user => (
                <Link to={`/sellers/${user.id}`} className='user' style={{textDecoration: 'none',color: "black"}}>
                    <div>
                        <div>{t('name')}: {user.first_name} {user.last_name} </div>
                        <div>{t('phone')}: {user.phone}</div>
                        <div>Email: {user.mail}</div>
                        <div>{t('city')}: {user.city}</div>
                    </div>
                    <div className='user-cars'>
                        <img src="http://www.mcicon.com/wp-content/uploads/2021/01/Transport_Car_1-copy-22.jpg" width="50px" height="50px" alt="logo"></img>
                        <div style={{color: "black"}}>{cars.filter(car => car.owner_id === user.id).length}</div>
                    </div>
                    </Link>))}
            </div>
            <div>
                <Link to={`/addUser`}><div id="outer">
                        <div class="button_slide slide_diagonal green">{t('add')} {t('seller')}</div>
                    </div></Link>
                </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        cars: state.cars
    }
};

const mapDispatchToProps = {
    getUsersList
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)