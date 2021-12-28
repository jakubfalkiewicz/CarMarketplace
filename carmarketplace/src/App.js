import './App.css';
import CarsList from './CarsList';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import CarDetails from './CarDetails';
import CarForm from './CarForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <div className='wrapper'>
          <header className="header">
            <div className='header-left'>
              <div className='logo'></div>
              <Link to="/cars" style={{textDecoration: 'none',color: "white"}}><div className='market'>
                CarMarket
              </div></Link>
            </div>
            
            <div className='navbar'>
              <Link to="/cars" style={{textDecoration: 'none',color: "white"}}><div>Cars</div></Link>
              <Link to="/sellers" style={{textDecoration: 'none',color: "white"}}><div>Sellers</div></Link>
            </div>
          </header>
          <div className='cont'>
            <div className='content'>
            <Redirect exact from="/" to="/cars"/>
            <Route path="/cars" exact>
              <CarsList/>
            </Route>
            <Route path="/cars/:id" exact>
              <CarDetails/>
            </Route>
            <Route path="/sellers" exact>
              <UsersList/>
            </Route>
            <Route path="/sellers/:id" exact>
              <UserDetails/>
            </Route>
            <Route path="/sellers/:id/addOffer" exact>
              <CarForm/>
            </Route>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div>
            Tel: 999888777
          </div>
        </footer>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
