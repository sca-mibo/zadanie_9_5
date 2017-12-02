var elemWithButtonClass = document.getElementsByClassName('button');
console.log(elemWithButtonClass);
for (var i = 0; i <= elemWithButtonClass.length; i++){
	alert(elemWithButtonClass[i].innerText);
}