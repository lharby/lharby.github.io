import styles from './scss/main.scss';

import './js/global';
import navigation from './js/navigation';
import indexPage from './js/indexPage';
import date from './js/date';
import toggleContrast from './js/toggleContrast';
import obfuscateEmail from './js/obfuscateEmail';

// global
$(document).ready(() => {
    navigation();
    indexPage();
    date();
    toggleContrast();
    obfuscateEmail();
});
