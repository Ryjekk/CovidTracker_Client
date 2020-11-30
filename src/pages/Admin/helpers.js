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

const createRoomObject = (room) => {
  // Might add userId to show who edited the room.
  return {
    _id: room._id,
    roomId: room.roomId,
    name: room.name,
    floor: room.floor,
  };
};

export const submitHandler = (e, matchingRooms, users, setFilter) => {
  e.preventDefault();
  setFilter('');
  const changedRooms = matchingRooms.filter((room) => room.edited === 'true');
  const responseBody = {};
  responseBody.user = users._id;
  responseBody.rooms = changedRooms.map((room) => {
    return createRoomObject(room, users);
  });
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(responseBody),
  };
  console.log('Send PUT to /rooms with body:');
  console.log({ responseBody });
};

export const deleteRoomHandler = (_id, rooms, users, setShowModal) => {
  setShowModal(false);
  console.log({ rooms });
  const responseBody = {};
  responseBody.rooms = [_id];
  responseBody.user = users._id;
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(responseBody),
  };
  console.log('DELETE to /rooms with payload:');
  console.log({ responseBody });
  // await request. If succeessfull:
  // refetch room
};

const resetAdminPage = (setFilter, setShowModal) => {
  setFilter('');
  setShowModal(false);
};
export const newRoomSubmitHandler = (
  e,
  newRoomId,
  newRoomName,
  newRoomFloor,
  setFilter,
  setShowModal,
  setRooms,
  rooms,
  users
) => {
  e.preventDefault();
  const newRoom = [
    {
      roomId: newRoomId,
      name: newRoomName,
      floor: newRoomFloor,
    },
  ];
  const responseBody = {};
  responseBody.user = users._id;
  responseBody.rooms = newRoom;
  console.log({ responseBody });
  //Get back 200 code, refetch rooms
  resetAdminPage(setFilter, setShowModal);
};
