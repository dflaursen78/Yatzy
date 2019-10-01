class Die {
    constructor() {
        this.value = 0;

    }
    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
    }
}

class Dots {
    constructor(eyes) {
        this.value = 0;
        this.used = false;
        this.eyes = eyes;
        this.rollCounter = 0;
    }
    addNumbers(die1, die2, die3, die4, die5, die6) {
        if (die1.value === this.eyes)
            this.values += this.eyes;

        if (die2.value === this.eyes)
            this.value += this.eyes;

        if (die3.value === this.eyes)
            this.value += this.eyes;

        if (die4.value === this.eyes)
            this.value += this.eyes;

        if (die5.value === this.eyes)
            this.value += this.eyes;

        if (die6.value === this.eyes)
            this.value += this.eyes;
        this.used = true;
    }
}

class Player {
    constructor(color) {
        this.color = color;
    }
}


class Yatzy {
    constructor() {
        this.players = [];
        this.die1 = new Die();
        this.die2 = new Die();
        this.die3 = new Die();
        this.die4 = new Die();
        this.die5 = new Die();
        this.die6 = new Die();
        this.rollCounter = 0;

        // det første nr i arrayet er C1R1 osv.....
        this.collumn1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    }
    /*
        addPlayer(player) {
            this.players.push(player);
        }
    */
    clearDice() {
        this.rollCounter = 0;
        document.getElementById("c1").checked = false;
        document.getElementById("c2").checked = false;
        document.getElementById("c3").checked = false;
        document.getElementById("c4").checked = false;
        document.getElementById("c5").checked = false;
        document.getElementById("c6").checked = false;
    }

    //her holder man tallet (checkbox)
    rollDice() {
        // antal rull man har
        if (this.rollCounter <= 2) {

            if (document.getElementById("c1").checked == false) {
                this.die1.roll();
            }

            if (document.getElementById("c2").checked == false) {
                this.die2.roll();
            }

            if (document.getElementById("c3").checked == false) {
                this.die3.roll();
            }

            if (document.getElementById("c4").checked == false) {
                this.die4.roll();
            }

            if (document.getElementById("c5").checked == false) {
                this.die5.roll();
            }

            if (document.getElementById("c6").checked == false) {
                this.die6.roll();
            }
            this.rollCounter++;
        } else {
            this.clearDice();
        }
    }

    drawDice() {

        if (this.rollCounter == 0) {
            document.getElementById("terning1").value = "";
            document.getElementById("terning2").value = "";
            document.getElementById("terning3").value = "";
            document.getElementById("terning4").value = "";
            document.getElementById("terning5").value = "";
            document.getElementById("terning6").value = "";

            document.getElementById("rollcount").value = this.rollCounter;
        } else {
            document.getElementById("terning1").value = this.die1.value;
            document.getElementById("terning2").value = this.die2.value;
            document.getElementById("terning3").value = this.die3.value;
            document.getElementById("terning4").value = this.die4.value;
            document.getElementById("terning5").value = this.die5.value;
            document.getElementById("terning6").value = this.die6.value;

            document.getElementById("rollcount").value = this.rollCounter;
        }
        // collumn1[0] de andre skal være 1,2,3,4,5 da det er pladsen i arrayet det viser, gælder alle celler (C1R16)
        document.getElementById("btn_C1R1").value = this.collumn1[0];
        document.getElementById("btn_C1R2").value = this.collumn1[1];
        document.getElementById("btn_C1R3").value = this.collumn1[2];
        document.getElementById("btn_C1R4").value = this.collumn1[3];
        document.getElementById("btn_C1R5").value = this.collumn1[4];
        document.getElementById("btn_C1R6").value = this.collumn1[5];
        document.getElementById("btn_C1R7").value = this.collumn1[6];
        document.getElementById("btn_C1R8").value = this.collumn1[7];
        document.getElementById("btn_C1R9").value = this.collumn1[8];
        document.getElementById("btn_C1R10").value = this.collumn1[9];
        document.getElementById("btn_C1R11").value = this.collumn1[10];
        document.getElementById("btn_C1R12").value = this.collumn1[11];
        document.getElementById("btn_C1R13").value = this.collumn1[12];
        document.getElementById("btn_C1R14").value = this.collumn1[13];
        document.getElementById("btn_C1R15").value = this.collumn1[14];
        document.getElementById("btn_C1R16").value = this.collumn1[15];
        document.getElementById("btn_C1R17").value = this.collumn1[16];
        document.getElementById("btn_C1R18").value = this.collumn1[17];
        document.getElementById("btn_C1R19").value = this.collumn1[18];
        document.getElementById("btn_C1R20").value = this.collumn1[19];

    }

}

