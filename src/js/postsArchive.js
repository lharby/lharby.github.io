/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* postsArchive function */
import { DOM } from './global';
import { removeChildNodes, setAjaxLoading, setAjaxComplete } from './utils';
import { getPostTypes } from './getPostTypes';

const API_KEY = process.env.NEXT_PUBLIC_TUMBLR_API_KEY;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_BLOG = process.env.NEXT_PUBLIC_API_BLOG;
const parser = new DOMParser();
let doc;

const postsArchive = () => {
    const wrapper = DOM.querySelector('.tumblr-posts');
    removeChildNodes(wrapper);
    let limit = 20;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const retrieveMore = (offset) => {
        const url = new URL(`https://${API_BASE_URL}${API_BLOG}/posts?offset=${offset}`);
        url.searchParams.set('api_key', API_KEY);
        setAjaxLoading();
        fetch(url, options)
            .then((response) => response.json())
            .then((response) => {
                if (response) {
                    const posts = response?.response?.posts;
                    const totalPosts = response?.response?.total_posts;
                    const postLength = posts.length;
                    posts.forEach((item) => {
                        doc = parser.parseFromString(item.body ?? '', 'text/html');
                        let type = getPostTypes(doc);
                        if (wrapper) {
                            const typeString = `el ${type}`;
                            const template = `<li class='${typeString}'><a href=${item.post_url} target='_blank'>${item.body}</a></li>`;
                            wrapper.insertAdjacentHTML('beforeend', template);
                        }
                    });
    
                    /* 
                    As long as our total no of posts is greater than our counter keep iterating over the posts
                    */
                    if (totalPosts >= offset && postLength !== 0) {
                        retrieveMore(offset + limit);
                    } else if (offset >= totalPosts) {
                        /* 
                        Once our counter is larger or the same size as
                        the total number of posts, 
                        */
                        setAjaxComplete();
                    }
                } else {
                    setAjaxComplete();
                }
            })
            .catch((err) => {
                console.log(`There was an error: ${err}`)
                setAjaxComplete();
            })
    };
    retrieveMore(0);
};

export { postsArchive };



