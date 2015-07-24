/// <reference path="../../typings/jquery/jquery.d.ts"/>
var tweets = [];
$(function(){
	tweets.push(new Tweet('@buriedstpatrick', 'This is a hardcoded test tweet to test how the display of a tweet card looks. Amazing stuff.', '1', 'red'));
	tweets.push(new Tweet('@requireweb','This is a hardcoded test tweet to test how the display of a tweet card looks. Amazing stuff.', '2', 'green'));
	updateUi();
});

function renderTweet(tweet){
	if($('#' + tweet.id).length == 0){
		var html = '<div class="tile '+tweet.color+'" id="'+tweet.id+'">'
			+ '<div class="symbol">?</div>'
			+ '</div>';
		$('.grid').append($(html));
	}
}

function renderOpenTweet(tweet){
	if(tweet != null){
		var html = $('<div class="opentweet" style="height: 100; width: 0">'
			+ '<div class="author">'+tweet.author+'</div>'
			+ '<div class="text">'+tweet.text+'</div>'
			+ '<div class="close-btn">CLOSE</div>'
			+ '</div>');
		$('.twittermatch-app').append(html);
		$('.opentweet').fadeIn(200).animate({height: '128', width: '300'}, 100);
		$('.close-btn').click(closeTweet);
	}
}

function randomColor(){
	return 'blue';
}

var Tweet = function(author, text, id, color){
	this.author = author;
	this.text = text;
	this.id = id;
	this.color = color;
}

function openTweet(){
	var id = $(this).attr('id');
	var foundTweet;
	for(var i = 0; i < tweets.length; i++){
		if(id == tweets[i].id)
			foundTweet = tweets[i];
	}
	renderOpenTweet(foundTweet);
}

function closeTweet(){
	$('.opentweet').animate({height: '0', width: '0'}, 100, function(){
		$(this).remove();
	});
}

function updateUi(){
	for (var i = 0; i < tweets.length; i++){
		renderTweet(tweets[i]);
	}
	$('.tile').unbind('click');
	$('.tile').click(openTweet);
}