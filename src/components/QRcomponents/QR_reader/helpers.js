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

export const handleScan = (data, user, setScanResult) => {
  console.log(user._id);
  if (data) {
    const responseBody = {
      _id: user._id,
      rooms: [],
    };
  } else {
    console.log('False');
  }
  console.log(data);
  if (data) {
    setScanResult(data);
  }
};
export const handleError = (err) => {
  console.error(err);
  setScanError(err.message);
};
