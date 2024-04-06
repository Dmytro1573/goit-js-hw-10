'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = event.currentTarget.elements.delay.value;
  const checkState = event.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(delay, checkState);
      if (checkState === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59a10d',
        maxWidth: '383px',
        progressBar: true,
        messageColor: '#fff',
      });
    })
    .catch(error => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        maxWidth: '302px',
        progressBar: true,
        messageColor: '#fff',
      });
    });
  form.reset();
});
