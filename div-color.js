function SendAlert(color) { 
    document.getElementById("alertBox").style.background = color.getAttribute('data-color');
    document.getElementById("alertBox").style.visibility ='visible';
    document.getElementById("alertText").style.visibility ='visible';
    document.Block.submit();

}

function Close() { 
    document.getElementById("alertBox").style.visibility ='hidden';
    document.getElementById("alertText").style.visibility ='hidden';
}

 