/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* toggle contrast function */

import { DOM } from "./global";

const toggleContrast = () => {
    const contrastIsSet = window.localStorage.getItem('high-contrast');
    contrastIsSet === 1
        ?
        DOM.classList.add(contrastClass)
        :
        null;

    const trigger = document.querySelector('.toggle-contrast');
    const contrastClass = 'high-contrast';
    trigger.addEventListener('click', event => {
        event.preventDefault();
        DOM.classList.contains(contrastClass)
            ?
            DOM.classList.remove(contrastClass)
            :
            (
                DOM.classList.add(contrastClass),
                window.localStorage.setItem('high-contrast', 1)
            )
    });
}

export default toggleContrast;