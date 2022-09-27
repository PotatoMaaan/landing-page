const divsWithCustomClass = document.querySelectorAll(".custom")
host = window.location.host

divsWithCustomClass.forEach(div => {
    div.textContent = div.textContent.replace("%name%", host)

    switch (div.getAttribute("href")) {
        case "%nxtcld%":
            div.setAttribute("href", "https://cloud." + host)
            break;

        case "%pte%":
            div.setAttribute("href", "https://panel." + host)
            break
        default:
            break;
    }
})