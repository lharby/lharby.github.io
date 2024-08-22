/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */
import { WRAPPER } from './global';

const indexClass = 'index';

const indexPage = () => {
    const url = document.location.pathname.split('/');
    const primaryDir = url[1];

    if (!primaryDir) {
        WRAPPER.classList.add(indexClass);
    } else {
        WRAPPER.classList.add(primaryDir);
        WRAPPER.classList.remove(indexClass);
    }
};

export { indexPage };
