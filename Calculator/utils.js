let input = document.getElementById("upper-display");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});
let output = document.getElementById("lower-display");
output.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        input.value = output.value;
        document.getElementById("submit").click();
    }
});