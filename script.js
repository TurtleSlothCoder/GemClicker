//values

let gems = 0;
let gemsPerClick = 1;
let upgrade1Cost = 50;
let upgrade2Cost = 200;
let upgrade3Cost = 400;

// script

function addClick() {
    gems += gemsPerClick;
    document.getElementById("score").innerHTML = gems;
}

function upgrade1F() {
    if (gems >= upgrade1Cost) {
        gems -= upgrade1Cost;
        gemsPerClick += 1;
        upgrade1Cost *= 2;
        document.getElementById("upgrade1CostHtml").innerHTML = upgrade1Cost;
    }
}

function upgrade2F() {
    if (gems >= upgrade2Cost) {
        gems -= upgrade2Cost;
        gemsPerClick *= 2;
        upgrade2Cost *= 2;
        document.getElementById("upgrade2CostHtml").innerHTML = upgrade2Cost;
    }
}

function upgrade3F() {
    if (gems >= upgrade3Cost) {
        gems -= upgrade3Cost;
        upgrade3Cost *= 4;
        document.getElementById("upgrade3CostHtml").innerHTML = upgrade3Cost;
        var autoclick = setInterval(
        function () {
            addClick()
        }, 1000
        )
    }
}