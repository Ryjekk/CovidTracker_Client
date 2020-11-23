import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Admin from './pages/Admin/Admin';
import Business from './pages/Business/Business';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Privacy from './pages/Privacy/Privacy';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Rooms from './pages/Rooms/Rooms';
import XDevNav from './components/XDevNav/XDevNav';
// import Main from './components/Main/Main';

export const appContext = createContext();

const testRooms = [
  { roomId: 1, roomName: 'Technium', checked: false },
  { roomId: 2, roomName: 'BongoRoom', checked: false },
  { roomId: 3, roomName: 'Kitchen', checked: false },
  { roomId: 4, roomName: 'Office4', checked: false },
  { roomId: 5, roomName: 'Office5', checked: false },
  { roomId: 6, roomName: 'Office6', checked: false },
  { roomId: 7, roomName: 'Office7', checked: false },
  { roomId: 8, roomName: 'Office8', checked: false },
  { roomId: 9, roomName: 'Office9', checked: false },
  { roomId: 10, roomName: 'Office10', checked: false },
  { roomId: 11, roomName: 'Office11', checked: false },
  { roomId: 12, roomName: 'Office12', checked: false },
];

function App() {
  const [rooms, setRooms] = useState(testRooms);
  const [filter, setFilter] = useState('');

  return (
    <appContext.Provider
      value={{
        rooms,
        setRooms,
        filter,
        setFilter,
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
            </Switch>
          </div>
          {/* <Main></Main> */}
          <XDevNav></XDevNav>
          <Footer></Footer>
        </div>
      </Router>
    </appContext.Provider>
  );
}

export default App;