// husk array

// spilobjekt. indeholder data om spillet. spillets tilstand (hvordan spillet ser i et givent tidspunkt)
var y = new Yatzy();

var btn_roll = document.getElementById("Roll");
btn_roll.onclick = function (event) {
    y.rollDice();
    y.drawDice();

}

// dette er det der sker i collumn1 row1 
document.getElementById("btn_C1R1").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        if (dice[i] == 1)
            sum += 1;
    }
    y.collumn1[0] = sum;
    y.drawDice();
    /*if (y.die1.value == 1) {
        y.collumn1[0] += 1;
        y.drawDice();
    }
    if (y.die2.value == 1) {
        y.collumn1[0] += 1;
        y.drawDice();
    }
    if (y.die3.value == 1) {
        y.collumn1[0] += 1;
        y.drawDice();
    }
    if (y.die4.value == 1) {
        y.collumn1[0] += 1;
        y.drawDice();
    }
    if (y.die5.value == 1) {
        y.collumn1[0] += 1;
        y.drawDice();
    }
    if (y.die6.value == 1) {
        y.collumn1[0] += 1;
        y.drawDice();
    }*/
    // når man klikker på cellen kan man ikke gøre det igen, uanset om man klikker forkert, er den brugt
    event.target.onclick = null;
}
// dette er det der sker i collumn1 row2
document.getElementById("btn_C1R2").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        if (dice[i] == 2)
            sum += 2;
    }
    y.collumn1[1] = sum;
    y.drawDice();
    /*if (y.die1.value == 2) {
        y.collumn1[1] += 2;
        y.drawDice();
    }
    if (y.die2.value == 2) {
        y.collumn1[1] += 2;
        y.drawDice();
    }
    if (y.die3.value == 2) {
        y.collumn1[1] += 2;
        y.drawDice();
    }
    if (y.die4.value == 2) {
        y.collumn1[1] += 2;
        y.drawDice();
    }
    if (y.die5.value == 2) {
        y.collumn1[1] += 2;
        y.drawDice();
    }
    if (y.die6.value == 2) {
        y.collumn1[1] += 2;
        y.drawDice();
    }*/
    event.target.onclick = null;
}
// dette er det der sker i collumn1 row3
document.getElementById("btn_C1R3").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        if (dice[i] == 3)
            sum += 3;
    }
    y.collumn1[2] = sum;
    y.drawDice();
    /*if (y.die1.value == 3) {
        y.collumn1[2] += 3;
        y.drawDice();
    }
    if (y.die2.value == 3) {
        y.collumn1[2] += 3;
        y.drawDice();
    }
    if (y.die3.value == 3) {
        y.collumn1[2] += 3;
        y.drawDice();
    }
    if (y.die4.value == 3) {
        y.collumn1[2] += 3;
        y.drawDice();
    }
    if (y.die5.value == 3) {
        y.collumn1[2] += 3;
        y.drawDice();
    }
    if (y.die6.value == 3) {
        y.collumn1[2] += 3;
        y.drawDice();
    }*/
    event.target.onclick = null;
}
// dette er det der sker i collumn1 row4
document.getElementById("btn_C1R4").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value];
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        if (dice[i] == 4)
            sum += 4;
        y.collumn1[3] = sum;
        y.drawDice();
    }
    /*if (y.die1.value == 4) {
        y.collumn1[3] += 4;
        y.drawDice();
    }
    if (y.die2.value == 4) {
        y.collumn1[3] += 4;
        y.drawDice();
    }
    if (y.die3.value == 4) {
        y.collumn1[3] += 4;
        y.drawDice();
    }
    if (y.die4.value == 4) {
        y.collumn1[3] += 4;
        y.drawDice();
    }
    if (y.die5.value == 4) {
        y.collumn1[3] += 4;
        y.drawDice();
    }
    if (y.die6.value == 4) {
        y.collumn1[3] += 4;
        y.drawDice();
    }*/
    event.target.onclick = null;
}
// dette er det der sker i collumn1 row5
document.getElementById("btn_C1R5").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    sum = 0;
    for (var i = 0; i < dice.length; i++) {
        if (dice[i] == 5)
            sum += 5
    }
    y.collumn1[4] = sum;
    y.drawDice();

    /*if (y.die1.value == 5) {
        y.collumn1[4] += 5;
        y.drawDice();
    }
    if (y.die2.value == 5) {
        y.collumn1[4] += 5;
        y.drawDice();
    }
    if (y.die3.value == 5) {
        y.collumn1[4] += 5;
        y.drawDice();
    }
    if (y.die4.value == 5) {
        y.collumn1[4] += 5;
        y.drawDice();
    }
    if (y.die5.value == 5) {
        y.collumn1[4] += 5;
        y.drawDice();
    }
    if (y.die6.value == 5) {
        y.collumn1[4] += 5;
        y.drawDice();
    }
    */
    event.target.onclick = null;
}
// dette er det der sker i collumn1 row6
document.getElementById("btn_C1R6").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value];
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        if (dice[i] == 6)
            sum += 6;
    }
    y.collumn1[5] = sum;
    y.drawDice();
    /*
    if (y.die1.value == 6) {
        y.collumn1[5] += 6;
        y.drawDice();
    }
    if (y.die2.value == 6) {
        y.collumn1[5] += 6;
        y.drawDice();
    }
    if (y.die3.value == 6) {
        y.collumn1[5] += 6;
        y.drawDice();
    }
    if (y.die4.value == 6) {
        y.collumn1[5] += 6;
        y.drawDice();
    }
    if (y.die5.value == 6) {
        y.collumn1[5] += 6;
        y.drawDice();
    }
    if (y.die6.value == 6) {
        y.collumn1[5] += 6;
        y.drawDice();
    }*/
    event.target.onclick = null;
}
//husk array
// når man klikker skal den regne ud hvad summen er for 1-6, er det over 84 for 100 bonus i feltet nedenunder.
//Bonus fik man 84 eller derover i sum for 100 point i bonus
document.getElementById("btn_C1R7").onclick = function (event) {
    var C1R1 = y.collumn1[0];
    var C1R2 = y.collumn1[1];
    var C1R3 = y.collumn1[2];
    var C1R4 = y.collumn1[3];
    var C1R5 = y.collumn1[4];
    var C1R6 = y.collumn1[5];
    var sum = C1R1 + C1R2 + C1R3 + C1R4 + C1R5 + C1R6;

    y.collumn1[6] = sum;
    y.drawDice();

    if (sum >= 84) {
        y.collumn1[7] = 100;
        y.drawDice();
    }

    event.target.onclick = null;

}

