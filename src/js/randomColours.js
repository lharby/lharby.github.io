/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* random colours function */
import { DOM } from './global';

const colours = [
    '#ee4800',
    '#60c600',
    '#00ffff',
    '#ff7f00',
    '#ff6ccc',
    '#848382',
    '#d2dd26',
];

const rndColour = Math.floor(Math.random() * colours.length);

const setRandomColour = () => {
    document.documentElement.style.setProperty(
        '--selection-background',
        colours[rndColour]
    );
};

const attachEvent = () => {
    const element = document.querySelector('.edge');
    element.addEventListener('mouseover', function () {
        console.log('Event triggered');
    });
    const event = new MouseEvent('mouseover', {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    element.dispatchEvent(event);
};

export { setRandomColour, attachEvent };
