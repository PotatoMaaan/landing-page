const divsWithCustomClass = document.querySelectorAll(".custom")

divsWithCustomClass.forEach(div => {
    div.textContent = div.textContent.replace("%name%", window.location.host)
})