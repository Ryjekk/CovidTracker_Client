import { submitChanges } from './remote.js';
import { getAllRooms as reFetch } from '../../remote/remote';
import { addRooms, deleteRooms } from './remote.js';

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
  return {
    _id: room._id,
    roomId: room.roomId,
    name: room.name,
    floor: room.floor,
  };
};

export const submitHandler = async (
  e,
  matchingRooms,
  users,
  setFilter,
  setRooms
) => {
  e.preventDefault();
  const changedRooms = matchingRooms.filter((room) => room.edited === 'true');
  const responseBody = {};
  responseBody.user = users._id;
  responseBody.rooms = changedRooms.map((room) => {
    return createRoomObject(room);
  });
  const responseCode = await submitChanges(responseBody, users);
  if (responseCode === 200) {
    setFilter('');
    reFetch(setRooms);
  }
};

export const deleteRoomHandler = async (
  _id,
  rooms,
  users,
  setShowModal,
  setRooms
) => {
  setShowModal(false);
  const responseBody = {};
  responseBody.rooms = [_id];
  responseBody.user = users._id;
  const responseCode = await deleteRooms(responseBody, users);
  if (responseCode === 200) {
    reFetch(setRooms);
  }
};

const resetAdminPage = (setFilter, setShowModal) => {
  setFilter('');
  setShowModal(false);
};
export const newRoomSubmitHandler = async (
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
  const responseBody = {};
  responseBody.rooms = [
    {
      roomId: newRoomId,
      name: newRoomName,
      floor: newRoomFloor,
    },
  ];
  responseBody.user = users._id;
  const responseCode = await addRooms(responseBody, users);
  if (responseCode === 200) {
    reFetch(setRooms);
    resetAdminPage(setFilter, setShowModal);
  }
};
