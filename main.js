var autoClick = setInterval(Game.ClickCookie, 4);

GoldenCookieClick = function () {
  if (Game.shimmers[0] != null) {
    Game.shimmers[0].pop();
    if (Game.hasBuff('Cookie storm')) setTimeout(GoldenCookieClick, 5);
    else setTimeout(GoldenCookieClick, 5000);
  }
    
GoldenCookieClick();
