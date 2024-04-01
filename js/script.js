

// Following LOGIC is for storing 
let symbols = ["+", "-", "*", "/", "."]

function storeData(v) {
    let screen = document.getElementById('screen');
    let oldValue = screen.value;



    let t = oldValue.length
    let lastChr = oldValue[t - 1]




    


    // for do not repeating symbols

    if (symbols.includes(v)) {
        if (symbols.includes(lastChr)) {
            let removeLast = oldValue.slice(0, -1);
            screen.value = removeLast + v;

        }

        else {
            screen.value = oldValue + v;

        }
    }
    else {
        screen.value = oldValue + v;
    }





}





// Folowinf LOGIC is for calculating

function calData() {
    let screen = document.getElementById('screen');
    let oldValue = eval(screen.value);
    screen.value = oldValue



}



// followingis for erasing data


function clrData(){
    document.getElementById('screen').value="";
}

