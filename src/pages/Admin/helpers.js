import AdminSelect from './AdminSelect/AdminSelect';

export const filterCheck = (room, filter) => {
  const patternString = '.*' + filter + '.*';
  const pattern = new RegExp(patternString, 'gi');
  if (pattern.test(room.id) || pattern.test(room.name)) {
    return true;
  }
  return false;
};

export const getAllRooms = (matchingRooms, setMatchingRooms, filter) => {
  const allRooms = matchingRooms
    .filter((el) => filterCheck(el, filter))
    .map((room) => {
      return (
        <div key={room.id} className="option">
          <AdminSelect
            key={room.id}
            matchingRooms={matchingRooms}
            setMatchingRooms={setMatchingRooms}
            room={room}
          ></AdminSelect>
        </div>
      );
    });
  return allRooms;
};

export const createMatchingRooms = (rooms) => {
  const newRooms = rooms.map((room) => {
    return {
      id: room.id,
      name: room.name,
      floor: room.floor,
      contenteditable: 'false',
      edited: 'false',
    };
  });
  return newRooms;
};

export const editClickHandler = (id, matchingRooms, setMatchingRooms) => {
  const newRooms = matchingRooms;
  const roomToEdit = newRooms.find((room) => room.id === id);
  roomToEdit.contenteditable =
    roomToEdit.contenteditable === 'false' ? 'true' : 'false';
  setMatchingRooms([...newRooms]);
};

export const confirmClickHandler = (
  id,
  thisId,
  thisName,
  thisFloor,
  matchingRooms,
  setMatchingRooms
) => {
  const newRooms = matchingRooms;
  const roomToEdit = newRooms.find((room) => room.id === id);
  roomToEdit.contenteditable =
    roomToEdit.contenteditable === 'false' ? 'true' : 'false';
  roomToEdit.id = thisId;
  roomToEdit.name = thisName;
  roomToEdit.floor = thisFloor;
  setMatchingRooms([...newRooms]);
};

const getChangedRooms = (rooms, matchingRooms) => {
  console.log(rooms.length);
  const changedList = [];
  for (let i = 0; i < rooms.length; i++) {
    console.log(i);
    const room = rooms[i];
    const matchRoom = matchingRooms[i];
    if (
      room.id === matchRoom.id &&
      room.name === matchRoom.name &&
      room.floor === matchRoom.floor
    ) {
    } else {
      changedList.push(matchingRooms[i]);
    }
  }
  return changedList;
  // console.log(rooms[i], matchingRooms[i]);
};

const createRoomObject = (room, users) => {
  console.log({ room });
  console.log({ users });
  return {
    room: room.id,
    employeeId: users._id,
  };
};

export const submitHandler = (e, rooms, matchingRooms, users) => {
  e.preventDefault();
  const changedRooms = getChangedRooms(rooms, matchingRooms);
  const responseBody = changedRooms.map((room) => {
    return createRoomObject(room, users);
  });
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(responseBody),
  };
  console.log('Send PUT to /rooms with body:');
  console.log(responseBody);
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
//         id: room.id,
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
