const divsWithCustomClass = document.querySelectorAll(".custom")
host = window.location.host

divsWithCustomClass.forEach(div => {
    div.textContent = div.textContent.replace("%name%", host)

    switch (div.getAttribute("href")) {
        case "%nxtcld%":
            div.setAttribute("href", "cloud." + host)
            break;

        case "%pte%":
            div.setAttribute("href", "panel." + host)
            break
        default:
            break;
    }
})