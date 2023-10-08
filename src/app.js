import styles from './scss/main.scss';

import './js/global';
import { siteResponsiveness } from './js/utils';
import entry from './js/entry';
import { indexPage } from './js/indexPage';
import { navigation } from './js/navigation';
import { loadIndexPageContent } from './js/loadIndexPageContent';
import date from './js/date';
import toggleContrast from './js/toggleContrast';
import obfuscateEmail from './js/obfuscateEmail';
import appendForm from './js/appendForm';
import getScrollbarWidth from './js/getScrollbarWidth';
import { setImageSource } from './js/lazyLoad';
import { setRandomColour, attachClickEvent } from './js/randomColours';

import { DOM, WRAPPER, site } from './js/global';

const initOnceFunctions = () => {
    siteResponsiveness();
    entry();
    indexPage();
    loadIndexPageContent();
    navigation();
    date();
    getScrollbarWidth();
    toggleContrast();
    initDynamicFunctions();
};

const initDynamicFunctions = () => {
    obfuscateEmail();
    if (!site.isMobile) {
        setImageSource();
    }
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

export { initDynamicFunctions };
