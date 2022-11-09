import styles from './scss/main.scss';

import './js/global';
import navigation from './js/navigation';
import indexPage from './js/indexPage';
import date from './js/date';
import toggleContrast from './js/toggleContrast';
import obfuscateEmail from './js/obfuscateEmail';
import appendForm from './js/appendForm';
import getScrollbarWidth from './js/getScrollbarWidth';
import { setImageSource } from './js/lazyLoad';
import { setRandomColour } from './js/randomColours';

import { DOM } from './js/global';

// global
$(document).ready(() => {
    navigation();
    indexPage();
    date();
    getScrollbarWidth();
    setImageSource();
    toggleContrast();
    obfuscateEmail();
    if (DOM.classList.contains('contact')) {
        appendForm();
    }
    if (DOM.classList.contains('high-contrast')) {
        setTimeout(setRandomColour, 100);
    }
});
