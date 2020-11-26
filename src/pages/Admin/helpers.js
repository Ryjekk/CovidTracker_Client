import AdminSelect from './AdminSelect/AdminSelect';

export const filterCheck = (room, filter) => {
  const patternString = '.*' + filter + '.*';
  const pattern = new RegExp(patternString, 'gi');
  if (pattern.test(room.roomId) || pattern.test(room.name)) {
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
      _id: room._id,
      roomId: room.roomId,
      name: room.name,
      floor: room.floor,
      contentEditable: 'false',
      edited: 'false',
    };
  });
  return newRooms;
};

export const editClickHandler = (roomId, matchingRooms, setMatchingRooms) => {
  const newRooms = matchingRooms;
  const roomToEdit = newRooms.find((room) => room.roomId === roomId);
  roomToEdit.contentEditable =
    roomToEdit.contentEditable === 'false' ? 'true' : 'false';
  setMatchingRooms([...newRooms]);
};

export const confirmClickHandler = (
  _id,
  roomId,
  thisId,
  thisName,
  thisFloor,
  matchingRooms,
  setMatchingRooms
) => {
  const newRooms = matchingRooms;
  const roomToEdit = newRooms.find((room) => room.roomId === roomId);
  if (
    roomToEdit.roomId !== thisId ||
    roomToEdit.name !== thisName ||
    roomToEdit.floor !== thisFloor
  ) {
    roomToEdit.edited = 'true';
  } else {
    roomToEdit.edited = 'false';
  }

  roomToEdit._id = _id;
  roomToEdit.contentEditable =
    roomToEdit.contentEditable === 'false' ? 'true' : 'false';
  roomToEdit.roomId = thisId;
  roomToEdit.name = thisName;
  roomToEdit.floor = thisFloor;

  setMatchingRooms([...newRooms]);
};

const createRoomObject = (room, users) => {
  // Might add uuserId to show who edited the room.
  return {
    _id: room._id,
    roomId: room.roomId,
    name: room.name,
    floor: room.floor,
  };
};

export const submitHandler = (e, rooms, matchingRooms, users) => {
  e.preventDefault();
  const changedRooms = matchingRooms.filter((room) => room.edited === 'true');
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
