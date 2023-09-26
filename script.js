var button = document.querySelector(".btn");

function changeTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (button.classList.contains("btn-light")) {
        button.classList.remove("btn-light");
        button.classList.add("btn-dark");
        button.textContent = "Light Mode";
    } else {
        button.classList.remove("btn-dark");
        button.classList.add("btn-light");
        button.textContent = "Dark Mode";
    }
}
