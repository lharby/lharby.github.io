/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page content */
const indexPageContent = () => {
    fetch('/post/695199151221309440/')
        .then(response => {
            console.log(response);
        })
        .then(result => {
            const body = result.text();
            document.querySelector('#posts .go ul').innerHTML = body;
            console.log(`body ${body}`);
        });
};

export default indexPageContent;
