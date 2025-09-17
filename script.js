function saveCookie(event){
    event.preventDefault()
    let fontSize=document.getElementById("fontsize").value
    let fontColor = document.getElementById("fontcolor").value
    console.log(fontSize)
    console.log(fontColor)
    document.cookie = `fontsize=${fontSize};`
     document.cookie = `fontcolor=${fontColor};`
}