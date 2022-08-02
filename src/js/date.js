/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* date function */  
const date = () => {          
    const dateWrapper = document.querySelector('.date-wrapper');
    const getYear = new Date().getFullYear();
    dateWrapper.textContent = getYear;
}

export default date;