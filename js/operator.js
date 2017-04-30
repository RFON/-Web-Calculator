var number = document.getElementsByClassName("number-button")
var display = document.getElementById("screen")
var operator = ''
window.onload = function() {
    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener('click', function() {
            var num = this.getElementsByTagName("p")[0].innerHTML
            var pNode = display.getElementsByTagName("p")
            var initial = pNode[0].innerHTML
            console.log(initial)
                // var result = num.replace(/<[^>]+>/g, "")
                // console.log(result)
            if (initial == "0" && num != ".") {
                return
            } else {
                pNode[0].innerHTML += num
            }
            console.log(display.getElementsByTagName("p")[0].innerHTML)
        })
    }
}