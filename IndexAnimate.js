// JavaScript Document
//Script for index page and restart page animations
$(function(){
"use strict";

//image jiggle on click, commented-out alternate method
var $faceimage =$('.image')

$faceimage.on('mouseenter', function(){
//	$faceimage.animate({opacity: '0.5'}, "50");
//	$faceimage.animate({marginLeft: '+=100px'}, "20");
//	$faceimage.animate({opacity: '1.0'}, "50");
//	$faceimage.animate({marginLeft: '-=100px'}, "20");
	$faceimage.animate({opacity: '0.5', marginLeft: '+=10px',}, "fast");
	$faceimage.animate({opacity: '1.0', marginLeft: '-=10px',}, "fast");
});
var $font = $('p.body')
//font size up
$('button#plus').click(function(){
	$font.animate({fontSize: '+=2px'}, "fast");
});
//font size down
$('button#minus').click(function(){
	$font.animate({fontSize: '-=2px'}, "fast");
});

var $bodyslide = $('body');

$bodyslide.animate({marginTop: '30px'}, 1000);
	
$('h1').css("fontSize", "900%");
$('h1').delay(1000).animate({fontSize: '45px'}, 1500);

$('a').click(function(e){
	e.preventDefault();
var href = $(this).attr('href')
	$bodyslide.animate({marginTop: '+=600', opacity: '0.0', }, 1000, function() {window.location = href; });
});

});