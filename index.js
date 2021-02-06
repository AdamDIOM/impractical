var conversions = {
    "lol" : "lots of love",
    "no" : "yes",
    "yes" : "no",
    "wtf" : "wow that's fun",
    "btw" : "but that's why",
    "brb" : "bring round biscuits",
    "bbl" : "big bad lover",
    "diky" : "did I kick you",

}

function replaceText(){
    var string = document.getElementById("textInput").value;
    var stringArray =  string.split(" ");
    console.log(stringArray);
    var output = document.getElementById("textOutput");
    output.innerHTML = "";
    //console.log(string)
    for (str in stringArray){
        var conv = false;
        for(s in conversions){
            //console.log(s)
            console.log(stringArray[str])
            if(stringArray[str].includes(s)){
                console.log(s);
                output.innerHTML+=stringArray[str].replace(s, conversions[s]) + ' ';
                conv = true;
            }
        }
        if(!conv){
            output.innerHTML+=(stringArray[str] + ' ');
        }
    }
    
}