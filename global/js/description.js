fetch("https://baconipsum.com/api/?type=lucky").then((data) => {
    return data.json()
  })  
  .then((data) => {
    document.querySelector(".ajax__request").innerHTML = data;
  });
