function toggle(){
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
        document.getElementById("mode").src = "https://img.icons8.com/external-flat-glyph-papa-vector/78/external-Night-Mode-ui-flat-glyph-papa-vector.png";
    }
    else {
        theme.setAttribute('href', 'light.css');
        document.getElementById("mode").src = "https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png";
    }
}