/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* global */

const DOM = document.querySelector('html');
const BODY = DOM.querySelector('body');
const HIDDEN_CLASS = 'hidden';
const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
const REMOTE_DOMAIN = process.env.NEXT_PUBLIC_REMOTE_DOMAIN;
const REMOTE_SERVER = process.env.NEXT_PUBLIC_REMOTE_SERVER;
const REMOTE_PATH = process.env.NEXT_PUBLIC_REMOTE_PATH;

const site = {
    width: {
        small: 480,
        medium: 768,
        large: 992,
    },
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    winWidth: $(window).width(),
};

DOM.classList.remove('no-js');
DOM.classList.remove('visibility-hidden');

export {
    DOM,
    BODY,
    HIDDEN_CLASS,
    EMAIL_ADDRESS,
    REMOTE_DOMAIN,
    REMOTE_SERVER,
    REMOTE_PATH,
    site,
};
