/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */
import { DOM } from './global';

const indexPage = () => {
    const url = document.location.pathname.split('/');
    const primaryDir = url[1];
    const secondaryDir = url[2];
    const tertiaryDir = url[3];

    if (!primaryDir) {
        DOM.classList.add('index');
    } else if (tertiaryDir) {
        DOM.classList.add(primaryDir, secondaryDir, tertiaryDir);
    } else if (secondaryDir) {
        DOM.classList.add(primaryDir, secondaryDir);
    } else {
        DOM.classList.add(primaryDir);
    }
}

export default indexPage;
