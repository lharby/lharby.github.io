/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* router */

import { BODY, WRAPPER, PAGE_WRAPPER, LOADING_CLASS } from './global';
import { initDynamicFunctions } from '../app';
import { closeNavigation } from './navigation';

const url = document.location.pathname.split('/');
const primaryDir = url[1];
let documentTitle;

const getLinks = () => {
    const links = document.querySelectorAll('a');
    const internal = [...links].filter(item =>
        item.getAttribute('href').startsWith('/')
    );
    console.log(`internal ${(internal, internal.length)}`);
    return internal;
};

const updateContent = input => {
    PAGE_WRAPPER.replaceChildren();
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');
    const container = doc.querySelector('#container');
    PAGE_WRAPPER.appendChild(container);
    documentTitle = doc.querySelector('title').textContent;
};

const router = () => {
    // let links = document.querySelectorAll('a');
    // let internal = [...links].filter(item =>
    //     item.getAttribute('href').startsWith('/')
    // );
    getLinks();

    internal.forEach(item => {
        let href = item.getAttribute('href');
        let hrefSplit = href.split('/')[1];
        item.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            BODY.classList.add(LOADING_CLASS);
            if (href === '/') {
                href = '/home';
                hrefSplit = '/';
            }
            fetch(href)
                .then(res => {
                    return res.text();
                })
                .then(html => {
                    closeNavigation();
                    BODY.classList.remove(LOADING_CLASS);
                    WRAPPER.removeAttribute('class');
                    if (hrefSplit !== '/') {
                        WRAPPER.classList.add(hrefSplit);
                    } else {
                        WRAPPER.classList.add('index');
                    }
                    updateContent(html);
                    document.title = documentTitle;
                    history.pushState({ path: href }, documentTitle, hrefSplit);
                    initDynamicFunctions();
                    getLinks();
                    // if body is scrolled, init scrollToTop function
                })
                .catch(err => {
                    console.warn('Something went wrong.', err);
                    BODY.classList.remove(LOADING_CLASS);
                });
        });
    });
};

const loadindexPageContent = () => {
    fetch('/home')
        .then(res => res.text())
        .then(html => {
            WRAPPER.removeAttribute('class');
            updateContent(html);
            document.title = documentTitle;
            getLinks();
        });
};

if (!primaryDir) {
    loadindexPageContent();
}

export { router };
