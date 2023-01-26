let pac_x = parseInt( 1 + Math.random() * 9)
let pac_y = parseInt( 1 + Math.random() * 9)

let coin_x = parseInt( 1 + Math.random() * 9)
let coin_y = parseInt( 1 + Math.random() * 9)

let coin2_x = parseInt( 1 + Math.random() * 9)
let coin2_y = parseInt( 1 + Math.random() * 9)

let coin3_x = parseInt( 1 + Math.random() * 9)
let coin3_y = parseInt( 1 + Math.random() * 9)

let bomb_x = parseInt( 1 + Math.random() * 9)
let bomb_y = parseInt( 1 + Math.random() * 9)

let bomb2_x = parseInt( 1 + Math.random() * 9)
let bomb2_y = parseInt( 1 + Math.random() * 9)


let score = 0
let hp = 100

let coin_state = true
let bomb_state = true

let coin2_state = true
let bomb2_state = true

let coin3_state = true


let start_row = 1
let end_row = 10

let start_col = 1
let end_col = 10

function action(){
    
    switch(event.key){
        case "ArrowDown":  pac_y++ ; break
        case "ArrowUp":    pac_y-- ; break
        case "ArrowRight": pac_x++ ; break
        case "ArrowLeft":  pac_x-- ; break
    }

  //aici ar trebui o functie pt ca "scorul" se repeta
    if(pac_x == coin_x && pac_y == coin_y && !(!coin_state) ){
        score += 10 
        coin_state = false 
    }

    if(pac_x == coin2_x && pac_y == coin2_y && !(!coin2_state)){
        score += 10  
        coin2_state = false 
    }

    if(pac_x == coin3_x && pac_y == coin3_y && !(!coin3_state)){
        score += 10 
        coin3_state = false  
    }
  // aici tot o functie pentru "hp"
    if(pac_x == bomb_x && pac_y == bomb_y && !(!bomb_state)){
        hp -=20
        bomb_state = false 
    }
    if(pac_x == bomb2_x && pac_y == bomb2_y && !(!bomb2_state)){
        hp -=20
        bomb2_state = false 
    }
    
    if (pac_x > end_row){
        pac_x = start_row
    } else if( pac_x < start_row){
        pac_x = end_row
    } else if (pac_y > end_col){
        pac_y = start_col
    }else if (pac_y < start_col){
        pac_y = end_col
    }

    renderMap()

}


function renderMap(){
    gameMap.innerHTML =``
    for(let y = 1; y <= 10; y++){
        for(let x = 1; x <= 10; x++){

            if(x == pac_x && y == pac_y){
                gameMap.innerHTML += `<div class="pac"></div>`  
            }else if(x == coin_x && y == coin_y && !coin_state){
                gameMap.innerHTML += `<div></div>`
            }else if(x == coin_x && y == coin_y){
                gameMap.innerHTML += `<div class="coin"></div>`
            }else if(x == coin2_x && y == coin2_y && !coin2_state){
                gameMap.innerHTML += `<div></div>`
            }else if(x == coin2_x && y == coin2_y){
                gameMap.innerHTML += `<div class="coin"></div>`
            }else if(x == bomb_x && y == bomb_y && !bomb_state){
            }else if(x == coin3_x && y == coin3_y && !coin3_state){
                gameMap.innerHTML += `<div></div>`
            }else if(x == coin3_x && y == coin3_y){
                gameMap.innerHTML += `<div class="coin"></div>`
            }else if(x == bomb_x && y == bomb_y && !bomb_state){
                gameMap.innerHTML += `<div></div>`   
            }else if(x == bomb_x && y == bomb_y){
                gameMap.innerHTML += `<div class="bomb"></div>`   
            }else if(x == bomb2_x && y == bomb2_y && !bomb2_state){
                gameMap.innerHTML += `<div></div>`   
            }else if(x == bomb2_x && y == bomb2_y){
                gameMap.innerHTML += `<div class="bomb"></div>`   
            }else{
                gameMap.innerHTML += `<div></div>` 
            }

        }
    }
    gameScore.innerHTML = `Score: ${score}`
    gameHp.innerHTML = `Health points: ${hp}`

   
}

renderMap()


//HW1: add limits (1,10) to pacman movement
//HW2: add bomb(-20), add hp(health points) 0..100, show in score
//HW3: coin_state, bomb_state -false/true  < movement
//     coin_state, bomb_state             > renderMAp
