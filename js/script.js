let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

let interval;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let date = new Date();
let year = date.getFullYear();
let eventDay = new Date(year, 12);

const countDownFunction = () => {
  const today = new Date();
  const timeSpan = eventDay - today;

  const format = (time) => {
    return time < 10 ? '0' + time : time;
  };

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  dayField.innerHTML = format(days);
  hourField.innerHTML = format(hours);
  minuteField.innerHTML = format(minutes);
  secondField.innerHTML = format(seconds);
};

interval = setInterval(countDownFunction, second);
