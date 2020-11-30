const date = new Date();
console.log('Hours: ', date.getHours());
console.log('Minutes: ', date.getMinutes());
console.log('Seconds: ', date.getSeconds());
console.log('Date: ', date.getDate());
console.log('Month: ', date.getMonth());
console.log('Year: ', date.getFullYear());

const time = `${date.getHours()}:${date.getMinutes()}`;
const dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
console.log(time);
console.log(dateString);
