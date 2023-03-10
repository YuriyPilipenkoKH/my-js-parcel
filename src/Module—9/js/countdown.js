import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';



const refs = {
    startBtn: document.querySelector('button[data-start]'),
    input: document.querySelector('#datetime-picker'),
    daysLabel: document.querySelector('span[data-days]'),
    hoursLabel: document.querySelector('span[data-hours]'),
    minutesLabel: document.querySelector('span[data-minutes]'),
    secondsLabel: document.querySelector('span[data-seconds]'),
};

  
  refs.startBtn.addEventListener('click', onStartClick);
  refs.startBtn.disabled = true;


  // refs.input.type = 'password';
  // refs.input.setAttribute('type', 'datetime-local')

console.log(refs.input)
console.log(refs.input.type)
  
const options = {
 
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
  
      const selectedDatesUTC = selectedDates[0].getTime();
      const dateNow = Date.now();

      // console.log(selectedDatesUTC);
      // console.log(dateNow);
  
      if (selectedDatesUTC <= dateNow) {
        Notiflix.Notify.failure('Please choose a date in the future');
      } else refs.startBtn.disabled = false;
    },
};
  // 
  
  flatpickr('input#datetime-picker', options);
  const fp = document.querySelector('input#datetime-picker')._flatpickr;
  
  function timerStart() {
    const timeId = setInterval(() => {
      const timeNow = Date.now();
      const timeSelect = fp.selectedDates[0].getTime();
      const delay = timeSelect - timeNow;
      const timeDelay = convertMs(delay);
      updateClockContent(timeDelay);

    
  
      const { days, hours, minutes, seconds } = timeDelay;
  
      if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
        clearInterval(timeId);
        refs.input.disabled = false;
      }
    }, 1000);
  }
  
  function onStartClick() {
    timerStart();
    refs.startBtn.disabled = true;
    refs.input.disabled = true;
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  
  function updateClockContent({ days, hours, minutes, seconds }) {
    refs.daysLabel.innerText = `${days}`;
    refs.hoursLabel.innerText = `${hours}`;
    refs.minutesLabel.innerText = `${minutes}`;
    refs.secondsLabel.innerText = `${seconds}`;
  }
  
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );
  
    return { days, hours, minutes, seconds };
  }