// et par
// kigge igennen dice array for at se om der er 1 par/2 ens, er der flere par, skal den vælge den højeste.
document.getElementById("btn_C1R9").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value];
    var count;
    var sum = 0;
    for (var dieValue = 6; dieValue >= 1; dieValue--) {
        count = 0;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i] == dieValue) {
                count++;
            }
        }
        if (count >= 1) {
            sum = dieValue * 2;
            break;
        }
    }
    y.collumn1[8] = sum;
    y.drawDice();

    event.target.onclick = null;
}

/*
var antal6ere = 0;
var antal5ere = 0;
var antal4ere = 0;
var antal3ere = 0;
var antal2ere = 0;
var antal1ere = 0;
// hvis værdien af første terning er 6 lægger man 6 til osv...
if (y.die1.value == 6) {
    antal6ere++;
} else if (y.die1.value == 5) {
    antal5ere++;
} else if (y.die1.value == 4) {
    antal4ere++;
} else if (y.die1.value == 3) {
    antal3ere++;
} else if (y.die1.value == 2) {
    antal2ere++;
} else if (y.die1.value == 1) {
    antal1ere++
}
if (y.die2.value == 6) {
    antal6ere++;
} else if (y.die2.value == 5) {
    antal5ere++;
} else if (y.die2.value == 4) {
    antal4ere++;
} else if (y.die2.value == 3) {
    antal3ere++;
} else if (y.die2.value == 2) {
    antal2ere++;
} else if (y.die2.value == 1) {
    antal1ere++;
}
if (y.die3.value == 6) {
    antal6ere++;
} else if (y.die3.value == 5) {
    antal5ere++;
} else if (y.die3.value == 4) {
    antal4ere++;
} else if (y.die3.value == 3) {
    antal3ere++;
} else if (y.die3.value == 2) {
    antal2ere++;
} else if (y.die3.value == 1) {
    antal1ere++;
}
if (y.die4.value == 6) {
    antal6ere++;
} else if (y.die4.value == 5) {
    antal5ere++;
} else if (y.die4.value == 4) {
    antal4ere++;
} else if (y.die4.value == 3) {
    antal3ere++;
} else if (y.die4.value == 2) {
    antal2ere++;
} else if (y.die4.value == 1) {
    antal1ere++;
}
if (y.die5.value == 6) {
    antal6ere++;
} else if (y.die5.value == 5) {
    antal5ere++;
} else if (y.die5.value == 4) {
    antal4ere++;
} else if (y.die5.value == 3) {
    antal3ere++;
} else if (y.die5.value == 2) {
    antal2ere++;
} else if (y.die5.value == 1) {
    antal1ere++;
}
if (y.die6.value == 6) {
    antal6ere++;
} else if (y.die6.value == 5) {
    antal5ere++;
} else if (y.die6.value == 4) {
    antal4ere++;
} else if (y.die6.value == 3) {
    antal3ere++;
} else if (y.die6.value == 2) {
    antal2ere++;
} else if (y.die6.value == 1) {
    antal1ere++;
}
var sum = 0;
if (antal6ere >= 2) {
    sum = 12;
} else if (antal5ere >= 2) {
    sum = 10;
} else if (antal4ere >= 2) {
    sum = 8;
} else if (antal3ere >= 2) {
    sum = 6;
} else if (antal2ere >= 2) {
    sum = 4;
} else if (antal1ere >= 2) {
    sum = 2;
}

y.collumn1[8] = sum;
y.drawDice();

event.target.onclick = null;
*/


