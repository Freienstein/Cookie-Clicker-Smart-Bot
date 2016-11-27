var autoClick = setInterval(Game.ClickCookie, 4);     // smash the dough out of the big cookie

GoldenCookieClick = function () {                     // check for buff cookies
  if (Game.shimmers[0] != null) { 
    Game.shimmers[0].pop();                           
    setTimeout(GoldenCookieClick, 5);                 // if a cookie is found, check again in case of cookie storm
  }
  else setTimeout(GoldenCookieClick, 1000);
}

GoldenCookieClick();
