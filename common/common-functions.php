<?php

    // get the document location
    $strPageURL = $_SERVER['SCRIPT_NAME'];
    // get array of page URL and split by '/'
    $arrPageURL = explode("/", $strPageURL);
    
    // get the filename
    $strFileName = $arrPageURL[count($arrPageURL)];
    // split the filename by . (remove extension .php .html)
    $arrFileName = explode(".", $strFileName);
    // get the first index of the file name
    $strFileName = $arrFileName[1];
    
    if(count($arrPageURL) > 1){
        // get penultimate array value 
        $strDirectoryParent = $arrPageURL[count($arrPageURL)-1];
    }else{
        $strDirectoryParent = $strFileName;
    }
    
    if(count($arrPageURL)>=1){
        // get the primary directory 
        $primaryDir = $arrPageURL[1];
    }else{
        $primaryDir = "";
    }
    
    if(count($arrPageURL)>=2){
        // get the secondary directory
        $secondaryDir = $arrPageURL[2];
    }else{
        $secondaryDir = "";
    }
    
    if(count($arrPageURL)>=3){
        // get the tertiary directory
        $tertiaryDir = $arrPageURL[3];
    }else{
        $tertiaryDir = "";
    }
    
    // set default variable values
    $siteTitle = "Hogarth";
    $strTitle = "";
    
    // primary directory switch statement
    switch (strtolower($primaryDir)) {
    
    case 'index':
        $strTitle = 'Home';
        break;
        
    case 'about':
        $strTitle = 'About&nbsp;Us';
        break;
    
    case 'contact':
        $strTitle = 'Contact&nbsp;Us';
        break;
    
    case 'downloads':
        $strTitle = 'Downloads';
        break;
    
    case 'products':
        $strTitle = 'Products';
        break;
    
    case 'terms':
        $strTitle = 'Terms&nbsp;&amp;&nbsp;Conditions';
        break;

    }
    
    // set default variable value
    $strTitle2 = "";
    
    // secondary directory switch statement 
    switch (strtolower($secondaryDir)) {
        
        case 'cm':
            $strTitle2 = 'Change&nbsp;Management';
            break;
        
        case 'fido':
            $strTitle2 = 'Fido';
            break;
        
        case 'zonza':
            $strTitle2 = 'Zonza';
            break;
        
        case 'quagga':
            $strTitle2 = 'Quagga';
            break;
    }
    
?>