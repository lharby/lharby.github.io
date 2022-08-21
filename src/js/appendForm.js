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
            <label class="el-4" for="name">Name</label>
            <input class="el-5" type="text" name="name" id="name">
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
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>
`;

const appendForm = () => {
    const wrapper = DOM.querySelector('.form-wrapper');
    wrapper.innerHTML = template;
    const form = wrapper.querySelector('.form');
    form.setAttribute('action', `${REMOTE_SERVER}${REMOTE_PATH}/includes/mailer.php`);
    console.log('REMOTE_SERVER: ', REMOTE_SERVER);
};

export default appendForm;
