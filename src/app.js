import styles from './scss/main.scss';

import './js/global';
import { siteResponsiveness } from './js/utils';
import navigation from './js/navigation';
import indexPage from './js/indexPage';
import date from './js/date';
import toggleContrast from './js/toggleContrast';
import obfuscateEmail from './js/obfuscateEmail';
import appendForm from './js/appendForm';
import getScrollbarWidth from './js/getScrollbarWidth';
import { setImageSource } from './js/lazyLoad';
import { setRandomColour, attachClickEvent } from './js/randomColours';

import { DOM, site } from './js/global';

// global
$(document).ready(() => {
    siteResponsiveness();
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
        setRandomColour();
        setTimeout(attachClickEvent, 100);
    }
    console.log(
        `isDesktop: ${site.isDesktop}. isTablet: ${site.isTablet}. isMobile: ${site.isMobile}`
    );
});
