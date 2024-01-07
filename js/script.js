const adviceId = document.querySelector('.adviceId');
const adviceText = document.querySelector('.adviceText');
const btn = document.querySelector('#btn');

btn.addEventListener('click', getAdvice)

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(body => {
    adviceId.innerText = 'Advice #' + body.slip.id;
    adviceText.innerText = `"${body.slip.advice}"`
  })
}

