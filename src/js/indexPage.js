/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */

const global = require('./global');

const indexPage = () => {
    const url = document.location.pathname;
    const primaryDir = url.split("/")[1];
    const indexPageContent = document.querySelectorAll('.index-page');
    const postsContent = document.querySelector('#posts');

    if(!primaryDir){
        document.body.classList.add('index');
        [...indexPageContent].forEach(function(item) {
            item.classList.remove(global.HIDDEN_CLASS);
        });
    } else {
        postsContent.classList.remove(global.HIDDEN_CLASS);
    }
}

export default indexPage;