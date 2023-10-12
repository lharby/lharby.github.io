/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* accordion function */
const accordion = () => {
    const container = document.querySelector('.accordion');
    const trigger = container.querySelectorAll('li > a');
    const openClass = 'open';
    trigger.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            if (item.classList.contains(openClass)) {
                item.classList.remove(openClass);
            } else {
                item.classList.add(openClass);
            }
        });
    });
};

export { accordion };
