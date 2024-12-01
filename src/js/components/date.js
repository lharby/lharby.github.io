/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* date function */
import { DOM } from '../utils/global';

const date = () => {
    const dateWrapper = DOM.querySelector('.date-wrapper');
    const getYear = new Date().getFullYear();
    dateWrapper.textContent = getYear;
}

export default date;
