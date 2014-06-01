    </div><!-- end page-wrapper -->
</div><!-- end main=wrapper -->

<footer id="footer-wrapper">
    &copy; <?php echo date("Y"); ?> Hogarth Worldwide
</footer>

<script type="text/javascript">
    $(document).ready(function() {
        var $titleEdit = $(document).attr('title');
        var $titleReplace = $titleEdit.replace(new RegExp(" ", "g"), " > ");
       $(document).attr('title', $titleReplace);
    });
    
    $(document).ready(calcWidth);
    //$(document).resize(calcWidth);
    
    function calcWidth(){
        // get array of all the list items in the nav
        var $listWidth = $('ul#main-nav li').map(function(){
            return $(this).width();
        }).get();
        var $itemCount = $('#main-nav li').length; //this works as margin-right is set to 1px
        var $contWidth = $('#main-nav').width(); // get the full container width
        var $sum = 0;
        $.each($listWidth,function(){$sum+=parseFloat(this) || 0;});
        $('ul#main-nav li.final a').css({
            width:  $contWidth - $sum - $itemCount, //set the width of the final li to be the total container minus the sum of the existing li elements
            height: '12px'
        });
    }
</script>
    

</body>
</html>
