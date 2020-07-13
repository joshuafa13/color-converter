const redInput = document.querySelector('.r-input');
const greenInput = document.querySelector('.g-input');
const blueInput = document.querySelector('.b-input');
const hexColorBox = document.querySelector('.hex-color-box');
const convertButton = document.querySelector('.btn');
const hexCode = document.querySelector('.hex-color-code');

convertButton.addEventListener('click', (event) => {
  console.log(event.target);
  let redInputCode = Number(redInput.value).toString(16);
  let greenInputCode = Number(greenInput.value).toString(16);
  let blueInputCode = Number(blueInput.value).toString(16);

  let redCode = event.target.parentElement.children[0].children[2];
  redCode.style.background = `#${redInputCode.padStart(2, '0')}0000`;
  let greenCode = event.target.parentElement.children[1].children[2];
  greenCode.style.background = `#00${greenInputCode.padStart(2, '0')}00`;
  let blueCode = event.target.parentElement.children[2].children[2];
  blueCode.style.background = `#0000${blueInputCode.padStart(2, '0')}`;

  hexColorBox.style.background = `#${redInputCode.padStart(
    2,
    '0'
  )}${greenInputCode.padStart(2, '0')}${blueInputCode.padStart(2, '0')}`;

  hexCode.innerHTML = `#${redInputCode.padStart(
    2,
    '0'
  )}${greenInputCode.padStart(2, '0')}${blueInputCode.padStart(2, '0')}`;
});
