/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* global */
$('html').removeClass('no-js');

const DOM = document.querySelector('html');
const HIDDEN_CLASS  = 'hidden';
const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
const REMOTE_DOMAIN = process.env.NEXT_PUBLIC_REMOTE_DOMAIN;
const REMOTE_PATH = process.env.NEXT_PUBLIC_REMOTE_PATH;

console.log(`EMAIL_ADDRESS ${EMAIL_ADDRESS} process.env.NEXT_PUBLIC_EMAIL_ADDRESS ${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`);

export {
    DOM,
    HIDDEN_CLASS,
    EMAIL_ADDRESS,
    REMOTE_DOMAIN,
    REMOTE_PATH
};
