str = ""
buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((btn) => {
    // console.log(btn)
    btn.addEventListener('click', (element) => {
        // console.log(element.target)
        e = element.target.innerHTML
        if (e != "=" && e != "ON" && e != "OFF" && e != "DEL" && e != "sin" && e != "cos" && e != "tan" && e != "pi" && e != "x^y") {
            str = str + e
            document.querySelector('textarea').value = str
        }
        else if (e == "ON") {
            str = ""
            document.querySelector('textarea').value = "0"
        }
        else if (e == "OFF") {
            str = ""
            document.querySelector('textarea').value = str
        }
        else if (e == "DEL") {
            str = str.slice(0, -1)
            document.querySelector('textarea').value = str
        }
        else if (e == "pi") {
            pi = "Math.PI"
            str = str + pi
            document.querySelector('textarea').value = str
        }
        else if (e == "sin") { 
            trigo = "Math.sin"
            str = str + trigo
            document.querySelector('textarea').value = str
        }
        else if (e == "cos") { 
            trigo = "Math.cos"
            str = str + trigo
            document.querySelector('textarea').value = str
        }
        else if (e == "tan") { 
            trigo = "Math.tan"
            str = str + trigo
            document.querySelector('textarea').value = str
        }
        else if (e == "x^y") {
            str = str + "**"
            document.querySelector('textarea').value = str
        }
        else if (e == "=") {
            str = eval(str)
            document.querySelector('textarea').value = str
        }
    })
})
