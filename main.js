var autoClick = setInterval(Game.ClickCookie, 4);

GoldenCookieClick = function () {
  if (Game.shimmers[0] != null) { 
    Game.shimmers[0].pop();
    setTimeout(GoldenCookieClick, 5);
  }
  else setTimeout(GoldenCookieClick, 1000);
}

GoldenCookieClick();
