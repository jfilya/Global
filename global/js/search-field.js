const search = document.getElementById("search");
search.oninput = () => {
    search.value = search.value.replace(/[!@#$%^&*()]/g, '');
}

