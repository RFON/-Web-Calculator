var numberButton = document.getElementsByClassName("number-button")
var display = document.getElementById("screen")
var pNode = display.getElementsByTagName("p")
var oppositeButton = document.getElementById("opposite-button")
var oppositeFlag = false
var opposite
var firstNumber
var secondNumber
var result
var doubleOperator = ""
var singleOperator = ""
var operatorFlag = false
var resultConfirm = false
window.onload = function() {
    //数字、小数点、正负号按钮添加点击事件
    for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener('click', function() {
            if (operatorFlag == true) {
                pNode[0].innerHTML = ""
                operatorFlag = false
            }
            var num = this.getElementsByTagName("p")[0].innerHTML
            var initial = pNode[0].innerHTML
                //首个数字为0的时候只能跟小数点
            if (initial == "0" && num != ".") {
                return
            }
            //正负号切换
            else if (num == "±") {
                oppositeFlag = !oppositeFlag
                if (oppositeFlag == true) {
                    opposite = '-'
                    opposite += pNode[0].innerHTML
                    console.log("-")
                } else {
                    console.log("+")
                    opposite = pNode[0].innerHTML.match(/([0-9]+)(.)?([0-9]*)/)[0]
                }
                pNode[0].innerHTML = opposite
            }
            //不能有多个小数点存在
            else if (num == '.' && (initial.split(".").length == 2 || initial == '')) {
                return;
            } else {
                pNode[0].innerHTML += num
            }
        })
    }
    document.getElementById("back").addEventListener('click', function() {
        var backArray = ""
        for (let i = 0; i < pNode[0].innerHTML.length - 1; i++) {
            backArray += pNode[0].innerHTML[i]
        }
        pNode[0].innerHTML = backArray
    })
    document.getElementById("clear").addEventListener('click', function() {
        pNode[0].innerHTML = ""
        firstNumber = 0
        secondNumber = 0
        doubleOperator = ""
        singleOperator = ""
        operatorFlag = false
        oppositeFlag = false
    })
    document.getElementById("result").addEventListener('click', function() {
            doubleOperation("=")
        })
        //操作符处理
    var doubleOperation = function(operator) {
        if (doubleOperator == "") {
            console.log(pNode[0].innerHTML)
            if (pNode[0].innerHTML == "") {
                return
            } else {
                firstNumber = parseFloat(pNode[0].innerHTML)
            }
            doubleOperator = operator
            operatorFlag = true
            console.log(typeof(firstNumber))
        } else {
            if (secondNumber !== "") {
                if (pNode[0].innerHTML == "") {
                    return
                } else {
                    secondNumber = parseFloat(pNode[0].innerHTML)
                }
                switch (doubleOperator) {
                    case "addition":
                        {
                            result = firstNumber + secondNumber
                            pNode[0].innerHTML = result
                            firstNumber = result
                            break
                        }
                    case "subtraction":
                        {
                            result = firstNumber - secondNumber
                            pNode[0].innerHTML = result
                            console.log(typeof(result))
                            firstNumber = result
                            break
                        }
                    case "multiplication":
                        {
                            result = firstNumber * secondNumber
                            pNode[0].innerHTML = result
                            console.log(typeof(result))
                            firstNumber = result
                            break
                        }
                    case "division":
                        {
                            result = firstNumber / secondNumber
                            pNode[0].innerHTML = result
                            console.log(typeof(result))
                            firstNumber = result
                            break
                        }
                    case "mod":
                        {
                            result = firstNumber % secondNumber
                            pNode[0].innerHTML = result
                            firstNumber = result
                            break
                        }
                }
                doubleOperator = operator
                if (operator == "=") {
                    resultConfirm = true
                }
                operatorFlag = true
                console.log(doubleOperator)
            } else {
                doubleOperator = operator
                console.log(doubleOperator)
                return
            }
        }
    }
    var singleOperation = function(operator) {
        switch (operator) {
            case "sqrt":
                {
                    result = Math.sqrt(pNode[0].innerHTML)
                    pNode[0].innerHTML = result
                    break
                }
            case "sqrt3":
                {
                    result = Math.pow(pNode[0].innerHTML, 1 / 3)
                    pNode[0].innerHTML = result
                    break
                }
            case "pow2":
                {
                    result = Math.pow(pNode[0].innerHTML, 2)
                    pNode[0].innerHTML = result
                    break
                }
            case "pi":
                {
                    pNode[0].innerHTML = 3.1415926535898
                    break
                }
            case "factorial":
                {
                    result = factorial(pNode[0].innerHTML)
                    pNode[0].innerHTML = result
                    break
                }
        }
        operatorFlag = true

    }
    var factorial = function(itself) {
        var total
        if (itself < 0) {
            return 0
        } else if (itself == 0 || itself == 1) {
            total = 1
        } else {
            total = itself * factorial(itself - 1)
        }
        return total
    }
    document.getElementById("addition").addEventListener('click', function() {
        doubleOperation("addition")
    })
    document.getElementById("subtraction").addEventListener('click', function() {
        doubleOperation("subtraction")
    })
    document.getElementById("multiplication").addEventListener('click', function() {
        doubleOperation("multiplication")
    })
    document.getElementById("division").addEventListener('click', function() {
        doubleOperation("division")
    })
    document.getElementById("mod").addEventListener('click', function() {
        doubleOperation("mod")
    })
    document.getElementById("sqrt").addEventListener('click', function() {
        singleOperation("sqrt")
    })
    document.getElementById("sqrt3").addEventListener('click', function() {
        singleOperation("sqrt3")
    })
    document.getElementById("pow2").addEventListener('click', function() {
        singleOperation("pow2")
    })
    document.getElementById("pi").addEventListener('click', function() {
        singleOperation("pi")
    })
    document.getElementById("factorial").addEventListener('click', function() {
        singleOperation("factorial")
    })
}