// to par
// kigge dice igennem array, ser fter om der er 2 par, hvis der er 3 skal den vælge de 2 højeste 
document.getElementById("btn_C1R10").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value];
    var count;
    var pairCount = 0;
    var sum = 0;
    for (var dieValue = 6; dieValue >= 1; dieValue--) { // dieValue står for terningens value, starter med det højeste og går ned af.
        count = 0;
        for (var i = 0; i < dice.length; i++) { // i betyder index i terning arrayet
            if (dice[i] == dieValue) {
                count++
            }
        }
        if (count >= 2) { // to ens aller flere
            sum += dieValue * 2; // værdien af dieValue bliver ganget med 2, hvis der er fundet et par
            pairCount++;
            if (pairCount >= 2) {
                break; // hvis der er fundet 2 par stopper den loopet.
            }
        }
    }
    // console.log(pairCount); hjælpemiddel til ar se hvad variabler indeholder

    if (pairCount >= 2) {
        y.collumn1[9] = sum; // sum er værdien af de 2 par 
    } else {
        y.collumn1[9] = 0;
    }
    y.drawDice();

    event.target.onclick = null;
}
// tre par
// kigge efter i array om der er 3 par
document.getElementById("btn_C1R11").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var count;
    var pairCount = 0;
    var sum = 0;
    for (var dieValue = 6; dieValue >= 1; dieValue--) { // starter med at kigge efter 6ere og så går ned ad fra det
        count = 0;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i] == dieValue) {
                count++
            }
        }
        if (count >= 2) {
            sum += dieValue * 2; // 1 par bliver genget med 2, dette sker ved hvert par
            pairCount++;
        }
    }
    if (pairCount >= 3) {
        y.collumn1[10] = sum; // sum er værdien af de 3 par
    } else {
        y.collumn1[10] = 0;
    }
    y.drawDice();
    event.target.onclick = null;
}

