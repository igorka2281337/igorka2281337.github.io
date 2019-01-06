$( document ).ready(function() {
	
function showDrop() {
  $.ajax({
	  type: 'GET',
	  url: '../ajax/get_drop.php',
	  data:{'id':'1'},
	  success: function(data)
	  {
		  $('#sub_lent_lent').html(data);
	  }
	});
}

function showDrop2() {
  $.ajax({
	  type: 'GET',
	  url: '../ajax/get_drop_m.php',
	  data:{'id':'1'},
	  success: function(data)
	  {
		  $('#live_line_drops_m_sub').html(data);
	  }
	});
}

var timerId;
timerId = setInterval(showDrop,5000);

var timerId2;
timerId2 = setInterval(showDrop2,5000);

$('.stop_interval_lent').click(function(){
	clearInterval(timerId);
	clearInterval(timerId2);
});

$('.start_interval_lent').click(function(){
	timerId = setInterval(showDrop,5000);
	showDrop();
	
	timerId2 = setInterval(showDrop2,5000);
	showDrop2();
});
	
$('audio#sounds_of_god')[0].volume = 0.3;
$('audio#sounds_of_god')[1].volume = 0.3;
$('audio#sounds_of_god')[2].volume = 0.2;
	
$('.jelly_bord').mouseenter(function ()
{
	$(this).stop(false, true);
	$(this).css({border: '0 solid #ff7c00'}).animate(
	{
		"border-bottom-width": "5px"
	}, 100);
}).mouseleave(function ()
{
	$(this).stop(false, true);
	$(this).animate(
	{
		"border-bottom-width": "0px"
    }, 100);
});

$('.soundplay').mouseenter(function ()
{
	$('audio#sounds_of_god')[0].pause();
	$('audio#sounds_of_god')[0].currentTime = 0;
	$('audio#sounds_of_god')[0].play();
});

$('#text_user_top_down > a > img').mouseenter(function ()
{
	$(this).stop(false, true);
	$(this).toggleClass('img_zoom1');
}).mouseleave(function ()
{
	$(this).stop(false, true);
	$(this).toggleClass('img_zoom1');
});

$(".payment_click").click(function(){
	$("#tv_overlay2").show();
	$("#popup_payment").fadeIn(300);
});

$(".payment_click2").click(function(){
	$("#tv_overlay22").show();
	$("#popup_payment2").fadeIn(300);
});

$(".close_payment").click(function(){
	$("#tv_overlay2").hide();
	$("#popup_payment").fadeOut(300);
	$("#popup_payment2").fadeOut(300);
	$('.popup_payment_op').hide();
});

$("#tv_overlay2").click(function(){
	$("#tv_overlay2").hide();
	$("#popup_payment").fadeOut(300);
	$("#popup_payment2").fadeOut(300);
	$('.popup_payment_op').hide();
});

$("#tv_overlay22").click(function(){
	$("#tv_overlay2").hide();
	$("#popup_payment").fadeOut(300);
	$("#popup_payment2").fadeOut(300);
	$('.popup_payment_op').hide();
});

$("#tv_overlay3").click(function(){
	$("#swipe_nav").animate({"left": "-=80%"}, 200);
	$("#tv_overlay3").hide();
});

});