let container = document.querySelector(".collapse-container")
let icon      = document.querySelector(".collapse-title span")
let content   = document.querySelector(".collapse-content")

let isCollapsed = true // boolean

function toggle(){

    isCollapsed =!isCollapsed

    // if(isCollapsed === true){
    //     isCollapsed = false
    // }else {
    //     isCollapsed = true
    // }


    if (isCollapsed){
        content.className = "collapse-content hidden"
        icon.innerHTML = `<img src="icons/plus.svg" />`
    }else{
        content.className = "collapse-content"
        icon.innerHTML= `<img src="icons/minus.svg" />`
    }


    console.log(isCollapsed)
}

