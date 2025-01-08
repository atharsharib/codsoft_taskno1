const input = document.getElementById('input');

function addToInput(inputValue){
    if(input.value=="Error") input.value=inputValue;
    else input.value+=inputValue;
}

function removeOneChar(){
    input.value=input.value.toString().slice(0,-1); 
}

function clearInput(){
    input.value="";
}

function calculate(){
    try{
        input.value=eval(input.value);
    }catch(error){
        input.value="Error";
    }
}
