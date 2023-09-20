*feature/singlePageApplication*

Initialise SPA functionality with graceful degredation

-   For each internal link bind an event listener
-   Fetch the url from the href
-   Parse the incoming HTML
-   Find a page wrapper ID
-   Empty the current wrapper
-   Append the new html content to the wrapper
-   If navigation open, close navigation (import close Navigation)
-   Reset any specific page classes/styles (scroll lock etc)
-   Scroll to top of document
-   Update pushState
-   Remove ajax loading class
-   Update page titles?
-   Rebind any click handlers to content loaded via ajax?

List initOnce functions

List initDynamic function (on ajaxEnd, or bind to popstate if possible)

Call initOnce on initial page load

Wrap initDynamic functions to specific callbacks etc. So they can be reinitialised en masse.

Also ensure these functions run if client lands on sub page `/contact` for example

Remove `indexPage.js` potentially.

*Fixes*

Reset scroll top on nav after closing