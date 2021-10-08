/* eslint-disable no-unused-vars */
/* eslint-disable func-style */

/* eslint-disable require-jsdoc */

function createCarousel(slidesCount = 5) {
    // createContainer();
    container = document.querySelector('#carousel');

    createSlides(slidesCount);
    createIndicators(slidesCount);
    createControls();
    addStyle();
    addIndicatorEvents();
}

createCarousel(4);


var container = null;
var previuosIndicator;

function createContainer() {
    container = document.createElement('div');
    container.setAttribute('id', 'carousel');
    container.setAttribute('class', 'carousel');
    document.querySelector('body').appendChild(container);
}

function createSlides(num) {
    var slidesContainer = document.createElement('ul');
    slidesContainer.setAttribute('class', 'slides');

    for (i = 0; i < num; i++) {
        var slide = document.createElement('li');
        var slideClassName;
        if (i === 0) {
            slideClassName = 'slides__item active';
        } else {
            slideClassName = 'slides__item';
        }
        slide.setAttribute('class', slideClassName);

        var slideLink = document.createElement('a');
        slideLink.setAttribute('href', '#');
        slide.appendChild(slideLink);
        slidesContainer.appendChild(slide);
    }
    container.appendChild(slidesContainer);
}

function createIndicators(num) {
    var indicatorsContainer = document.createElement('div');
    indicatorsContainer.setAttribute('class', 'indicators');

    for (var i = 0; i < num; i++) {
        var indicatorsItem = document.createElement('span');
        var indicatorClassName;
        if (i === 0) {
            indicatorClassName = 'indicators__item active';
        } else {
            indicatorClassName = 'indicators__item';
        }
        indicatorsItem.setAttribute('class', indicatorClassName);
        indicatorsItem.setAttribute('data-slide-to', i);

        indicatorsContainer.appendChild(indicatorsItem);
    }
    container.appendChild(indicatorsContainer);
}

function createControls() {
    var controlsContainer = document.createElement('div');
    controlsContainer.setAttribute('class', 'controls');

    var controlPrev = document.createElement('div');
    var controlNext = document.createElement('div');
    var controlPause = document.createElement('div');
    var iconPrev = document.createElement('i');
    var iconNext = document.createElement('i');
    var iconPause = document.createElement('i');

    controlPrev.setAttribute('class', 'controls__item controls__prev');
    iconPrev.setAttribute('class', 'fas fa-chevron-left');
    controlPrev.appendChild(iconPrev);
    controlsContainer.appendChild(controlPrev);

    controlNext.setAttribute('class', 'controls__item controls__next');
    iconNext.setAttribute('class', 'fas fa-chevron-right');
    controlNext.appendChild(iconNext);
    controlsContainer.appendChild(controlNext);

    controlPause.setAttribute('class', 'controls__item controls__pause');
    iconPause.setAttribute('class', 'fas fa-play');
    controlPause.appendChild(iconPause);
    controlsContainer.appendChild(controlPause);

    container.appendChild(controlsContainer);
}

function addStyle() {
    var styleContainer = document.createElement('style');
    styleContainer.innerHTML = `
    .controls,
    .slides {
      position: relative;
    }
    
    .indicators {
      display: flex;
    }
    `;
    container.appendChild(styleContainer);
}

function addIndicatorEvents() {
    var indicatorsContainer = document.querySelector('.indicators');
    indicatorsContainer.addEventListener('click', indicatorsHandler);
}

function indicatorsHandler(e) {
    var target = e.target;
    if (target.classList.contains('indicators__item')) {
        target.style.backgroundColor = 'red';

        if (previuosIndicator !== null) {
            previuosIndicator.removeAttribute('style');
        }
        previuosIndicator = target;
    }
}
