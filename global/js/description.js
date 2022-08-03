const request = new XMLHttpRequest();
 
request.open('GET', "https://baconipsum.com/api/?type=lucky");
request.addEventListener("readystatechange", () => {
	if (request.readyState === 4 && request.status === 200) {
	  document.querySelector(".ajax__request").innerHTML = JSON.parse(request.responseText);
    }
});

request.send();