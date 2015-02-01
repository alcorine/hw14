jQuery(function($) {
	$(".aside-btn").click(function (){
		$(".sidebar").toggle();
		return false;
	});
})

var biggestHeight = "0";
$(".wrapper *").each(function(){
    if ($(this).height() > biggestHeight ) {
        biggestHeight = $(this).height()
    }
});

$(".wrapper").height(biggestHeight);