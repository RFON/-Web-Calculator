var numberButton = document.getElementsByClassName("number-button")
var display = document.getElementById("screen")
var pNode = display.getElementsByTagName("p")
var oppositeButton = document.getElementById("opposite-button")
var oppositeFlag = false
var opposite
var firstNumber
window.onload = function() {
    for (var i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener('click', function() {
            var num = this.getElementsByTagName("p")[0].innerHTML
            var initial = pNode[0].innerHTML
            if (initial == "0" && num != ".") {
                return
            } else if (num == "±") {
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
            } else if (num == '.' && (initial.split(".").length == 2 || initial == '')) {
                return;
            } else {
                pNode[0].innerHTML += num
            }
        })
    }
}