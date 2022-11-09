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

const attachClickEvent = () => {
    const edge = DOM.querySelector('.edge');
    edge.click();
};

export { setRandomColour, attachClickEvent };
