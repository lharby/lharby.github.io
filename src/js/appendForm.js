/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* append form */

import { DOM } from './global';

const template = `
    <form action="" class="form">
        <div class="form-control">
            <label for="name">
                Name
                <input type="text" name="name" id="name">
            </label>
        </div>
        <div class="form-control">
            <label for="email">
                Email
                <input type="text" name="email" id="email">
            </label>
        </div>
        <div class="form-control">
            <label for="contact-no">
                Contact number
                <input type="contact-no" id="contact-no">
            </label>
        </div>
        <div class="form-control">
            <label for="comments">
                Comments
                <textarea name="comments" id="comments" rows="5"></textarea>
            </label>    
        </div>
        <div class="form-control">
            <button type="submit">Submit</button>
        </div>
    </form>
`;

const appendForm = () => {
    const wrapper = DOM.querySelector('.form-wrapper');
    wrapper.innerHTML = template;
};

export default appendForm;