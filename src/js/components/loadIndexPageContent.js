/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* loadindexPageContent */

import { BODY, WRAPPER, PAGE_WRAPPER, LOADING_CLASS } from '../utils/global';
import { initDynamicFunctions } from '../../app';
import { closeNavigation } from './navigation';
import { scrollToTop } from '../utils/utils';

const url = document.location.pathname.split('/');
const primaryDir = url[1];
const indexClass = 'index';
const fadeInClass = 'fade-in';
let documentTitle;

const router = () => {
    document.addEventListener('click', event => {
        const link = event.target.closest('a');
        if (link && link.getAttribute('href')?.startsWith('/')) {
            event.preventDefault();
            event.stopPropagation();
            let href = link.getAttribute('href');
            let hrefName = href.substring(1);
            let arrHrefs = href.split('/').filter(item => item !== '');
            BODY.classList.add(LOADING_CLASS);
            if (href === '/') {
                hrefName = 'home';
                href = '/home';
            }
            fetch(href)
                .then(res => res.text())
                .then(html => {
                    closeNavigation();
                    WRAPPER.removeAttribute('class');
                    if (href !== '/home') {
                        WRAPPER.classList.add(...arrHrefs);
                    } else {
                        WRAPPER.classList.add(indexClass);
                    }
                    updateContent(html);
                    history.pushState({ path: href }, documentTitle, `/${hrefName}`);
                    routerCallback();
                })
                .catch(err => {
                    console.log('Something went wrong.', err);
                    BODY.classList.remove(LOADING_CLASS);
                });
        } else {
            return;
        }
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
            });
    } else {
        router();
    }
};

const updateContent = input => {
    PAGE_WRAPPER.replaceChildren();
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');
    const container = doc.querySelector('#container');
    PAGE_WRAPPER.appendChild(container);
    PAGE_WRAPPER.classList.add(fadeInClass);
    documentTitle = doc.querySelector('title').textContent;
};

const routerCallback = () => {
    BODY.classList.remove(LOADING_CLASS);
    document.title = documentTitle || document.title;
    initDynamicFunctions();
    scrollToTop();
};

export { loadIndexPageContent };
