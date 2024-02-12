/* :::: MUYBRIDGE HORSE ::::  */

const horses = document.querySelector('.horse');
const image = document.querySelectorAll('.img');

const speedRange = document.querySelector('#speed');
const speedRangeValueText = document.querySelector('#speedRangeText');

const frameOne = document.querySelector('.frame_01');
const frameTwo = document.querySelector('.frame_02');
const frameThree = document.querySelector('.frame_03');
const frameFour = document.querySelector('.frame_04');
const frameFive = document.querySelector('.frame_05');
const frameSix = document.querySelector('.frame_06');

const frameSeven = document.querySelector('.frame_07');
const frameEight = document.querySelector('.frame_08');
const frameNine = document.querySelector('.frame_09');
const frameTen = document.querySelector('.frame_10');
const frameEleven = document.querySelector('.frame_11');
const frameTwelve = document.querySelector('.frame_12');
const frameThirteen = document.querySelector('.frame_13');


let speed = 0;

let counter = 0;

speedRange.addEventListener('input', () => {
    speedRangeValueText.innerText = `${speedRange.value}`;
    console.log("Speed: ", speedRange.value)
});

speed = speedRange.value;


setInterval(() => {

    counter++

    if (counter > 12) {
        counter = 1;
    }


    switch (counter) {

        case counter = 1: frameOne.classList.add('showHorse')
            frameTwelve.classList.remove('showHorse');
            break;

        case counter = 2: frameTwo.classList.add('showHorse')
            frameOne.classList.remove('showHorse');
            break;

        case counter = 3: frameThree.classList.add('showHorse')
            frameTwo.classList.remove('showHorse');
            break;

        case counter = 4: frameFour.classList.add('showHorse')
            frameThree.classList.remove('showHorse');
            break;

        case counter = 5: frameFive.classList.add('showHorse');
            frameFour.classList.remove('showHorse');
            break;

        case counter = 6: frameSix.classList.add('showHorse');
            frameFive.classList.remove('showHorse');
            break;
        case counter = 7: frameSeven.classList.add('showHorse');
            frameSix.classList.remove('showHorse');
            break;

        case counter = 8: frameEight.classList.add('showHorse');
            frameSeven.classList.remove('showHorse');
            break;

        case counter = 9: frameNine.classList.add('showHorse');
            frameEight.classList.remove('showHorse');
            break;

        case counter = 10: frameTen.classList.add('showHorse');
            frameNine.classList.remove('showHorse');
            break;

        case counter = 11: frameEleven.classList.add('showHorse');
            frameTen.classList.remove('showHorse');
            break;

        case counter = 12: frameTwelve.classList.add('showHorse');
            frameEleven.classList.remove('showHorse');
            break;

        case counter = 12: frameThirteen.classList.add('showHorse');
            frameTwelve.classList.remove('showHorse');
            break;
    }

    console.log(counter);

}, speed);
