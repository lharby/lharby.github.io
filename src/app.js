import styles from './scss/main.scss';

import './js/global';
import navigation from './js/navigation';
import indexPage from './js/indexPage';
import date from './js/date';

// global
$(document).ready(() => {
    navigation();
    indexPage();
    date();
});
