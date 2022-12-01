// var getxtarea = document.getElementById('textarea');
var getdivarea = document.getElementById('divarea');
getdivarea.contentEditable = true;
getdivarea.spellCheck = false;

var getbtns = document.querySelectorAll('.btn');
getbtns.forEach((getbtn)=>{
    getbtn.addEventListener('click',()=>{
        // var getcommand = getbtn.getAttribute('data-command');
        var getcommand = getbtn.dataset['command'];

        if(getcommand === "cleartext"){
            getdivarea.innerHTML = "";
        }
        else if(getcommand === "createLink" || getcommand === "insertImage"){
            let geturl = prompt( "Enter you website link","https://");
            document.execCommand(getcommand,false,geturl)
        }else if(getcommand === "foreColor"){
            // console.log(getbtn.value)
            document.execCommand(getcommand,false,getbtn.value)
        }
        else if(getcommand === "paste"){
            navigator.clipboard.readText().then((clipText)=>{
                // console.log(clipText);
                getdivarea.innerHTML += clipText
            })
        }
        else{
            document.execCommand(getcommand,false,null)
        }
    })
})

// function boldfun(){
//     getxtarea.style.fontWeight = "bold";
// }

// function italicfun(){
//     getxtarea.style.fontStyle = "italic";
// }   

// function underlinefun(){
//     getxtarea.style.textDecoration = "underline";
// }

// function lalgfun(){
//     getxtarea.style.textAlign = "left";
// }

// function calgfun(){
//     getxtarea.style.textAlign = "center";
// }

// function ralgfun(){
//     getxtarea.style.textAlign = "right";
// }

function upcasefun(){
    getdivarea.style.textTransform = "uppercase";
}

function lwcase(){
    getdivarea.style.textTransform = "lowercase";
}

function capcasefun(){
    getdivarea.style.textTransform = "capitalize";
}

// function clearfun(){
//     getxtarea.style.fontWeight = "normal";
//     getxtarea.style.fontStyle = "normal";
//     getxtarea.style.textDecoration = "none";
//     getxtarea.style.textAlign = "left";
//     getxtarea.style.textTransform = "capitalize";
//     getxtarea.value = "";
// }

//NOTE: execCommand(aCommandName,aShowDefaultUI,aValueArgument);

// aShowDefaultUI
// true,
// false