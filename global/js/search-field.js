const search = document.getElementById("search");
search.oninput = () => {
    search.value = search.value.replace(/[!@#$%^&*()]/g, '');
    if (search.value.length >= 4){
        document.querySelector(".about__search-img").disabled = false;
    } else document.querySelector(".about__search-img").disabled = true;
}
