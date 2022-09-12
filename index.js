str = ""
buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((btn) => {
    // console.log(btn)
    btn.addEventListener('click', (element) => {
        // console.log(element.target)
        if (element.target.innerHTML != "=" && element.target.innerHTML != "ON" && element.target.innerHTML != "OFF" && element.target.innerHTML != "DEL") {
            str = str + element.target.innerHTML
            document.querySelector('textarea').value = str
        }
        else if (element.target.innerHTML == "ON") {
            document.querySelector('textarea').value = "0"
        }
        else if (element.target.innerHTML == "OFF") {
            document.querySelector('textarea').value = ""
        }
        else if (element.target.innerHTML == "DEL") {
            str = str.slice(0,-1)
            document.querySelector('textarea').value = str
        }
        else if (element.target.innerHTML == "=") {
            str = eval(str)
            document.querySelector('textarea').value = str
        }
    })
})
