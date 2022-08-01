/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */

const indexPage = () => {
    const dom = document.querySelector('html');
    const url = document.location.pathname.split('/');
    const primaryDir = url[1];
    const secondaryDir = url[2];
    const tertiaryDir = url[3];

    if (!primaryDir) {
        dom.classList.add('index');
    } else if (tertiaryDir) {
        dom.classList.add(primaryDir, secondaryDir, tertiaryDir);
    } else if (secondaryDir) {
        dom.classList.add(primaryDir, secondaryDir);
    } else {
        dom.classList.add(primaryDir);
    }
}

export default indexPage;