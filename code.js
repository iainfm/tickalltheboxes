function eventFire(el, etype){
		if (el.fireEvent) {
		el.fireEvent('on' + etype);
	} else {
		var evObj = document.createEvent('Events');
		evObj.initEvent(etype, true, false);
		el.dispatchEvent(evObj);
	}
	}

var elems = document.querySelectorAll('*[id^="_weave_e_"]');
elems.forEach(function(elem) { if (elem.classList.contains('azc-checkBox-unchecked')) { eventFire(elem, 'click') } })
