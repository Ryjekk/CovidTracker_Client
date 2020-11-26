import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Admin from './Pages/Admin/Admin';
import Business from './Pages/Business/Business';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Privacy from './Pages/Privacy/Privacy';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import Rooms from './Pages/Rooms/Rooms';
import XDevNav from './Components/XDevNav/XDevNav';
import QRcreator from './Pages/QRcreator';
import QRreader from './Pages/QRreader';
// import Main from './components/Main/Main';

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
  token: '123456789',
};

function App() {
  const [rooms, setRooms] = useState(testRooms);
  const [users, setUser] = useState(testUser);
  const [filter, setFilter] = useState('');

  return (
    <appContext.Provider
      value={{
        rooms,
        setRooms,
        filter,
        setFilter,
        users,
        setUser,
      }}
    >
      <Router>
        <div className="App">
          <Header></Header>
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/rooms" component={Rooms} />
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/business" component={Business} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/creator" component={QRcreator} />
              <Route exact path="/reader" component={QRreader} />
            </Switch>
          </div>
          {/* <Main></Main> */}
          {/* <XDevNav></XDevNav> */}
          <Footer></Footer>
        </div>
      </Router>
    </appContext.Provider>
  );
}

export default App;
