/**
 * A bunch of utilities to check whether or not a symbol fits certain criteria.
 *
 */

/**
 * Find out whether or not the given argument is an element that would react somewhat normally to DOM-manipulations.
 *
 * @since 3.7.0
 * @param {*} element - The element to check.
 * @returns {boolean} `true` if the given argument is an element (or document, or window), and `false` otherwise.
 */
 export function isElement(element) {
    return (
        element instanceof Element ||
        element instanceof Document ||
        element instanceof Window
    );
}

/**
 * Get the current scroll values of the given element (or window). Will return an object containing
 * "left" and "top" properties, which are set to the scroll values, or false if no compatible element
 * was given.
 *
 * @param {Element|Window} [element=window]
 * @returns {{ left: number, top: number } | boolean}
 */
 export function getElementScroll(element = window) {
    if (isElement(element)) {
        if (element instanceof Window) {
            return {
                left:
                    element.pageXOffset || document.documentElement.scrollLeft,
                top: element.pageYOffset || document.documentElement.scrollTop
            };
        } else {
            return {
                left: element.scrollX || element.scrollLeft,
                top: element.scrollY || element.scrollTop
            };
        }
    } else {
        return false;
    }
}

/*
* Get the current state of the scroll lock. `true` if the scroll lock is enabled, otherwise `false`.
*
* @type {boolean}
*/
const className = "doc-scroll-lock";
let scrollTop = 0;
export let isScrollLocked = false;

/**
* Enable the scroll lock.
*/
export function enableScrollLock() {
   if (!isScrollLocked) {
       // Get scroll position
       const scrollPosition = getElementScroll();

       // Reset scroll position
       window.scrollTo(scrollPosition.left, 0);

       const htmlTag = document.documentElement;
       htmlTag.classList.add(className);
       htmlTag.style.marginTop = `${-scrollPosition.top}px`;
    //    htmlTag.style.position = "fixed";
    //    htmlTag.style.overflow = "hidden";
    //    htmlTag.style.width = "100%";

       // Trigger event on target. You can listen for it using document.body.addEventListener("akqa.scrollLock:enable", callbackHere)
       // triggerCustomEvent(document.body, "akqa.scrollLock:enable");

       // Remember state
       isScrollLocked = true;
       scrollTop = scrollPosition.top;
   }
}

/**
* @type {function}
* @ignore
* @deprecated
*/
export const enable = enableScrollLock;

/**
* Disable the scroll lock
*/
export function disableScrollLock() {
   if (isScrollLocked) {
       const scrollPosition = getElementScroll();

       const htmlTag = document.documentElement;
       htmlTag.classList.remove(className);
       htmlTag.style.marginTop = "";
    //    htmlTag.style.position = "";
    //    htmlTag.style.overflow = "";
    //    htmlTag.style.width = "";

       // Set the scroll position to what it was before
       window.scrollTo(scrollPosition.left, scrollTop);

       // Trigger event on target. You can listen for it using document.body.addEventListener("akqa.scrollLock:disable", callbackHere)
       // (document.body, "akqa.scrollLock:disable");

       // Remember state
       isScrollLocked = false;
   }
}

/**
* @type {function}
* @ignore
* @deprecated
*/
export const disable = disableScrollLock;