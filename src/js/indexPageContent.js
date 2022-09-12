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
            return response.text();
        })
        .then(data => {
            document.querySelector('#posts .go ul').innerHTML = data;
            console.log(`body ${data}`);
        });
};

export default indexPageContent;
