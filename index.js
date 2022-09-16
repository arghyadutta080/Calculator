str = ""
let blank
let new_str
buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((btn) => {
    // console.log(btn)
    btn.addEventListener('click', (element) => {
        // console.log(element.target)
        e = element.target.innerHTML

        const calculation = (num) => {
            if (num == 0 || num == 1) {
                return 1
            }
            else return num*calculation(num - 1)
        }

        const factorial = (fact_str) =>{
            fact_str.split("").reverse().join("")
            fact_str = parseInt(fact_str)
            ans = calculation(fact_str)
            return ans
        }

        if (e != "=" && e != "ON" && e != "OFF" && e != "DEL" && e != "x^y" && e != "x!" && e != "√" && e != "sin" && e != "tan" && e != "cos" && e != "ln") {
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

        else if (e == "x^y") {
            str = str + "^"
            document.querySelector('textarea').value = str
        }

        else if (e == "x!") {
            str = str + "!"
            document.querySelector('textarea').value = str
            char = ""
            blank = ""
            for (let i = str.length - 2; i >= 0; i--) {
                if (str[i] >= '0' && str[i] <= '9') {
                    char = char + str[i]
                }
                else break;
            }
            blank = blank + char.split("").reverse().join("") + "!"
            // console.log(blank)
            x = factorial(char)
            new_str = x.toString();
            // console.log(new_str)             
        }

        else if (e == "√") {
            str = str + "√("
            document.querySelector('textarea').value = str
        }

        else if (e == "sin") {
            str = str + "sin("
            document.querySelector('textarea').value = str
        }

        else if (e == "tan") {
            str = str + "tan("
            document.querySelector('textarea').value = str
        }

        else if (e == "cos") {
            str = str + "cos("
            document.querySelector('textarea').value = str
        }

        else if (e == "ln") {
            str = str + "ln("
            document.querySelector('textarea').value = str
        }

        else if (e == "=") {
            str = str.replace("sin", "Math.sin")
            str = str.replace("cos(pi/2)", "0")
            str = str.replace("cos", "Math.cos")
            str = str.replace("tan(pi/2)", "(1/0)")
            str = str.replace("tan", "Math.tan")
            str = str.replace("pi", "Math.PI")
            str = str.replace("e", "Math.E")
            str = str.replace("ln", "Math.log")
            str = str.replace(blank, new_str)
            str = str.replace("√", "Math.sqrt")
            str = str.replace("0^0", "undefined")
            str = str.replace("^", "**")
            str = eval(str)
            str = str.toString();
            str = str.replace("NaN", "undefined")
            document.querySelector('textarea').value = str
        }
    })
})
