const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");
const hamburger = document.getElementById("hamburger-1")

button.onclick = function() {
    if (navigation.style.visibility== 'visible'){
        navigation.style.visibility = "hidden";
        navigation.style.opacity = 0;
        body.style.overflow = "visible";
        hamburger.classList.toggle("is-active");
    }
    else{
    navigation.style.visibility = "visible";
    navigation.style.opacity = 1;
    body.style.overflow = "hidden";
    hamburger.classList.toggle("is-active");
    }
}