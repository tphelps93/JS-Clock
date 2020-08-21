const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const minutes = now.getMinutes();
  const minDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(secondsDegrees, minDegrees, hoursDegrees);

  if (secondsDegrees === 90) {
    secondHand.style.transition = 'all 0.0s';
  } else {
    secondHand.style.transition = 'all 0.5s cubic-berzier(0.1, 2.7, 0.58, 1)';
  }
}

setInterval(setDate, 1000);

setDate();