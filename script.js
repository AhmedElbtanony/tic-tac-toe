var completed = 0;
function XvsO(howWin) {
    if (howWin == "X") {
        let XnumberBox = document.getElementById('X-num');
        let Xnumber = parseInt(XnumberBox.textContent, 10);
        Xnumber += 1;
        XnumberBox.textContent = Xnumber;
    } else if (howWin == "O") {
        let OnumberBox = document.getElementById('O-num');
        let Onumber = parseInt(OnumberBox.textContent, 10);
        Onumber += 1;
        OnumberBox.textContent = Onumber;
    } else if (howWin == "draw") {
        let drawNumberBox = document.getElementById('draw-num');
        let drawNumber = parseInt(drawNumberBox.textContent, 10);
        drawNumber += 1;
        drawNumberBox.textContent = drawNumber;
    }
}
function resetAll() {
    let XnumberBox = document.getElementById('X-num');
    let OnumberBox = document.getElementById('O-num');
    let drawNumberBox = document.getElementById('draw-num');
    let Xnumber = parseInt(XnumberBox.textContent, 10);
    let Onumber = parseInt(OnumberBox.textContent, 10);
    let drawNumber = parseInt(drawNumberBox.textContent, 10);
    Xnumber = 0;
    Onumber = 0;
    drawNumber = 0;
    XnumberBox.textContent = Xnumber;
    OnumberBox.textContent = Onumber;
    drawNumberBox.textContent = drawNumber;
    completed = 0
    document.getElementById("top-left").disabled = false;
    document.getElementById("top-center").disabled = false;
    document.getElementById("top-right").disabled = false;
    document.getElementById("mid-left").disabled = false;
    document.getElementById("mid-center").disabled = false;
    document.getElementById("mid-right").disabled = false;
    document.getElementById("bottom-left").disabled = false;
    document.getElementById("bottom-center").disabled = false;
    document.getElementById("bottom-right").disabled = false;
    var squirInput1 = document.getElementById("top-left")
    squirInput1.innerHTML = "";
    var squirInput2 = document.getElementById("top-center")
    squirInput2.innerHTML = "";
    var squirInput3 = document.getElementById("top-right")
    squirInput3.innerHTML = "";
    var squirInput4 = document.getElementById("mid-left")
    squirInput4.innerHTML = "";
    var squirInput5 = document.getElementById("mid-center")
    squirInput5.innerHTML = "";
    var squirInput6 = document.getElementById("mid-right")
    squirInput6.innerHTML = "";
    var squirInput7 = document.getElementById("bottom-left")
    squirInput7.innerHTML = "";
    var squirInput8 = document.getElementById("bottom-center")
    squirInput8.innerHTML = "";
    var squirInput9 = document.getElementById("bottom-right")
    squirInput9.innerHTML = "";
    let element1 = document.getElementById('top-left');
    element1.style.backgroundColor = 'rgb(149, 159, 197)';
    let element2 = document.getElementById('top-center');
    element2.style.backgroundColor = 'rgb(149, 159, 197)';
    let element3 = document.getElementById('top-right');
    element3.style.backgroundColor = 'rgb(149, 159, 197)';
    let element4 = document.getElementById('mid-left');
    element4.style.backgroundColor = 'rgb(149, 159, 197)';
    let element5 = document.getElementById('mid-center');
    element5.style.backgroundColor = 'rgb(149, 159, 197)';
    let element6 = document.getElementById('mid-right');
    element6.style.backgroundColor = 'rgb(149, 159, 197)';
    let element7 = document.getElementById('bottom-left');
    element7.style.backgroundColor = 'rgb(149, 159, 197)';
    let element8 = document.getElementById('bottom-center');
    element8.style.backgroundColor = 'rgb(149, 159, 197)';
    let element9 = document.getElementById('bottom-right');
    element9.style.backgroundColor = 'rgb(149, 159, 197)';
}
function resetResult() {
    let XnumberBox = document.getElementById('X-num');
    let OnumberBox = document.getElementById('O-num');
    let drawNumberBox = document.getElementById('draw-num');
    let Xnumber = parseInt(XnumberBox.textContent, 10);
    let Onumber = parseInt(OnumberBox.textContent, 10);
    let drawNumber = parseInt(drawNumberBox.textContent, 10);
    Xnumber = 0;
    Onumber = 0;
    drawNumber = 0;
    XnumberBox.textContent = Xnumber;
    OnumberBox.textContent = Onumber;
    drawNumberBox.textContent = drawNumber;
}
function reset() {
    completed = 0
    document.getElementById("top-left").disabled = false;
    document.getElementById("top-center").disabled = false;
    document.getElementById("top-right").disabled = false;
    document.getElementById("mid-left").disabled = false;
    document.getElementById("mid-center").disabled = false;
    document.getElementById("mid-right").disabled = false;
    document.getElementById("bottom-left").disabled = false;
    document.getElementById("bottom-center").disabled = false;
    document.getElementById("bottom-right").disabled = false;
    var squirInput1 = document.getElementById("top-left")
    squirInput1.innerHTML = "";
    var squirInput2 = document.getElementById("top-center")
    squirInput2.innerHTML = "";
    var squirInput3 = document.getElementById("top-right")
    squirInput3.innerHTML = "";
    var squirInput4 = document.getElementById("mid-left")
    squirInput4.innerHTML = "";
    var squirInput5 = document.getElementById("mid-center")
    squirInput5.innerHTML = "";
    var squirInput6 = document.getElementById("mid-right")
    squirInput6.innerHTML = "";
    var squirInput7 = document.getElementById("bottom-left")
    squirInput7.innerHTML = "";
    var squirInput8 = document.getElementById("bottom-center")
    squirInput8.innerHTML = "";
    var squirInput9 = document.getElementById("bottom-right")
    squirInput9.innerHTML = "";
    let element1 = document.getElementById('top-left');
    element1.style.backgroundColor = 'rgb(149, 159, 197)';
    let element2 = document.getElementById('top-center');
    element2.style.backgroundColor = 'rgb(149, 159, 197)';
    let element3 = document.getElementById('top-right');
    element3.style.backgroundColor = 'rgb(149, 159, 197)';
    let element4 = document.getElementById('mid-left');
    element4.style.backgroundColor = 'rgb(149, 159, 197)';
    let element5 = document.getElementById('mid-center');
    element5.style.backgroundColor = 'rgb(149, 159, 197)';
    let element6 = document.getElementById('mid-right');
    element6.style.backgroundColor = 'rgb(149, 159, 197)';
    let element7 = document.getElementById('bottom-left');
    element7.style.backgroundColor = 'rgb(149, 159, 197)';
    let element8 = document.getElementById('bottom-center');
    element8.style.backgroundColor = 'rgb(149, 159, 197)';
    let element9 = document.getElementById('bottom-right');
    element9.style.backgroundColor = 'rgb(149, 159, 197)';
}
function drawLook() {
    let element1 = document.getElementById('top-left');
    element1.style.backgroundColor = 'red';
    let element2 = document.getElementById('top-center');
    element2.style.backgroundColor = 'red';
    let element3 = document.getElementById('top-right');
    element3.style.backgroundColor = 'red';
    let element4 = document.getElementById('mid-left');
    element4.style.backgroundColor = 'red';
    let element5 = document.getElementById('mid-center');
    element5.style.backgroundColor = 'red';
    let element6 = document.getElementById('mid-right');
    element6.style.backgroundColor = 'red';
    let element7 = document.getElementById('bottom-left');
    element7.style.backgroundColor = 'red';
    let element8 = document.getElementById('bottom-center');
    element8.style.backgroundColor = 'red';
    let element9 = document.getElementById('bottom-right');
    element9.style.backgroundColor = 'red';
    XvsO("draw")
}
function stop() {
    document.getElementById("top-left").disabled = true;
    document.getElementById("top-center").disabled = true;
    document.getElementById("top-right").disabled = true;
    document.getElementById("mid-left").disabled = true;
    document.getElementById("mid-center").disabled = true;
    document.getElementById("mid-right").disabled = true;
    document.getElementById("bottom-left").disabled = true;
    document.getElementById("bottom-center").disabled = true;
    document.getElementById("bottom-right").disabled = true;
    completed = 10
}
function searchWin() {
    let button1 = document.getElementById('top-left');
    let button2 = document.getElementById('top-center');
    let button3 = document.getElementById('top-right');
    let button4 = document.getElementById('mid-left');
    let button5 = document.getElementById('mid-center');
    let button6 = document.getElementById('mid-right');
    let button7 = document.getElementById('bottom-left');
    let button8 = document.getElementById('bottom-center');
    let button9 = document.getElementById('bottom-right');
    let text1 = button1.textContent;
    let text2 = button2.textContent;
    let text3 = button3.textContent;
    let text4 = button4.textContent;
    let text5 = button5.textContent;
    let text6 = button6.textContent;
    let text7 = button7.textContent;
    let text8 = button8.textContent;
    let text9 = button9.textContent;
    if (text1 === "") {
    } else if (text1 === text2 && text2 === text3) {
        let element1 = document.getElementById('top-left');
        element1.style.backgroundColor = 'rgb(62, 241, 77)';
        let element2 = document.getElementById('top-center');
        element2.style.backgroundColor = 'rgb(62, 241, 77)';
        let element3 = document.getElementById('top-right');
        element3.style.backgroundColor = 'rgb(62, 241, 77)';
        if (text1 == "X") {
            XvsO("X")
        } else if (text1 == "O") {
            XvsO("O")
        }
        stop()
    }
    if (text4 === "") {
    } else if (text4 === text5 && text5 === text6) {
        let element4 = document.getElementById('mid-left');
        element4.style.backgroundColor = 'rgb(62, 241, 77)';
        let element5 = document.getElementById('mid-center');
        element5.style.backgroundColor = 'rgb(62, 241, 77)';
        let element6 = document.getElementById('mid-right');
        element6.style.backgroundColor = 'rgb(62, 241, 77)';
        if (text4 == "X") {
            XvsO("X")
        } else if (text4 == "O") {
            XvsO("O")
        }
        stop()
    }
    if (text7 === "") {
    } else if (text7 === text8 && text8 === text9) {
        let element7 = document.getElementById('bottom-left');
        element7.style.backgroundColor = 'rgb(62, 241, 77)';
        let element8 = document.getElementById('bottom-center');
        element8.style.backgroundColor = 'rgb(62, 241, 77)';
        let element9 = document.getElementById('bottom-right');
        element9.style.backgroundColor = 'rgb(62, 241, 77)';
        if (text7 == "X") {
            XvsO("X")
        } else if (text7 == "O") {
            XvsO("O")
        }
        stop()
    }
    if (text1 === "") {
    } else if (text1 === text4 && text4 === text7) {
        let element1 = document.getElementById('top-left');
        element1.style.backgroundColor = 'rgb(62, 241, 77)';
        let element4 = document.getElementById('mid-left');
        element4.style.backgroundColor = 'rgb(62, 241, 77)';
        let element7 = document.getElementById('bottom-left');
        element7.style.backgroundColor = 'rgb(62, 241, 77)';
        if (text1 == "X") {
            XvsO("X")
        } else if (text1 == "O") {
            XvsO("O")
        }
        stop()
    }
    if (text2 === "") {
    } else if (text2 === text5 && text5 === text8) {
        let element2 = document.getElementById('top-center');
        element2.style.backgroundColor = 'rgb(62, 241, 77)';
        let element5 = document.getElementById('mid-center');
        element5.style.backgroundColor = 'rgb(62, 241, 77)';
        let element8 = document.getElementById('bottom-center');
        element8.style.backgroundColor = 'rgb(62, 241, 77)';
        if (text2 == "X") {
            XvsO("X")
        } else if (text2 == "O") {
            XvsO("O")
        }
        stop()
    }
    if (text3 === "") {
    } else if (text3 === text6 && text6 === text9) {
        let element3 = document.getElementById('top-right');
        element3.style.backgroundColor = 'rgb(62, 241, 77)';
        let element6 = document.getElementById('mid-right');
        element6.style.backgroundColor = 'rgb(62, 241, 77)';
        let element9 = document.getElementById('bottom-right');
        element9.style.backgroundColor = 'rgb(62, 241, 77)';
        if (text3 == "X") {
            XvsO("X")
        } else if (text3 == "O") {
            XvsO("O")
        }
        stop()
    }
    if (text1 === "") {
    } else if (text1 === text5 && text5 === text9) {
        let element1 = document.getElementById('top-left');
        element1.style.backgroundColor = 'rgb(62, 241, 77)';
        let element5 = document.getElementById('mid-center');
        element5.style.backgroundColor = 'rgb(62, 241, 77)';
        let element9 = document.getElementById('bottom-right');
        element9.style.backgroundColor = 'rgb(62, 241, 77)';
        if (text1 == "X") {
            XvsO("X")
        } else if (text1 == "O") {
            XvsO("O")
        }
        stop()
    }
    if (text3 === "") {
    } else if (text3 === text5 && text5 === text7) {
        let element3 = document.getElementById('top-right');
        element3.style.backgroundColor = 'rgb(62, 241, 77)';
        let element5 = document.getElementById('mid-center');
        element5.style.backgroundColor = 'rgb(62, 241, 77)';
        let element7 = document.getElementById('bottom-left');
        element7.style.backgroundColor = 'rgb(62, 241, 77)';
        if (text3 == "X") {
            XvsO("X")
        } else if (text3 == "O") {
            XvsO("O")
        }
        stop()
    }
}
function printO() {
    if (completed == 9) {
        drawLook()
    } else if (completed == 10) {
        console.log("win")
    }
    else {
        var randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber == 0) {
            randomNumber += 1
        }
        if (randomNumber == 1) {
            var button = document.getElementById("top-left");
            if (button.disabled) {
                printO()
            } else {
                topLeft('O')
            }
        } else if (randomNumber == 2) {
            var button = document.getElementById("top-center");
            if (button.disabled) {
                printO()
            } else {
                topCenter('O')
            }
        }
        else if (randomNumber == 3) {
            var button = document.getElementById("top-right");
            if (button.disabled) {
                printO()
            } else {
                topRight('O')
            }
        } else if (randomNumber == 4) {
            var button = document.getElementById("mid-left");
            if (button.disabled) {
                printO()
            } else {
                midLeft('O')
            }

        } else if (randomNumber == 5) {
            var button = document.getElementById("mid-center");
            if (button.disabled) {
                printO()
            } else {
                midCenter('O')
            }
        }
        else if (randomNumber == 6) {
            var button = document.getElementById("mid-right");
            if (button.disabled) {
                printO()
            } else {
                midRight('O')
            }
        } else if (randomNumber == 7) {
            var button = document.getElementById("bottom-left");
            if (button.disabled) {
                printO()
            } else {
                bottomLeft('O')
            }

        } else if (randomNumber == 8) {
            var button = document.getElementById("bottom-center");
            if (button.disabled) {
                printO()
            } else {
                bottomCenter('O')
            }
        }
        else if (randomNumber == 9) {
            var button = document.getElementById("bottom-right");
            if (button.disabled) {
                printO()
            } else {
                bottomRight('O')
            }
        }
    }
}
function topLeft(type) {
    completed += 1
    var towPlayersMode = document.getElementById('tow-players');
    var pootMode = document.getElementById('poot');
    if (pootMode.checked) {
        var squirInput = document.getElementById("top-left")
        squirInput.innerHTML = type;
        document.getElementById("top-left").disabled = true;
        searchWin()
        if (type == "X") {
            printO()
        }
    } else if (towPlayersMode.checked) {
        var squirInput = document.getElementById("top-left")
        if (completed % 2 == 0) {
            squirInput.innerHTML = "O";
            document.getElementById("top-left").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        } else {
            squirInput.innerHTML = "X";
            document.getElementById("top-left").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        }
    }
}
function topCenter(type) {
    completed += 1
    var towPlayersMode = document.getElementById('tow-players');
    var pootMode = document.getElementById('poot');
    if (pootMode.checked) {
        var squirInput = document.getElementById("top-center")
        squirInput.innerHTML = type;
        document.getElementById("top-center").disabled = true;
        searchWin()
        if (type == "X") {
            printO()
        }
    } else if (towPlayersMode.checked) {
        var squirInput = document.getElementById("top-center")
        if (completed % 2 == 0) {
            squirInput.innerHTML = "O";
            document.getElementById("top-center").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        } else {
            squirInput.innerHTML = "X";
            document.getElementById("top-center").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        }
    }
}
function topRight(type) {
    completed += 1
    var towPlayersMode = document.getElementById('tow-players');
    var pootMode = document.getElementById('poot');
    if (pootMode.checked) {
        var squirInput = document.getElementById("top-right")
        squirInput.innerHTML = type;
        document.getElementById("top-right").disabled = true;
        searchWin()
        if (type == "X") {
            printO()
        }
    } else if (towPlayersMode.checked) {
        var squirInput = document.getElementById("top-right")
        if (completed % 2 == 0) {
            squirInput.innerHTML = "O";
            document.getElementById("top-right").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        } else {
            squirInput.innerHTML = "X";
            document.getElementById("top-right").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        }
    }
}
function midLeft(type) {
    completed += 1
    var towPlayersMode = document.getElementById('tow-players');
    var pootMode = document.getElementById('poot');
    if (pootMode.checked) {
        var squirInput = document.getElementById("mid-left")
        squirInput.innerHTML = type;
        document.getElementById("mid-left").disabled = true;
        searchWin()
        if (type == "X") {
            printO()
        }
    } else if (towPlayersMode.checked) {
        var squirInput = document.getElementById("mid-left")
        if (completed % 2 == 0) {
            squirInput.innerHTML = "O";
            document.getElementById("mid-left").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        } else {
            squirInput.innerHTML = "X";
            document.getElementById("mid-left").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        }
    }
}
function midCenter(type) {
    completed += 1
    var towPlayersMode = document.getElementById('tow-players');
    var pootMode = document.getElementById('poot');
    if (pootMode.checked) {
        var squirInput = document.getElementById("mid-center")
        squirInput.innerHTML = type;
        document.getElementById("mid-center").disabled = true;
        searchWin()
        if (type == "X") {
            printO()
        }
    } else if (towPlayersMode.checked) {
        var squirInput = document.getElementById("mid-center")
        if (completed % 2 == 0) {
            squirInput.innerHTML = "O";
            document.getElementById("mid-center").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        } else {
            squirInput.innerHTML = "X";
            document.getElementById("mid-center").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        }
    }
}
function midRight(type) {
    completed += 1
    var towPlayersMode = document.getElementById('tow-players');
    var pootMode = document.getElementById('poot');
    if (pootMode.checked) {
        var squirInput = document.getElementById("mid-right")
        squirInput.innerHTML = type;
        document.getElementById("mid-right").disabled = true;
        searchWin()
        if (type == "X") {
            printO()
        }
    } else if (towPlayersMode.checked) {
        var squirInput = document.getElementById("mid-right")
        if (completed % 2 == 0) {
            squirInput.innerHTML = "O";
            document.getElementById("mid-right").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        } else {
            squirInput.innerHTML = "X";
            document.getElementById("mid-right").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        }
    }
}
function bottomLeft(type) {
    completed += 1
    var towPlayersMode = document.getElementById('tow-players');
    var pootMode = document.getElementById('poot');
    if (pootMode.checked) {
        var squirInput = document.getElementById("bottom-left")
        squirInput.innerHTML = type;
        document.getElementById("bottom-left").disabled = true;
        searchWin()
        if (type == "X") {
            printO()
        }
    } else if (towPlayersMode.checked) {
        var squirInput = document.getElementById("bottom-left")
        if (completed % 2 == 0) {
            squirInput.innerHTML = "O";
            document.getElementById("bottom-left").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        } else {
            squirInput.innerHTML = "X";
            document.getElementById("bottom-left").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        }
    }
}
function bottomCenter(type) {
    completed += 1
    var towPlayersMode = document.getElementById('tow-players');
    var pootMode = document.getElementById('poot');
    if (pootMode.checked) {
        var squirInput = document.getElementById("bottom-center")
        squirInput.innerHTML = type;
        document.getElementById("bottom-center").disabled = true;
        searchWin()
        if (type == "X") {
            printO()
        }
    } else if (towPlayersMode.checked) {
        var squirInput = document.getElementById("bottom-center")
        if (completed % 2 == 0) {
            squirInput.innerHTML = "O";
            document.getElementById("bottom-center").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        } else {
            squirInput.innerHTML = "X";
            document.getElementById("bottom-center").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        }
    }
}
function bottomRight(type) {
    completed += 1
    var towPlayersMode = document.getElementById('tow-players');
    var pootMode = document.getElementById('poot');
    if (pootMode.checked) {
        var squirInput = document.getElementById("bottom-right")
        squirInput.innerHTML = type;
        document.getElementById("bottom-right").disabled = true;
        searchWin()
        if (type == "X") {
            printO()
        }
    } else if (towPlayersMode.checked) {
        var squirInput = document.getElementById("bottom-right")
        if (completed % 2 == 0) {
            squirInput.innerHTML = "O";
            document.getElementById("bottom-right").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        } else {
            squirInput.innerHTML = "X";
            document.getElementById("bottom-right").disabled = true;
            searchWin()
            if (completed == 9) {
                drawLook()
            }
        }
    }
}