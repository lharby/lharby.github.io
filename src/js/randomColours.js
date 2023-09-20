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
    console.log(colours[rndColour]);
    console.log(document.documentElement.style.getPropertyValue('--selection-background'));
};

const attachClickEvent = () => {
    const menuOpen = DOM.querySelector('.menu__toggle');
    const menuClose = DOM.querySelector('.menu__toggle--close');
    menuOpen.click();
    menuClose.click();
};

export {
    setRandomColour,
    attachClickEvent
};
