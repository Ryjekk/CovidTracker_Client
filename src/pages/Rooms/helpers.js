import RoomSelect from '../../Components/RoomsComponents/RoomSelect/RoomSelect';
import { addRoomsToUser } from './remote';
import { getAllRooms as reFetch, getUserData } from '../../Remote/remote';

const filterCheck = (room, filter) => {
  const patternString = '.*' + filter + '.*';
  const pattern = new RegExp(patternString, 'gi');
  if (pattern.test(room.roomId) || pattern.test(room.name)) {
    return true;
  }
  return false;
};

export const getRooms = (rooms, setRooms, filter) => {
  const allRooms = rooms
    .filter((el) => filterCheck(el, filter))
    .map((room) => {
      return (
        <div key={room.roomId} className="option">
          <RoomSelect
            key={room.roomId}
            rooms={rooms}
            setRooms={setRooms}
            room={room}
          ></RoomSelect>
        </div>
      );
    });
  return allRooms;
};

const createUserObject = (room, users) => {
  const date = new Date();
  const time = '00:00'; // `${date.getHours()}:${date.getMinutes()}`;
  const dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return {
    _id: room._id,
    date: dateString,
    time: time,
  };
};

// const format = {
//   _id: 'userId',
//   rooms: [{ _id: 'room_id', date: 'something', time: 'something' }],
// };

export const submitHandler = async (
  e,
  rooms,
  setRooms,
  users,
  setFilter,
  setUser
) => {
  e.preventDefault();

  const checkedRooms = rooms.filter((room) => room.checked);
  const responseBody = {};
  responseBody._id = users._id;
  responseBody.rooms = checkedRooms.map((room) => {
    return createUserObject(room, users);
  });
  const responseCode = await addRoomsToUser(responseBody, users);
  if (responseCode === 200) {
    setFilter('');
    reFetch(setRooms);
    console.log(users.accessToken, 'inside submithandler');
    getUserData(users.accessToken, users._id, setUser);
  }
};
