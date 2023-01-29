let timer

const openLayer = (element) => {
    //1.set initial style
    element.style = "transform: rotateY(0deg)"

    //remember timer id
    timer = setInterval( () => {
        // 2read and parse the style
        let angle = element.style.transform
        //  "rotateY(0deg)"
        angle = angle.replace("rotateY(", "")
        angle = angle.replace("deg)", "")
        angle = parseInt(angle)

        //3.decrement the angle
        angle -= 1
        // 4. update the element style
        element.style.transform = `rotateY(${angle}deg)`
        console.log(angle)
        
        if(angle == -80){
            console.log("STOP")
            clearInterval(timer)
        }
    } , 100) 
}