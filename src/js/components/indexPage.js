/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */
import { WRAPPER } from '../utils/global';

const indexClass = 'index';

const indexPage = () => {
    const arrPaths = document.location.pathname.split('/');
    const primaryDir = arrPaths[1];
    let pathnames = arrPaths.filter(item => item !== '');

    if (!primaryDir) {
        WRAPPER.classList.add(indexClass);
    } else {
        WRAPPER.classList.add(...pathnames);
        WRAPPER.classList.remove(indexClass);
    }
};

export { indexPage };
