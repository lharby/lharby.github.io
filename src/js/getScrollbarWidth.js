/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* scrollbar width function */
export const getScrollBarWidth = () => {
    return document.documentElement.style.setProperty(
        '--scrollbar-width',
        window.innerWidth - document.documentElement.clientWidth + 'px'
    );
};
