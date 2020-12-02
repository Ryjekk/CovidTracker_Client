import axios from 'axios';
const serverUrl = 'http://192.168.8.111:8080/api';

export const submitChanges = async (body, user) => {
  const url = `${serverUrl}/rooms`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': user.accessToken,
    },
  };
  try {
    const response = await axios.put(url, body, options);
    return response.status;
  } catch (err) {
    console.log('Something went wrong:', err);
  }
};

export const addRooms = async (body, user) => {
  const url = `${serverUrl}/rooms`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': user.accessToken,
    },
  };
  try {
    const response = await axios.post(url, body, options);
    return response.status;
  } catch (err) {
    console.log('Something went wrong:', err);
  }
};

export const deleteRooms = async (body, user) => {
  const url = `${serverUrl}/rooms`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': user.accessToken,
    },
    data: body,
  };

  try {
    const response = await axios.delete(url, options);
    console.log(response.data);
    return response.status;
  } catch (err) {
    console.log('Something went wrong:', err);
  }
};
