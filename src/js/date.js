/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* date function */  
const date = () => {          
    const dateWrapper = document.querySelector('.date-wrapper');
    let getYear = new Date();
    getYear = getYear.getFullYear();
    dateWrapper.textContent = getYear;
}

export default date;