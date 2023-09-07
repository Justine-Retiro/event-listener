const password = document.querySelector('input[type="password"]');
const clickbtn = document.getElementById('btn');
password.addEventListener("focus", (e) => {
    e.target.style.background = "pink";
});

password.addEventListener("blur", (e) => {
    e.target.style.background = "";
})

clickbtn.addEventListener("dblclick", () => {
    document.body.style.backgroundColor="red";
});