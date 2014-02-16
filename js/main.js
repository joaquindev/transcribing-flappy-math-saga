var debugmode = false;

var states = Object.freeze({
  SplashScreen: 0,
  GameScreen: 1,
  ScoreScreen: 2
});

var currentstate;

var gravity = 0.25;
var velocity = 0;
var position = 180;
var rotation = 0;
var jump = -4.6;

var score = 0;
var highscore = 0;

var pipeheight = 300;
var pipewidth = 52;
var pipes = [];

var replayclickable = false;

//sounds
var volume = 30;
var soundJump = new buzz.sound('assets/sounds/sfx_wing.ogg');
var soundScore = new buzz.sound('assets/sounds/sfx_point.ogg');
var soundHit = new buzz.sound('assets/sounds/sfx_hit.ogg');
var soundDie = new buzz.sound('assets/sounds/sfx_die.ogg');
var soundSwoosh = new buzz.sound('assets/sounds/sfx_swooshing.ogg');
buzz.all().setVolume(volume);

//loops
var loopGameloop;
var loopPipeloop;

//start point!!!
$(document).ready(function(){
  if(window.location.search == "?debug") debugmode = true;
  if(window.location.search == "?easy") pipeheight = 200;

  //get the highscore
  var savedscore = getCookie("highscore");
  if(savedscore !== "") highscore = parseInt(savedscore);

  //start with the splash screen
  showSplash();
});

function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++){
    var c = ca[i].trim();
    if(c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
}

function setCookie(cname, cvalue, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function showSplash(){
  currentstate = states.SplashScreen;

  //set the defaults
  velocity = 0;
  position = 180;
  rotation = 0;
  score = 0;

  //update the player in preparation for the next game
  $(".player").css({ y: 0, x: 0});
  //updatePlayer($('#player'));

  soundSwoosh.stop();
  soundSwoosh.play();

  //clear out all the pipes if there are any
  $('.pipe').remove();
  pipes = []; 

  //make everything animated again
  $('.animated').css('animation-play-state', 'running');
  $('.animated').css('-webkit-animation-play-state', 'running');

  //fade in the splash
  $('.splash').transition({ opacity: 1}, 2000, 'ease');
}

function startGame(){
  currentstate = states.GameScreen;

  //fade out the splash
  $('.splash').stop();
  $('.splash').transition({ opacity: 0 }, 500, 'ease');

  //update the big score
  setBigScore();


  //TODO_ over here!
}


