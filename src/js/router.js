/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* router */

import { BODY, WRAPPER, PAGE_WRAPPER } from "./global";
import { initDynamicFunctions } from "../app";
import { closeNavigation } from "./navigation";
import { scrollToTop } from "./utils";

let documentTitle;

const updateContent = (input) => {
    PAGE_WRAPPER.replaceChildren();
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');
    const container = doc.querySelector('#container');
    PAGE_WRAPPER.appendChild(container);
    documentTitle = doc.querySelector('title').textContent;
}

const router = () => {
    let links = document.querySelectorAll('a');
    let internal = [...links].filter(item => item.getAttribute('href').startsWith('/'));

    internal.forEach(item => {
        let href = item.getAttribute('href');
        let hrefSplit = href.split('/')[1];
        item.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            BODY.classList.add(loadingClass);
            if (href === '/') {
                hrefSplit = '/';
            } 
            fetch(href)
                .then((res) => {
                    return res.text();
                })
                .then((html) => {
                    closeNavigation();
                    BODY.classList.remove(loadingClass);
                    WRAPPER.removeAttribute('class');
                    if (hrefSplit) {
                        WRAPPER.classList.add(hrefSplit);
                    }
                    scrollToTop();
                    updateContent(html);
                    document.title = documentTitle;
                    history.pushState({ path: href }, documentTitle, hrefSplit);
                    initDynamicFunctions();
                })
                .catch((err) => {
                    console.warn('Something went wrong.', err);
                    BODY.classList.remove(loadingClass);
                });
        });
    });
}

export {
    router,
};
