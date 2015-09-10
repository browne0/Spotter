<?php
session_start();
require_once("twitteroauth/twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "@spotterlife";
$notweets = 30;
$consumerkey = "kw06yRlzgsBl4Dx5LJQrGCtln";
$consumersecret = "ssaoIFRiLC0XpF9HD13DC538zMKKeLOmcT0Ni6SC1snpyonYXR";
$accesstoken = "3064045145-PFfMlxGobM8YHDhIffurmtaNMEw5UL2P712RY0N";
$accesstokensecret = "sUfhtFAwscWWPk9Po129zNsEQw8JmE1Ov86y08AoifWAn";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>