/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* entry function */
import { VISIBILITY_HIDDEN_CLASS } from "./global";
import { setCookie, getCookie } from "./cookies";

const entry = () => {
    const cookieIsSet = getCookie('entry');
    const wrapper = document.querySelector('.entry');
    if (cookieIsSet) {
        wrapper.classList.remove(VISIBILITY_HIDDEN_CLASS);
    } else {
        wrapper.classList.add(VISIBILITY_HIDDEN_CLASS);
    }
    wrapper.addEventListener('click', () => {
        wrapper.classList.add(VISIBILITY_HIDDEN_CLASS);
        setCookie('entry', 1, 7);
    });
}

export default entry;