// fire ens
// kigge dice igennem array om der er fire af samme slags
document.getElementById("btn_C1R12").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var count;
    var fourOfAKind = 0;
    var sum = 0;
    for (var dieValue = 6; dieValue >= 1; dieValue--) {
        count = 0;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i] == dieValue) {
                count++
            }
        }
        if (count >= 4) {
            sum += dieValue * 4;
            fourOfAKind++;
        }
    }
    y.collumn1[11] = sum;
    y.drawDice();
    event.target.onclick = null;

    /* var antal6ere = 0;
     var antal5ere = 0;
     var antal4ere = 0;
     var antal3ere = 0;
     var antal2ere = 0;
     var antal1ere = 0;
     // hvis værdien af første terning er 6 lægger man 6 til osv...
     if (y.die1.value == 6) {
         antal6ere++;
     } else if (y.die1.value == 5) {
         antal5ere++;
     } else if (y.die1.value == 4) {
         antal4ere++;
     } else if (y.die1.value == 3) {
         antal3ere++;
     } else if (y.die1.value == 2) {
         antal2ere++;
     } else if (y.die1.value == 1) {
         antal1ere++
     }
     if (y.die2.value == 6) {
         antal6ere++;
     } else if (y.die2.value == 5) {
         antal5ere++;
     } else if (y.die2.value == 4) {
         antal4ere++;
     } else if (y.die2.value == 3) {
         antal3ere++;
     } else if (y.die2.value == 2) {
         antal2ere++;
     } else if (y.die2.value == 1) {
         antal1ere++;
     }
     if (y.die3.value == 6) {
         antal6ere++;
     } else if (y.die3.value == 5) {
         antal5ere++;
     } else if (y.die3.value == 4) {
         antal4ere++;
     } else if (y.die3.value == 3) {
         antal3ere++;
     } else if (y.die3.value == 2) {
         antal2ere++;
     } else if (y.die3.value == 1) {
         antal1ere++;
     }
     if (y.die4.value == 6) {
         antal6ere++;
     } else if (y.die4.value == 5) {
         antal5ere++;
     } else if (y.die4.value == 4) {
         antal4ere++;
     } else if (y.die4.value == 3) {
         antal3ere++;
     } else if (y.die4.value == 2) {
         antal2ere++;
     } else if (y.die4.value == 1) {
         antal1ere++;
     }
     if (y.die5.value == 6) {
         antal6ere++;
     } else if (y.die5.value == 5) {
         antal5ere++;
     } else if (y.die5.value == 4) {
         antal4ere++;
     } else if (y.die5.value == 3) {
         antal3ere++;
     } else if (y.die5.value == 2) {
         antal2ere++;
     } else if (y.die5.value == 1) {
         antal1ere++;
     }
     if (y.die6.value == 6) {
         antal6ere++;
     } else if (y.die6.value == 5) {
         antal5ere++;
     } else if (y.die6.value == 4) {
         antal4ere++;
     } else if (y.die6.value == 3) {
         antal3ere++;
     } else if (y.die6.value == 2) {
         antal2ere++;
     } else if (y.die6.value == 1) {
         antal1ere++;
     }
     var sum = 0;
     if (antal6ere >= 4) {
         sum = 24;
     } else if (antal5ere >= 4) {
         sum = 20;
     } else if (antal4ere >= 4) {
         sum = 16;
     } else if (antal3ere >= 4) {
         sum = 12;
     } else if (antal2ere >= 4) {
         sum = 8;
     } else if (antal1ere >= 4) {
         sum = 4;
     }

     y.collumn1[11] = sum;
     y.drawDice();

     event.target.onclick = null;
     */
}

