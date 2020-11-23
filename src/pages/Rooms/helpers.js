import RoomSelect from '../../components/RoomSelect/RoomSelect';

const filterCheck = (room, filter) => {
  const patternString = '.*' + filter + '.*';
  const pattern = new RegExp(patternString, 'gi');
  if (pattern.test(room.roomId) || pattern.test(room.roomName)) {
    return true;
  }
  return false;
};

export const getAllRooms = (rooms, setRooms, filter, value) => {
  const allRooms = rooms
    .filter((el) => filterCheck(el, filter))
    .filter((el) => el.checked === value)
    .map((room) => {
      return (
        <RoomSelect
          key={room.roomId}
          rooms={rooms}
          setRooms={setRooms}
          room={room}
        ></RoomSelect>
      );
    });
  return allRooms;
};

export const getCheckedRooms = (rooms, setRooms, filter, value) => {
  const checkedRooms = rooms
    .filter((el) => el.checked === value)
    .map((room) => {
      return (
        <RoomSelect
          key={room.roomId}
          rooms={rooms}
          setRooms={setRooms}
          room={room}
        ></RoomSelect>
      );
    });
  return checkedRooms;
};

export const submitHandler = (e, rooms) => {
  e.preventDefault();
  console.log(rooms.filter((room) => room.checked));
  console.log('SubmitHandler not implemented further');
  // send request
  // reset search
};

//OLD SUBMITHANDLER
// const submitHandler = (e) => {
//   e.preventDefault();
//   console.log('About to fetch!');
//   const payload = {};
//   payload.personId = 3;
//   payload.rooms = rooms
//     .filter((room) => room.checked)
//     .map((room) => {
//       return {
//         roomId: room.roomId,
//         time: '14:45',
//       };
//     });
//   console.log({ payload });
//   const requestOptions = {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   };
//   fetch('http://localhost:8080/api/employeeModel', requestOptions)
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// };
