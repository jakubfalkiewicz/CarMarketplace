import './App.css';
import CarsList from './CarsList';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import CarDetails from './CarDetails';
import CarEdit from './CarEdit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import UserCreate from './UserCreate';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import Backend from 'i18next-http-backend';
import languages from './config/languages';
import Storer from './Storer';

const language = languages.find(value => value === localStorage.getItem('language'));

i18next.use(Backend)
  .use(initReactI18next)
  .init({
    lng: language || 'en',
    fallbackLng: 'en',
    ns: [ 'main' ],
    defaultNS: 'main',
    react: {
      wait: true,
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  })


function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  }

  return (
    <div className="App">
      <Router>
        <div>
          <div className='wrapper'>
            <div className='header-container'>
              <header className="header">
                <div className='header-left'>
                  <div className='logo'></div>
                  <Link to="/cars" style={{textDecoration: 'none',color: "white"}}><div className='market'>
                    CarMarket
                  </div></Link>
                </div>
                <div className='navbar'>
                  <Link to="/cars" style={{textDecoration: 'none',color: "white"}}><div>{t('cars')}</div></Link>
                  <Link to="/sellers" style={{textDecoration: 'none',color: "white"}}><div>{t('sellers')}</div></Link>
                  <button onClick={() => changeLanguage('pl')}>ENG</button>
                  <button onClick={() => changeLanguage('es')}>ES</button>
                </div>
              </header>
            </div>
            <div className='cont'>
              <Storer/>
              <Switch className='content'>
                <Redirect exact from="/" to="/cars"/>
                <Route path="/cars" exact>
                  <CarsList/>
                </Route>
                <Route path="/cars/:id" exact>
                  <CarDetails/>
                </Route>
                <Route path="/cars/:id/edit" exact>
                  <CarEdit/>
                </Route>
                <Route path="/sellers" exact>
                  <UsersList/>
                </Route>
                <Route path="/addUser" exact>
                  <UserCreate/>
                </Route>
                <Route path="/addOffer" exact>
                  <CarEdit/>
                </Route>
                <Route path="/sellers/:id" exact>
                  <UserDetails/>
                </Route>
                <Route path="/sellers/:id/addOffer" exact>
                  <CarEdit/>
                </Route>
                <Route path="/sellers/:id/edit" exact>
                  <UserCreate/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div>
            Tel: 999888777
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
