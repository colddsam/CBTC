function press(val) {
    var display = document.getElementById("upper-display");
    display.value += val;
}
function check() {
    var input = document.getElementById("upper-display");
    var output = document.getElementById("lower-display");
    output.value = '';
    try {
        if (eval(input.value) == 'Infinity') {
            output.value+='Undefined'
        }
        else {
            output.value += eval(input.value);
        }
    }
    catch (err) {
        alert('please check the input');
    }
}
function clear_text() {
    try {
        var input=document.getElementById("upper-display");
        var output = document.getElementById("lower-display");
        input.value = '';
        output.value = '';
    }
    catch (err) {
        alert(err);
    }
}
function back() {
    var input = document.getElementById("upper-display");
    if (input.value == '') {
        alert('No Input Available');
    }
    else {
    input.value = input.value.slice(0, -1);
    }
}
function toggle(){
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'style.css') {
        theme.setAttribute('href', 'dark.css');
        document.getElementById("mode").src = "https://img.icons8.com/external-others-inmotus-design/67/000000/external-Night-Mode-round-icons-others-inmotus-design-6.png";
    }
    else {
        theme.setAttribute('href', 'style.css');
        document.getElementById("mode").src = "https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png";
    }
}