const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

let text = document.lastModified;
document.getElementById("demo").innerHTML = text;

var date = new Date(); 
var year = date.getFullYear();
document.getElementById('curYr').innerHTML = year