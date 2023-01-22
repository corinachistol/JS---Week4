let pac_x = 3
let pac_y = 10

let coin_x = 2
let coin_y = 2

let bomb_x = 8
let bomb_y = 6


let score = 0
let hp = 100

let coin_state = true
let bomb_state = true

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

    if(pac_x == coin_x && pac_y == coin_y){
        score += 10 
        coin_state = false
        
    }

    if(pac_x == bomb_x && pac_y == bomb_y){
        hp -=20
        bomb_state = false
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
            }else if(x == coin_x && y == coin_y){
                gameMap.innerHTML += `<div class="coin"></div>` 
                if(coin_state == false){
                    gameMap.innerHTML = `<div></div>`
                }
            }else if(x == bomb_x && y == bomb_y){
                gameMap.innerHTML += `<div class="bomb"></div>`   
                if(bomb_state == false){
                    gameMap.innerHTML = `<div></div>` 
                }
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
