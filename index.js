
let res = document.getElementById("result");
let errDisplay = document.getElementById("ErrorDisplay");
let btnBtn = document.getElementById("btnCalculate");

function mintoMax(){
    let inp1 = parseFloat(document.getElementById("valueInputOne").value);
    let inp2 = parseFloat(document.getElementById("valueInputTwo").value);

    if(inp2 > inp1){

        res.innerHTML = `${inp2} is greater than ${inp1}`;

    } else {

        res.innerHTML = `${inp1} is greater than ${inp2}`;

    }

}

btnBtn.addEventListener("click", mintoMax);