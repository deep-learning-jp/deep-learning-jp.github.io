function typeWriter(e, t, n, r) {
	var i = "";
	var s = t.length;
	var o = 0;
	var u = new Audio(n);
	$(e).text("");
	var a = setInterval(function () {
		if (!u.paused) {
			u.pause();
			u.currentTime = 0
		}
		var n = i + t.charAt(o);
		$(e).text(n);
		if (t.charAt(o) !== " ") {
			u.play()
		}
		i = n;
		if (o === s - 1) {
			clearInterval(a)
		}
		o = o + 1
		

	}, r)
}