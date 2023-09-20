import styles from './scss/main.scss';

import './js/global';
import { siteResponsiveness } from './js/utils';
import { navigation } from './js/navigation';
import { router } from './js/router';
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
    router();
    date();
    entry();
    getScrollbarWidth();
    toggleContrast();
    if (!site.isMobile) {
        setImageSource();
    }
    initDynamicFunctions();
};

const initDynamicFunctions = () => {
    obfuscateEmail();
    router();
    if (DOM.classList.contains('high-contrast')) {
        setRandomColour();
        setTimeout(attachClickEvent, 100);
    }
    if (WRAPPER.classList.contains('contact')) {
        appendForm();
    }
};

// global
$(document).ready(() => {
    initOnceFunctions();
});

export {
    initDynamicFunctions,
};