/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* toggle contrast function */
import { DOM } from "./global";

const toggleContrast = () => {
    const trigger = document.querySelector('.toggle-contrast');
    const contrastClass = 'high-contrast';
    const contrastIsSet = window.localStorage.getItem(contrastClass);
    contrastIsSet === '1'
        ?
        DOM.classList.add(contrastClass)
        :
        null;
    trigger.addEventListener('click', event => {
        event.preventDefault();
        if (DOM.classList.contains(contrastClass)) {
            DOM.classList.remove(contrastClass);
            window.localStorage.removeItem(contrastClass);
        } else {
            DOM.classList.add(contrastClass);
            window.localStorage.setItem(contrastClass, '1');
        }
    });
}

export default toggleContrast;