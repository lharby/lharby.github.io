/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* global */

const DOM = document.querySelector('html');
const BODY = DOM.querySelector('body');
const WRAPPER = DOM.querySelector('#wrapper');
const PAGE_WRAPPER = DOM.querySelector('#pageWrapper');
const HIDDEN_CLASS = 'hidden';
const LOADING_CLASS = 'loading';
const VISIBILITY_HIDDEN_CLASS = 'visibility-hidden';
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
    winWidth: window.innerWidth,
};

DOM.classList.remove('no-js');
DOM.classList.remove('visibility-hidden'); // TODO move this to the wrapper, and also check the entry JS

export {
    DOM,
    BODY,
    WRAPPER,
    PAGE_WRAPPER,
    HIDDEN_CLASS,
    VISIBILITY_HIDDEN_CLASS,
    LOADING_CLASS,
    EMAIL_ADDRESS,
    REMOTE_DOMAIN,
    REMOTE_SERVER,
    REMOTE_PATH,
    site,
};
