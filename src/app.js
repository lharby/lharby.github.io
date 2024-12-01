import styles from './scss/main.scss';

import './js/utils/global';
import { siteResponsiveness } from './js/utils/utils';
import { indexPage } from './js/components/indexPage';
import entry from './js/components/entry';
import { navigation } from './js/components/navigation';
import { loadIndexPageContent } from './js/components/loadIndexPageContent';
import date from './js/components/date';
import toggleContrast from './js/utils/toggleContrast';
import obfuscateEmail from './js/components/obfuscateEmail';
import appendForm from './js/components/appendForm';
import getScrollbarWidth from './js/utils/getScrollbarWidth';
import { setImageSource } from './js/utils/lazyLoad';
import { setRandomColour } from './js/utils/randomColours';
import { accordion } from './js/components/accordion';
import { postsArchive } from './js/components/postsArchive';

import { DOM, WRAPPER, site } from './js/utils/global';

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
