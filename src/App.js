import './App.css';
import { createContext, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Admin from './pages/Admin/Admin';
import Business from './pages/Business/Business';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Privacy from './pages/Privacy/Privacy';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import RegisterAdmin from './pages/RegisterAdmin/index';
import Rooms from './pages/Rooms/Rooms.js';
import QRcreator from './pages/QRcreator/index';
import QRreader from './pages/QRreader/index';
import NotFound from './pages/NotFound/index';
import RetrievePassword from './pages/RetrievePassword/RetrievePassword';
const remote = require('./Remote/remote');

export const appContext = createContext();

const testRooms = [
  { _id: Object(), roomId: 1, name: 'Technium', floor: 1, checked: false },
  { _id: Object(), roomId: 2, name: 'BongoRoom', floor: 4, checked: false },
  { _id: Object(), roomId: 3, name: 'Kitchen', floor: 4, checked: false },
  { _id: Object(), roomId: 4, name: 'Office4', floor: 4, checked: false },
  { _id: Object(), roomId: 5, name: 'Office5', floor: 4, checked: false },
  { _id: Object(), roomId: 6, name: 'Office6', floor: 4, checked: false },
  { _id: Object(), roomId: 7, name: 'Office7', floor: 4, checked: false },
  { _id: Object(), roomId: 8, name: 'Office8', floor: 4, checked: false },
  { _id: Object(), roomId: 9, name: 'Office9', floor: 4, checked: false },
  { _id: Object(), roomId: 10, name: 'Office10', floor: 4, checked: false },
  { _id: Object(), roomId: 11, name: 'Office11', floor: 4, checked: false },
  { _id: Object(), roomId: 12, name: 'Office12', floor: 4, checked: false },
];

const testUser = {
  _id: 'Object(mongodb-Id?)',
  floor: 1,
  firstName: 'Trude',
  lastName: 'Hansen',
  email: 'email@gmail.com',
  password: 'password',
  companyId: 1,
  visits: [],
  inRisk: false,
  accessToken: '123456789',
};

function App() {
  const [rooms, setRooms] = useState(testRooms);
  const [users, setUser] = useState(testUser);
  const [filter, setFilter] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); //not sure we actually need this - but its convenient to determine whether to redirect when a user redirects or registers

  useEffect(() => {
    remote.getAllRooms(setRooms);
    console.log(localStorage.getItem('InfectionInspectionUser'));
    setUser(JSON.parse(localStorage.getItem('InfectionInspectionUser')));
  }, []);
  console.log(rooms);
  return (
    <appContext.Provider
      value={{
        rooms,
        setRooms,
        filter,
        setFilter,
        users,
        setUser,
        loggedIn,
        setLoggedIn,
      }}
    >
      <Router>
        <div className='App'>
          <div className='main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/rooms' component={Rooms} />
              <Route exact path='/privacy' component={Privacy} />
              <Route exact path='/business' component={Business} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/registerAdmin' component={RegisterAdmin} />
              <Route
                exact
                path='/retrievepassword'
                component={RetrievePassword}
              />
              <Route exact path='/admin' component={Admin} />
              <Route exact path='/creator' component={QRcreator} />
              <Route exact path='/reader' component={QRreader} />
              <Route path='/404' component={NotFound} />
              <Redirect to='/404' />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </appContext.Provider>
  );
}

export default App;
