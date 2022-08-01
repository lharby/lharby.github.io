/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* date function */  
const date = () => {          
    const dateWrapper = $('.dateWrapper');
    const getYear = new Date();
    getYear = getYear.getFullYear();
    dateWrapper.text(getYear);
}

export default date;