/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* postsArchive function */
import { DOM } from './global';
import { removeChildNodes } from './utils';

const postsArchive = () => {
    const wrapper = DOM.querySelector('.tumblr-posts');
    const template = `<li>Temporary</li>`;
    removeChildNodes(wrapper);
    wrapper.insertAdjacentHTML('beforeend', template);
};

export { postsArchive };
