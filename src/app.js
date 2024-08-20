import styles from './scss/main.scss';

import './js/global';
import { siteResponsiveness } from './js/utils';
import { indexPage } from './js/indexPage';
import entry from './js/entry';
import { navigation } from './js/navigation';
import { loadIndexPageContent } from './js/loadIndexPageContent';
import date from './js/date';
import toggleContrast from './js/toggleContrast';
import obfuscateEmail from './js/obfuscateEmail';
import appendForm from './js/appendForm';
import getScrollbarWidth from './js/getScrollbarWidth';
import { setImageSource } from './js/lazyLoad';
import { setRandomColour } from './js/randomColours';
import { accordion } from './js/accordion';
import { postsArchive } from './js/postsArchive';

import { DOM, WRAPPER, site } from './js/global';

const initOnceFunctions = () => {
    siteResponsiveness();
    indexPage();
    entry();
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
    }
    if (WRAPPER.classList.contains('contact')) {
        appendForm();
    }
    if (WRAPPER.classList.contains('frequently-asked-questions')) {
        accordion();
    }
    if (WRAPPER.classList.contains('posts-archive')) {
        postsArchive();
    }
};

// global
$(document).ready(() => {
    initOnceFunctions();
});

export { initDynamicFunctions };
