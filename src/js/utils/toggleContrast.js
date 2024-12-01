/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* toggle contrast function */
import { DOM } from './global';

const toggleContrast = () => {
    const trigger = DOM.querySelector('.toggle-contrast');
    const contrastClass = 'high-contrast';
    const lowContrast = window.localStorage.getItem(contrastClass);
    lowContrast === '0' ? DOM.classList.remove(contrastClass) : null;
    trigger.addEventListener('click', event => {
        event.preventDefault();
        if (!DOM.classList.contains(contrastClass)) {
            DOM.classList.add(contrastClass);
            window.localStorage.removeItem(contrastClass);
        } else {
            DOM.classList.remove(contrastClass);
            window.localStorage.setItem(contrastClass, '0');
        }
    });
};

export default toggleContrast;
