import Notiflix from 'notiflix';
let timerId = null;
let formValues = {};

const form = document.querySelector('.form');
const createBtn = document.querySelector('form > button')


form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay,amount ) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }

      if(position === amount) {
        createBtn.removeAttribute('disabled', '')
      }
    }, delay);
  });
}

function onFormSubmit(e) {
  e.preventDefault();
  createBtn.setAttribute('disabled', '')

  const formData = new FormData(e.currentTarget);

  for (let [name, value] of formData) {
    formValues[name] = value;
  }

  let delay = Number(formValues.delay);
  let step = Number(formValues.step);
  let amount = Number(formValues.amount);

  for (let position = 1; position <= amount; position += 1) {
   
    createPromise(position, delay,amount)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      })
   
    delay += step;
  
    
  }
  e.currentTarget.reset();
  
}