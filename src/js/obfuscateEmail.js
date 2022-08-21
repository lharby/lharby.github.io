/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* obfuscate email */
import { DOM, EMAIL_ADDRESS } from './global';

const obfuscateEmail = () => {
    const trigger = DOM.querySelectorAll('.email-address');
    trigger.forEach(item => {
        item.addEventListener('click', () => {
            item.setAttribute('href', `mailto:${EMAIL_ADDRESS}`);
        });
    });
}

export default obfuscateEmail;
