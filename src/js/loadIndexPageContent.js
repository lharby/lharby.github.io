/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* loadindexPageContent */

import { BODY, WRAPPER, PAGE_WRAPPER, LOADING_CLASS } from './global';
import { initDynamicFunctions } from '../app';
import { closeNavigation } from './navigation';
import { scrollToTop } from './utils';
import { attachClickEvent } from './randomColours';

const url = document.location.pathname.split('/');
const primaryDir = url[1];
const indexClass = 'index';
let links = document.querySelectorAll('a');
let internal = [...links].filter(item =>
    item.getAttribute('href').startsWith('/')
);
let documentTitle;

const router = () => {
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
                .then(res => res.text())
                .then(html => {
                    closeNavigation();
                    WRAPPER.removeAttribute('class');
                    if (hrefSplit !== '/') {
                        WRAPPER.classList.add(hrefSplit);
                    } else {
                        WRAPPER.classList.add(indexClass);
                    }
                    updateContent(html);
                    history.pushState({ path: href }, documentTitle, hrefSplit);
                    routerCallback();
                })
                .catch(err => {
                    console.warn('Something went wrong.', err);
                    BODY.classList.remove(LOADING_CLASS);
                })
                .then(() => attachClickEvent);
        });
    });
};

const loadIndexPageContent = () => {
    if (!primaryDir) {
        BODY.classList.add(LOADING_CLASS);
        fetch('/home')
            .then(res => res.text())
            .then(html => {
                updateContent(html);
                router();
                routerCallback();
            })
            .catch(err => {
                console.warn('Something went wrong.', err);
                BODY.classList.remove(LOADING_CLASS);
            })
            .then(() => attachClickEvent);
    } else {
        router();
    }
};

const getLinks = () => {
    links = document.querySelectorAll('a');
    internal = [...links].filter(item =>
        item.getAttribute('href').startsWith('/')
    );
};

const updateContent = input => {
    PAGE_WRAPPER.replaceChildren();
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');
    const container = doc.querySelector('#container');
    PAGE_WRAPPER.appendChild(container);
    documentTitle = doc.querySelector('title').textContent;
};

const routerCallback = () => {
    BODY.classList.remove(LOADING_CLASS);
    document.title = documentTitle;
    initDynamicFunctions();
    getLinks();
    scrollToTop();
};

export { loadIndexPageContent };
