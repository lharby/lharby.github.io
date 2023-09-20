import styles from './scss/main.scss';

import './js/global';
import { siteResponsiveness } from './js/utils';
import navigation from './js/navigation';
import indexPage from './js/indexPage';
import date from './js/date';
import entry from './js/entry';
import toggleContrast from './js/toggleContrast';
import obfuscateEmail from './js/obfuscateEmail';
import appendForm from './js/appendForm';
import getScrollbarWidth from './js/getScrollbarWidth';
import { setImageSource } from './js/lazyLoad';
import { setRandomColour, attachClickEvent } from './js/randomColours';

import { DOM, WRAPPER, site } from './js/global';

const initOnceFunctions = () => {
    siteResponsiveness();
    navigation();
    indexPage();
    date();
    entry();
    getScrollbarWidth();
    toggleContrast();
    obfuscateEmail();
    if (!site.isMobile) {
        setImageSource();
    }
    if (DOM.classList.contains('contact')) {
        appendForm();
    }
    if (DOM.classList.contains('high-contrast')) {
        setRandomColour();
        setTimeout(attachClickEvent, 100);
    }
}

const initDynamicFunctions = () => {
    obfuscateEmail();
    if (DOM.classList.contains('high-contrast')) {
        setRandomColour();
        setTimeout(attachClickEvent, 100);
    }
    if (WRAPPER.classList.contains('contact')) {
        appendForm();
    }
}

// global
$(document).ready(() => {
    initOnceFunctions();
});

export {
    initDynamicFunctions,
};