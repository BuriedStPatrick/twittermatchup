/// <reference path="../../typings/jquery/jquery.d.ts"/>
var tweets = [];
$(function(){
	renderTweet(new Tweet('Lol', 'asdasdasd'));
	$('.tile').click(openTweet);
});

function renderTweet(tweet){
	var html = '<div class="tile '+randomColor()+'" id="'+tweet.id+'">'
		+ '<div class="symbol">?</div>'
		+ '</div>';
	$('.grid').append($(html));
}

function randomColor(){
	return 'blue';
}

var Tweet = function(text, id){
	this.text = text;
	this.id = id;
}

function openTweet(){
	
}