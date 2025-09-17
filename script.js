function saveCookie(event){
    event.preventDefault()
    let fontSize=document.getElementById("fontsize").value
    let fontColor = document.getElementById("fontcolor").value
    console.log(fontSize)
    console.log(fontColor)
    document.cookie = `fontsize=${fontSize};`
     document.cookie = `fontcolor=${fontColor};`
}

function getCookie(name){
    let cookies= document.cookie.split("; ")
    for( let c of cookies){
        let [key, value]=c.split("=");
        if(key === name){
            return value;
        }
    }
    return null;
}

window.onload = function(){
    let fontSize= getCookie("fontsize")
    let fontColor=getCookie("fontcolor")
    if (!isNaN(fontSize)) {
        fontSize = fontSize + "px";
      }
    if(fontSize){
        document.body.style.fontSize= fontSize;
    }
    if(fontColor){
        document.body.style.color= fontColor;
    }
}
