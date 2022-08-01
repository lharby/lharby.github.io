/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */

const global = require('./global');

const indexPage = () => {
    const dom = document.querySelector('html');
    const url = document.location.pathname.split('/');
    const primaryDir = url[1];
    const secondaryDir = url[2];
    const tertiaryDir = url[3];
    const indexPageContent = document.querySelectorAll('.index-page');
    const postsContent = document.querySelector('#posts');

    if (!primaryDir) {
        dom.classList.add('index');
        [...indexPageContent].forEach(function(item) {
            item.classList.remove(global.HIDDEN_CLASS);
        });
    } else if (tertiaryDir) {
        dom.classList.add(primaryDir + ' ' + secondaryDir + ' ' + tertiaryDir);
    } else if (secondaryDir) {
        dom.classList.add(primaryDir + ' ' + secondaryDir);
    } else {
        dom.classList.add(primaryDir);
        postsContent.classList.remove(global.HIDDEN_CLASS);
    }
    // if(!primaryDir){
    //     document.body.classList.add('index');
    //     [...indexPageContent].forEach(function(item) {
    //         item.classList.remove(global.HIDDEN_CLASS);
    //     });
    // } else {
    //     postsContent.classList.remove(global.HIDDEN_CLASS);
    // }
}

export default indexPage;