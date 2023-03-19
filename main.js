function printinput() {
    myname=document.getElementById('myname').value;
    myage=document.getElementById('myage').value;
    mycountry=document.getElementById('mycountry').value;
    let information = document.write('Hello ' + myname + ' of ' + myage + ' years coming from ' + mycountry);
    var body = document.body

    document.body.style.borderColor = '#000000';
    document.body.style.color = '#00ff00';
    document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';
    body.style.fontWeight = 'bold';
    body.style.backgroundColor = '#000000';
    

}

function Hack() {
    let text = "Click the ok or cancel button";
    if (confirm(text) == true) {
        text = "You Pressed ok the computer won't lie";
        console.log("OK")
    } else {
        text = "You pressed Cancel the computer Doesen't lie";
        console.log("Cancel")
    }
    document.getElementById("weird").innerText = text;
}

function show_rating() {
    let text = "Click ok to like the website or \n click cancel to dislike the website";

    if (confirm(text) == true) {
        text = "Thank You im glad you enjoyed the website";
    
    } else {
        text = "Im sorry you dont like it";
    }

    document.getElementById('showrating').innerHTML = text;
}