// 2 x 3 ens
// kigge arrayet efter om der er 2 x 3 ens
document.getElementById("btn_C1R13").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var count;
    var threeOfAKind = 0;
    var sum = 0;
    for (var dieValue = 6; dieValue >= 1; dieValue--) {
        count = 0;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i] == dieValue) {
                count++
            }
        }
        if (count >= 3) {
            sum += dieValue * 3;
            threeOfAKind++;
        }
    }
    if (threeOfAKind >= 2) {
        y.collumn1[12] = sum; // sum er værdien af de 2 * 3 ens
    } else {
        y.collumn1[12] = 0;
    }
    y.drawDice();
    event.target.onclick = null;
}

// lille straight
// kigge efter om der er 1,2,3,4,5 i arrayet
document.getElementById("btn_C1R14").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var count = 0;
    var small = true;
    for (var dieValue = 1; dieValue <= 5; dieValue++) {
        count = 0;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i] == dieValue) {
                count++
            }
        }
        if (count == 0) {
            small = false;
            break;
        }
    }
    if (small) {
        y.collumn1[13] = 15;
    } else {
        y.collumn1[13] = 0;
    }
    y.drawDice();
    event.target.onclick = null;
}
// store straight
// kigge after om der er 2,3,4,5,6 i arrayet
document.getElementById("btn_C1R15").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var count = 0;
    var large = true;
    for (var dieValue = 2; dieValue <= 6; dieValue++) {
        count = 0;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i] == dieValue) {
                count++
            }
        }
        if (count == 0) {
            large = false;
            break;
        }
    }
    if (large) {
        y.collumn1[14] = 20;
    } else {
        y.collumn1[14] = 0;
    }
    y.drawDice();
    event.target.onclick = null;
}

// Royal
// kigger om der er 1,2,3,4,5,6 i arrayet
document.getElementById("btn_C1R16").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var count = 0;
    var royal = true;
    for (var dieValue = 1; dieValue <= 6; dieValue++) {
        count = 0;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i] == dieValue) {
                count++
            }
        }
        if (count == 0) {
            royal = false;
            break;
        }
    }
    if (royal) {
        y.collumn1[15] = 30;
    } else {
        y.collumn1[15] = 0;
    }
    y.drawDice();
    event.target.onclick = null;
}

// hus 3 og 2 ens
// kigger efter om der er 3 af en slags og 2 af en anden slalg, 
document.getElementById("btn_C1R17").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var count;
    var twoOfAKind = 0;
    var threeOfAKind = 0;
    var sum = 0;
    var sum2 = 0;
    for (var dieValue = 6; dieValue >= 1; dieValue--) {
        count = 0;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i] == dieValue) {
                count++
            }
        }
        if (count >= 3 && threeOfAKind == 0) {
            sum += dieValue * 3;
            threeOfAKind++;
        } else if (count >= 2) {
            sum2 += dieValue * 2;
            twoOfAKind++;
        }
    }
    if (threeOfAKind >= 1 && twoOfAKind >= 1) {
        y.collumn1[16] = sum + sum2;
    } else {
        y.collumn1[16] = 0;
    }
    y.drawDice();
    event.target.onclick = null;
}


//chance
// lægger terningerne 1-6 sammen.
document.getElementById("btn_C1R18").onclick = function (event) {
    var tet = y.die1.value;
    var tto = y.die2.value;
    var ttre = y.die3.value;
    var tfire = y.die4.value;
    var tfem = y.die5.value;
    var tseks = y.die6.value;
    var sum = tet + tto + ttre + tfire + tfem + tseks;

    y.collumn1[17] = sum;
    y.drawDice();

    event.target.onclick = null;
}

