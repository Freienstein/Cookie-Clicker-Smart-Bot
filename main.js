Cache = {};

Cache.AddQueue = function() {
	Cache.Queue = document.createElement('script');
	Cache.Queue.type = 'text/javascript';
	Cache.Queue.setAttribute('src', 'http://aktanusa.github.io/CookieMonster/queue/queue.js');
	document.head.appendChild(CM.Cache.Queue);
}

Cache.AddQueue();

Game.ClickCookie();
