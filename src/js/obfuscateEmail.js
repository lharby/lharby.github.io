/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* obfuscate email */
import { EMAIL_ADDRESS } from "./global";

const obfuscateEmail = () => {          
    const trigger = document.querySelectorAll('.email-address');
    trigger.forEach(item => {
        item.addEventListener('click', () => {
            trigger.setAttribute('href', `mailto:${EMAIL_ADDRESS}`);
        });
    });
}

export default obfuscateEmail;