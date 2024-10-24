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
    const paths = document.location.pathname.split('/');
    const primaryDir = paths[1];
    // const pathsJoined = paths.join(' ').trim();

    if (!primaryDir) {
        WRAPPER.classList.add(indexClass);
    } else {
        paths.forEach(item => WRAPPER.classList.add(item))
        WRAPPER.classList.remove(indexClass);
    }
};

export { indexPage };
