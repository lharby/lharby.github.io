<?php include "common-functions.php"; ?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="/css/main.css" />
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script type="text/javascript" src="/scripts/css_browser_selector.js"></script>
<title><?php print("$siteTitle $strTitle $strTitle2"); ?></title>
</head>
<body>
<div id="main-wrapper"><!-- main-wrapper -->
    <div id="page-wrapper" class="clearfix"><!-- page-wrapper -->
    
    <header class="clearfix">
        <ul id="main-nav">
            <li><a href="/" class="btn-nav <?php if($primaryDir == 'index.php') echo 'nav_on'; ?> " id="btn-nav1">Home</a></li>
            <li><a href="/products/" class="btn-nav <?php if($primaryDir == 'products') echo 'nav_on'; ?> " id="btn-nav2">Our Products</a></li>
            <li><a href="/downloads/" class="btn-nav <?php if($primaryDir == 'downloads') echo 'nav_on'; ?>" id="btn-nav3">Downloads</a></li>
            <li><a href="/about/" class="btn-nav <?php if($primaryDir == 'about') echo 'nav_on'; ?>" id="">About Us</a></li> 
            <li><a href="/terms/" class="btn-nav <?php if($primaryDir == 'terms') echo 'nav_on'; ?>" id="btn-nav4">Terms</a></li>
            <li><a href="/contact/" class="btn-nav <?php if($primaryDir == 'contact') echo 'nav_on'; ?>" id="btn-nav5">Contact</a></li>
            <li class="final"><a href="#" class="btn-nav"></a></li>
        </ul>
    </header>