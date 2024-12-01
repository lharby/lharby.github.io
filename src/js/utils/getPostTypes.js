/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

const getPostTypes = (elem) => {
    let type;
    if (elem.querySelectorAll('video').length) {
        type = 'video';
    } else if (elem.querySelectorAll('.npf_link').length || elem.querySelectorAll('[data-provider]').length) {
        type = `video video-embed`;
    } else if (elem.querySelectorAll('img').length) {
        type = 'image';
    } else if (elem.querySelectorAll('audio').length) {
        type = 'audio';
    } else if (elem.querySelectorAll('.npf_quote').length) {
        type = 'quote';
    } else if (elem.querySelectorAll('.npf_chat').length) {
        type = 'chat';
    } else {
        type = 'text';
    }
    return type;
}

export { getPostTypes };