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
            str = str.replaceAll("^", "**")
            str = str.replaceAll("sin", "Math.sin")
            str = str.replaceAll("cos(pi/2)", "0")
            str = str.replaceAll("cos", "Math.cos")
            str = str.replaceAll("tan(pi/2)", "(1/0)")
            str = str.replaceAll("tan", "Math.tan")
            str = str.replaceAll("pi", "Math.PI")
            str = str.replaceAll("e", "Math.E")
            str = str.replaceAll("ln", "Math.log")
            str = str.replaceAll(blank, new_str)
            str = str.replaceAll("√", "Math.sqrt")
            str = str.replaceAll("0^0", "undefined")
            str = eval(str)
            str = str.toString();
            str = str.replaceAll("NaN", "undefined")
            str = str.replace("1.2246467991473532e-16", "0")
            document.querySelector('textarea').value = str
        }
    })
})
