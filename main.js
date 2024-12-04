
var Big_str = ""
const atmina = localStorage.getItem("dato")


window.onload = function() {
    console.log("āhhh")
    update()
  };


if (atmina != null){
    Big_str = atmina
}



// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}


function update(){
    el = document.getElementById("box")
    el.innerHTML = Big_str
    localStorage.setItem("dato", Big_str);

}

function a(){

    let s= new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    Big_str = Big_str + s + ";A\n"
    update()
}
function b(){
    let s= new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    Big_str = Big_str + s + ";B\n"
    update()
}
function c(){
    let s= new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    Big_str = Big_str + s + ";C\n"
    update()
}
function d(){
    let s= new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    Big_str = Big_str + s + ";D\n"
    update()
}
function e(){
    let s= new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    Big_str = Big_str + s + ";E\n"
    update()
}
function f(){
    let s= new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    Big_str = Big_str + s + ";F\n"
    update()
}


function printo(){
    download(Big_str, "super_dati.txt", "text/plain")

}



function kill(){

    if (confirm("Dzēst?")) {
        localStorage.setItem("dato", "");
        Big_str = "";
        update();
      } else {
        txt = "You pressed Cancel!";
      } 
    
}

