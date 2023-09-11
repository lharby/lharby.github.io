/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* entry function */
import { HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS } from "./global";
import { setCookie, getCookie } from "./cookies";

const entry = () => {
    const cookieIsSet = getCookie('entry');
    const wrapper = document.querySelector('.entry');
    if (cookieIsSet) {
        wrapper.classList.add(HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS);
    } else {
        wrapper.classList.remove(HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS);
    }
    wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add(VISIBILITY_HIDDEN_CLASS, HIDDEN_CLASS);
        setCookie('entry', 1, 7);
    });
}

export default entry;