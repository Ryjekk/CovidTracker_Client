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
      console.log(accessToken, id);
      console.log(res.data, 'inside getuserdata');
      cb(res.data[0]);
    });
};
getUserData(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmM1MTIzYjJmNzE1NTA3YTljYzAyNWMiLCJpYXQiOjE2MDY3NjQzNTAsImV4cCI6MTYwNjg1MDc1MH0.J_rjgOgfUmJcRsH4dKCIASVm3s_FMEBrecMyO_NSLks',
  '5fc5123b2f715507a9cc025c',
  data => {
    console.log(data);
  }
);
// /rooms:
// export const addRoomsToUser = async (body, user) => {
//   const url = `${serverUrl}/users/visitedrooms`;
//   const res = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-access-token': user.accessToken,
//     },
//     body: JSON.stringify(body),
//   });
//   return res.status;
// };

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

const testUser = {
  email: 'sdeferger@hotmail.com',
  firstName: 'theFirst',
  lastName: 'thelast',
  password: 'somepassword',
  companyId: 1,
  floor: 2,
  role: 'admin',
};

const logger = info => {
  console.log(info.data);
};

module.exports = {
  login,
  register,
  addRoomsToUser,
  getAllRooms,
  getUserData,
};
