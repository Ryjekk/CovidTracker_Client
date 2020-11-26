import AdminSelect from './AdminSelect/AdminSelect';

export const filterCheck = (room, filter) => {
  const patternString = '.*' + filter + '.*';
  const pattern = new RegExp(patternString, 'gi');
  if (pattern.test(room.roomId) || pattern.test(room.name)) {
    return true;
  }
  return false;
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
  rooms,
  matchingRooms,
  setMatchingRooms
) => {
  const newRooms = matchingRooms;
  const roomToEdit = newRooms.find((room) => room.roomId === roomId);
  const originalRoom = rooms.find((room) => room._id === _id);
  console.log({ originalRoom });
  console.log('OG name: ', originalRoom.name);
  console.log('ThisNaame:', thisName);
  if (
    originalRoom.roomId !== thisId ||
    originalRoom.name !== thisName ||
    originalRoom.floor !== thisFloor
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
  // Might add userId to show who edited the room.
  return {
    _id: room._id,
    roomId: room.roomId,
    name: room.name,
    floor: room.floor,
  };
};

export const submitHandler = (e, matchingRooms, users) => {
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

export const testFunction = (room, room2) => {
  console.log({ room });
  console.log({ room2 });
  console.log(room._id === room2._id);
};
