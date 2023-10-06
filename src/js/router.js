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
import { scrollToTop } from './utils';

const url = document.location.pathname.split('/');
const primaryDir = url[1];
let internal;
let href;
let hrefSplit;
let documentTitle;

// create fuction to load content just for the indedx page
const loadIndexPageContent = () => {
    href = '/home';
    hrefSplit = '/';
    fetch(href)
        .then(res => res.text())
        .then(html => {
            BODY.classList.remove(LOADING_CLASS);
            WRAPPER.removeAttribute('class');
            updateContent(html);
            document.title = documentTitle;
            // history.pushState({ path: href }, documentTitle, hrefSplit);
            internal = [...links].filter(item =>
                item.getAttribute('href').startsWith('/')
            );
            console.log(`internal ${(internal, internal.length)}`);
            initDynamicFunctions();
        })
        .catch(err => {
            console.warn('Something went wrong.', err);
            BODY.classList.remove(LOADING_CLASS);
        });
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
    let links = document.querySelectorAll('a');
    internal = [...links].filter(item =>
        item.getAttribute('href').startsWith('/')
    );

    internal.forEach(item => {
        href = item.getAttribute('href');
        hrefSplit = href.split('/')[1];
        item.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            BODY.classList.add(LOADING_CLASS);
            if (href === '/') {
                hrefSplit = '/';
            }
            console.log(`href: ${href}`);
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
                    // if body is scrolled, init scrollToTop function
                })
                .catch(err => {
                    console.warn('Something went wrong.', err);
                    BODY.classList.remove(LOADING_CLASS);
                });
        });
    });
};

if (!primaryDir) {
    loadIndexPageContent();
}

export { router };
