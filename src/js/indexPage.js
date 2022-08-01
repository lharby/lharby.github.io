/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */

import { hiddenClass } from "./global";

const indexPage = () => {
    const url = document.location.pathname;
    const primaryDir = url.split("/")[1];
    const indexPageContent = document.querySelectorAll('.index-page');
    const postsContent = document.querySelector('#posts');

    if(!primaryDir){
        document.body.classList.add('index');
        [...indexPageContent].forEach(function(item) {
            item.classList.remove(hiddenClass);
        });
    } else {
        postsContent.classList.remove(hiddenClass);
    }
}

export default indexPage;