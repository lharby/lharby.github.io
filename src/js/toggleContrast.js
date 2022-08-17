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
    trigger.addEventListener('click', event => {
        event.preventDefault();
        DOM.classList.contains(contrastClass)
        ?
        DOM.classList.remove(contrastClass)
        :
        DOM.classList.add(contrastClass)
    });
    
}

export default toggleContrast;