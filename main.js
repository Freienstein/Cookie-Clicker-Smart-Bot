var clickCount = 0;

CookieClick = function() {
  Game.ClickCookie(); 
  clickCount++;
}

var AutoClick = window.setInterval(CookieClick(), 100);

