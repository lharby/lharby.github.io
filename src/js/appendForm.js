/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* append form */
import {
    DOM,
    REMOTE_SERVER,
    REMOTE_PATH
} from './global';

const template = `
    <form action="" method="post" class="form">
        <div class="form-control">
            <label class="el-4" for="actual_name">Name</label>
            <input class="el-5" type="text" name="actual_name" id="actual_name">
            <input name="name" type="text" id="name" class="hidden">
        </div>
        <div class="form-control">
            <label class="el-4" for="email">Email</label>
            <input class="el-5" type="text" name="email" id="email">
        </div>
        <div class="form-control">
            <label class="el-4" for="contact-no">Contact number</label>
            <input class="el-5" type="contact-no" id="contact-no">
        </div>
        <div class="form-control">
            <label class="el-4" for="comments">Comments</label>
            <textarea class="el-5" name="comments" id="comments" rows="5"></textarea>
        </div>
        <div class="form-control">
            <div class="el-4 mobile-hidden"></div>
            <div class="el-5">
                <button class="submit">Submit</button>
            </div>
        </div>
    </form>
`;

const appendForm = () => {
    const wrapper = DOM.querySelector('.form-wrapper');
    wrapper.innerHTML = template;
    const form = wrapper.querySelector('.form');
    DOM.addEventListener('click', event => {
        event.preventDefault();
        if(event.target.classList.contains('submit')) {
            form.setAttribute('action', `${REMOTE_SERVER}${REMOTE_PATH}/includes/mailer.php`);
            form.submit();
        }
    });
};

export default appendForm;
