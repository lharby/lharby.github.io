/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/*
 * To get the value from local storage that matches the given key
 * @param {string} key
 * @returns The value of the key argument
 */
const retrieveFromSessionStorage = (key) => {
    if (!key || typeof key !== 'string') {
        throw new Error('Invalid key');
    }
    /*
     * Handle non-string value with JSON.parse.
     * Catch string value and return it
     */
    try {
        return JSON.parse(sessionStorage.getItem(key));
    } catch {
        return sessionStorage.getItem(key);
    }
};

/*
 * To set the key-value pair to local storage
 * @param {string} key
 * @param {any} value
 * @returns N/A
 */
const addToSessionStorage = (key, value) => {
    if (!key || typeof key !== 'string') {
        throw new Error('Invalid key');
    }
    if (typeof value === 'object') {
        sessionStorage.setItem(key, JSON.stringify(value));
    } else {
        sessionStorage.setItem(key, value);
    }
};

export {
    addToSessionStorage,
    retrieveFromSessionStorage
}