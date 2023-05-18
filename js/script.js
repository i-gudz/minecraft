let fx = document.querySelector('#fx')
let fy = document.querySelector('#fy')
let fz = document.querySelector('#fz')



function game1() {
    if (parseInt(fx.value) == 3 && parseInt(fy.value) == 9 && parseInt(fz.value) == 2) {
        document.querySelector('body').innerHTML += `<div class="victory">
        <h1>Молодець! Все вірно!</h1>
        <audio src="audio/victory.mp3" autoplay></audio>
        <button onclick='showSLvl()'>Перейти на наступний рівень</button>
    </div>`
        
    } else {
        document.querySelector('body').innerHTML += `<div class="looser">
        <h1>Упс! Щось пішло не так!</h1>
        <audio src="audio/tnt.mp3" autoplay></audio>
        <button onclick='resetF()'>Спробувати ще раз</button>
    </div>`
    }
}

function resetF(){
document.querySelector('.looser').style.animation = "hide 0.5s" 
setTimeout(()=>{
    document.querySelector('.looser').remove()
}, 500);

}

function showSLvl(){
    document.querySelector('.f_lvl').style.display='none'
    document.querySelector('.victory').style.animation = "hide 0.5s" 
setTimeout(()=>{
    document.querySelector('.victory').remove()
}, 500);
    document.querySelector('.s_lvl').style.display='flex'
}

function game2() {
    let sx = document.querySelector('#sx')
    let sy = document.querySelector('#sy')
    let sz = document.querySelector('#sz')
    if (parseInt(sx.value) == 8 && parseInt(sy.value) == 6 && parseInt(sz.value) == 1) {
        document.querySelector('body').innerHTML += `<div class="victory">
        <h1>Молодець! Все вірно!</h1>
        <audio src="audio/victory.mp3" autoplay></audio>
        <button onclick='showTLvl()'>Перейти на наступний рівень</button>
    </div>`
        
    } else {
        document.querySelector('body').innerHTML += `<div class="looser">
        <h1>Упс! Щось пішло не так!</h1>
        <audio src="audio/tnt.mp3" autoplay></audio>
        <button onclick='resetS()'>Спробувати ще раз</button>
    </div>`
    }
}

function resetS(){
    document.querySelector('.looser').style.animation = "hide 0.5s" 
    setTimeout(()=>{
        document.querySelector('.looser').remove()
    }, 500);
}

function showTLvl(){
    document.querySelector('.s_lvl').style.display='none'
    document.querySelector('.victory').style.animation = "hide 0.5s" 
setTimeout(()=>{
    document.querySelector('.victory').remove()
}, 500);
    document.querySelector('.t_lvl').style.display='flex'
}

function game3() {
    let tx = document.querySelector('#tx')
    let ty = document.querySelector('#ty')
    let tz = document.querySelector('#tz')
    if (parseInt(tx.value) == 4 && parseInt(ty.value) == 2 && parseInt(tz.value) == 3) {
        document.querySelector('body').innerHTML += `<div class="victory">
        <h1>Вибухівка знешкоджена</h1>
        <audio src="audio/victory.mp3" autoplay></audio>
        <button onclick='showSunduk()()'>Відкрити сундук</button>
    </div>`
        
    } else {
        document.querySelector('body').innerHTML += `<div class="looser">
        <h1>Упс! Щось пішло не так!</h1>
        <audio src="audio/tnt.mp3" autoplay></audio>
        <button onclick='resetT()'>Спробувати ще раз</button>
    </div>`
    }
}

function resetT(){
    document.querySelector('.looser').style.animation = "hide 0.5s" 
    setTimeout(()=>{
        document.querySelector('.looser').remove()
    }, 500);
}


function openSunduk() {
    let x = document.querySelector('#x')
    let y = document.querySelector('#y')
    let z = document.querySelector('#z')
    if (parseInt(x.value) == 5 && parseInt(y.value) == 6 && parseInt(z.value) == 4) {
        document.querySelector('body').innerHTML += `<div class="victory">
        <h1>Ура, ти виграв!!!</h1>
        <audio src="audio/victory.mp3" autoplay></audio>
    </div>`
    document.querySelector('.victory').style.background = `url('../image/farmear-diamante-minecraft.jpeg')`
        
    } else {
        document.querySelector('body').innerHTML += `<div class="looser">
        <h1>Упс! Щось пішло не так!</h1>
        <audio src="audio/tnt.mp3" autoplay></audio>
        <button onclick='resetSunduk()'>Спробувати ще раз</button>
    </div>`
    }
}

function resetSunduk(){
    document.querySelector('.looser').style.animation = "hide 0.5s" 
    setTimeout(()=>{
        document.querySelector('.looser').remove()
    }, 500);
}

function showSunduk(){
    document.querySelector('.t_lvl').style.display='none'
    document.querySelector('.victory').style.animation = "hide 0.5s" 
setTimeout(()=>{
    document.querySelector('.victory').remove()
}, 500);
    document.querySelector('.sunduk').style.display='flex'
}

