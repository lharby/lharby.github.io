*feature/singlePageApplication*

Initialise SPA functionality with graceful degredation - DONE

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

List initOnce functions - DONE

List initDynamic function (on ajaxEnd, or bind to popstate if possible) - DONE

Call initOnce on initial page load - DONE

Wrap initDynamic functions to specific callbacks etc. So they can be reinitialised en masse. - DONE

Also ensure these functions run if client lands on sub page `/contact` for example - DONE

Remove `indexPage.js` potentially. - DONE

*Fixes*

Reset scroll top on nav after closing - DONE

Set scrollbar colour after ajax page load