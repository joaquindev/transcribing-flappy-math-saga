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
  showSplas();
});