// Yatzy
// tjekker arrayet om der er 6 af en slags og og plusser dem sammen og lægger 100 til
document.getElementById("btn_C1R19").onclick = function (event) {
    var dice = [y.die1.value, y.die2.value, y.die3.value, y.die4.value, y.die5.value, y.die6.value]
    var count;
    var yatzy = 0;
    var sum = 0;
    for (var dieValue = 6; dieValue >= 1; dieValue--) {
        count = 0;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i] == dieValue) {
                count++
            }
        }
        if (count == 6) {
            sum += dieValue * 6;
            yatzy++;
        }
    }
    y.collumn1[18] = sum + 100;
    y.drawDice();
    event.target.onclick = null;
}
/*
    var antal6ere = 0;
    var antal5ere = 0;
    var antal4ere = 0;
    var antal3ere = 0;
    var antal2ere = 0;
    var antal1ere = 0;
    // hvis værdien af første terning er 6 lægger man 6 til osv...
    if (y.die1.value == 6) {
        antal6ere++;
    } else if (y.die1.value == 5) {
        antal5ere++;
    } else if (y.die1.value == 4) {
        antal4ere++;
    } else if (y.die1.value == 3) {
        antal3ere++;
    } else if (y.die1.value == 2) {
        antal2ere++;
    } else if (y.die1.value == 1) {
        antal1ere++
    }
    if (y.die2.value == 6) {
        antal6ere++;
    } else if (y.die2.value == 5) {
        antal5ere++;
    } else if (y.die2.value == 4) {
        antal4ere++;
    } else if (y.die2.value == 3) {
        antal3ere++;
    } else if (y.die2.value == 2) {
        antal2ere++;
    } else if (y.die2.value == 1) {
        antal1ere++;
    }
    if (y.die3.value == 6) {
        antal6ere++;
    } else if (y.die3.value == 5) {
        antal5ere++;
    } else if (y.die3.value == 4) {
        antal4ere++;
    } else if (y.die3.value == 3) {
        antal3ere++;
    } else if (y.die3.value == 2) {
        antal2ere++;
    } else if (y.die3.value == 1) {
        antal1ere++;
    }
    if (y.die4.value == 6) {
        antal6ere++;
    } else if (y.die4.value == 5) {
        antal5ere++;
    } else if (y.die4.value == 4) {
        antal4ere++;
    } else if (y.die4.value == 3) {
        antal3ere++;
    } else if (y.die4.value == 2) {
        antal2ere++;
    } else if (y.die4.value == 1) {
        antal1ere++;
    }
    if (y.die5.value == 6) {
        antal6ere++;
    } else if (y.die5.value == 5) {
        antal5ere++;
    } else if (y.die5.value == 4) {
        antal4ere++;
    } else if (y.die5.value == 3) {
        antal3ere++;
    } else if (y.die5.value == 2) {
        antal2ere++;
    } else if (y.die5.value == 1) {
        antal1ere++;
    }
    if (y.die6.value == 6) {
        antal6ere++;
    } else if (y.die6.value == 5) {
        antal5ere++;
    } else if (y.die6.value == 4) {
        antal4ere++;
    } else if (y.die6.value == 3) {
        antal3ere++;
    } else if (y.die6.value == 2) {
        antal2ere++;
    } else if (y.die6.value == 1) {
        antal1ere++;
    }
    // her kigger vi efter om tallet er slået mere end 5 gange
    var sum = 0;
    if (antal6ere > 5) {
        sum = 36;
    } else if (antal5ere > 5) {
        sum = 30;
    } else if (antal4ere > 5) {
        sum = 24;
    } else if (antal3ere > 5) {
        sum = 18;
    } else if (antal2ere > 5) {
        sum = 12;
    } else if (antal1ere > 5) {
        sum = 6;
    }

    y.collumn1[18] = sum + 100;
    y.drawDice();

    event.target.onclick = null;
}
*/
//Sum
// lægger alt fra sum og nedefter sammen 
document.getElementById("btn_C1R20").onclick = function (event) {

    var C1R7 = y.collumn1[6];
    var C1R8 = y.collumn1[7];
    var C1R9 = y.collumn1[8];
    var C1R10 = y.collumn1[9];
    var C1R11 = y.collumn1[10];
    var C1R12 = y.collumn1[11];
    var C1R13 = y.collumn1[12];
    var C1R14 = y.collumn1[13];
    var C1R15 = y.collumn1[14];
    var C1R16 = y.collumn1[15];
    var C1R17 = y.collumn1[16];
    var C1R18 = y.collumn1[17];
    var C1R19 = y.collumn1[18];

    var sum = C1R7 + C1R8 + C1R9 + C1R10 + C1R11 + C1R12 + C1R13 + C1R14 + C1R15 + C1R16 + C1R17 + C1R18 + C1R19;

    y.collumn1[19] = sum;
    y.drawDice();

    event.target.onclick = null;
}