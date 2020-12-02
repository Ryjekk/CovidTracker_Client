const qs = require('querystring');
// Fetching functions in here
const axios = require('axios');
const serverUrl = 'http://localhost:8080/api';

//this is not nice data.data
const login = (userCredentials, cb) => {
  axios
    .post(`${serverUrl}/users/login`, qs.stringify(userCredentials))
    .then(res => {
      console.log(res.data.user);

      cb(res.data);
    })
    .catch(error => {
      alert('bad credentials');
      console.log(error.message);
    });
};

const register = (user, cb) => {
  axios.post(`${serverUrl}/users/register`, qs.stringify(user)).then(res => {
    cb(res);
  });
};

const getUserData = (accessToken, id, cb) => {
  axios
    .get(`${serverUrl}/users/${id}`, {
      headers: {
        'x-access-token': accessToken,
      },
    })
    .then(res => {
      console.log('heii');
      console.log(res.data[0]);
      localStorage.setItem(
        'InfectionInspectionUser',
        JSON.stringify(res.data[0])
      );

      cb(res.data[0]);
    });
};

const addRoomsToUser = (id, roomArray, cb) => {
  const data = { id, roomArray };
  axios.put(
    `${serverUrl}/users/visitedrooms`,
    qs.stringify(data).then(res => {
      cb(res.data);
    })
  );
};

const getAllRooms = cb => {
  axios.get(serverUrl + '/rooms').then(res => {
    const rooms = res.data.map(room => {
      room.checked = false;
      return room;
    });
    cb(rooms);
  });
};

const deleteRoom = (roomId, user, cb) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': user.accessToken,
    },
  };
  const roomsAndId = {
    _id: user._id,
    rooms: roomId,
  };
  axios
    .put(serverUrl + '/users/deletevisitedrooms', roomsAndId, options)
    .then(res => {
      console.log(res.data);
      cb(res.data);
    });
};

module.exports = {
  login,
  register,
  addRoomsToUser,
  getAllRooms,
  getUserData,
  deleteRoom,
};
