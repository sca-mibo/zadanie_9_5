window.onload = function() {
	var elemWithButtonClass = document.getElementsByClassName('button');
	console.log(elemWithButtonClass);
	for (var i = 0; i < elemWithButtonClass.length; i++){
		console.log(elemWithButtonClass[i].innerText);
		alert(elemWithButtonClass[i].innerText);
	}
};
