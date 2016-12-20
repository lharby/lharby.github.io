<?php

 // set default variables
    $strTitle = "";
    $primaryDir = "";
    $secondaryDir = "";
    $section = "";

    // get root directory
    $strPageURL = $_SERVER["SCRIPT_NAME"];
    // split the pathname by '/'
    $strFileName = explode ('/', $strPageURL);
    // get the primary folder
    $section = $strFileName[2];
    // get the root filename
    $strIndexFile =  basename($strPageURL);
    
    $siteTitle = "Hogarth";
    // now for the switch statement, evaluate in lower case
    switch (strtolower($section)) {
    case "index.php":
        $strTitle = "";
        break;
    case "products":
        $strTitle = " - Products";
        break;
    case "what":
        $strTitle = " - What we do";
        break;
    case "products":
        $strTitle = " - Products and services";
        break;
    case "contact":
        $strTitle = " - Contact";
        break;
        // set a default
    case "": 
        echo "";
        break;
    }
    
?>