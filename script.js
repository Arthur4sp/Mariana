let textoApaixonados = document.querySelector(".amor")
let imgApaixonados = document.querySelector(".apaixonados")
let botaoApaixonados = document.querySelector(".quantidade")

let quantidade = 1;

let tempoJuntos = document.querySelector("#diasJuntos")
var namoro = new Date("Apr 16, 2026 12:24:00").getTime()

let nomeMusica = document.querySelector(".nomeMusica")
let tras = document.querySelector(".tras")
let tocar = document.querySelector(".tocar")
let frente = document.querySelector(".frente")

let musica = 1
var audio = document.querySelector('#musica')

const contador = () =>{
    var agora = new Date().getTime()

    var days = Math.floor((agora - namoro) / (1000 * 60 * 60 * 24));
    var hours = Math.floor(((agora - namoro) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor(((agora - namoro) % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor(((agora - namoro) % (1000 * 60)) / 1000);
    setTimeout(() =>{
        tempoJuntos.textContent =days + " Dias " + hours + " Horas " + minutes + " Minutos e " + seconds + " Segundos!!"
        contador();
    }, 1000)
}



window.onload = () => {
    textoApaixonados.textContent="Quando a Lua..."
    imgApaixonados.src="imgs/namoradaLinda.webp"

    audio.src="music/EduardoEMonica.mp3"
    nomeMusica.textContent="Eduardo e Mônica"
    contador();
}


botaoApaixonados.addEventListener ('click', () => {
    if(quantidade == 8){
        quantidade = 1
    } else{
        quantidade++
    }

    if(quantidade == 1){
        textoApaixonados.textContent="Quando a Lua..."
        imgApaixonados.src="imgs/namoradaLinda.webp"
        botaoApaixonados.textContent=">"
        botaoApaixonados.style.fontSize="20px"
    }else if(quantidade == 2){
        textoApaixonados.textContent="Se encontra com o Sol..."
        imgApaixonados.src="imgs/linguarudo.webp"
    }else if(quantidade == 3){
        textoApaixonados.textContent="Deveria acontecer um eclipse..."
        imgApaixonados.src="imgs/eclipse.webp"
    }else if(quantidade == 4){
        textoApaixonados.textContent="Porém algo muito mais bonito se formou."
        imgApaixonados.src="imgs/parque.webp"
    }else if(quantidade == 5){
        textoApaixonados.textContent="E mesmo que meio engraçado..."
        imgApaixonados.src="imgs/parqueCareta.webp"
    }else if(quantidade == 6){
        textoApaixonados.textContent="Os dois são inseparáveis."
        imgApaixonados.src="imgs/Lindinhos.webp"
    }else if(quantidade == 7){
        textoApaixonados.textContent="Agora o Sol, mesmo sem perceber."
        imgApaixonados.src="imgs/beforeLindarudos.webp"
    }else if(quantidade == 8){
        textoApaixonados.textContent="Não pode mais viver sem sua Lua <3"
        imgApaixonados.src="imgs/lindarudos.webp"
        botaoApaixonados.textContent="Reiniciar"
        botaoApaixonados.style.fontSize="15px"
    }
})

tocar.addEventListener ('click', () => {
    if(audio.paused) {
        audio.play()
        tocar.textContent="⏸"
    } else{
        audio.pause()
        tocar.textContent="⏯"
    }
})

tras.addEventListener ('click', () => {
    if(musica == 1){
        
    } else{
        musica--

        if(musica == 1){
            audio.src="music/EduardoEMonica.mp3"
            nomeMusica.textContent="Eduardo e Mônica"
        } else if(musica == 2){
            audio.src="music/SomethinStupid.mp3"
            nomeMusica.textContent="Somethin' Stupid"
        } else if(musica == 3){
            audio.src="music/Ask.mp3"
            nomeMusica.textContent="Ask"
        } else if(musica == 4){
            audio.src="music/GoodOld.mp3"
            nomeMusica.textContent="Good Old Fashioned Lover Boy"
        } else if(musica == 5){
            audio.src="music/LamoreDiceCiao.mp3"
            nomeMusica.textContent="L'amore Dice Ciao"
        } else if(musica == 6){
            audio.src="music/KissMe.mp3"
            nomeMusica.textContent="Kiss Me"
        } else if(musica == 7){
            audio.src="music/Linger.mp3"
            nomeMusica.textContent="Linger"
        } else if(musica == 8){
            audio.src="music/FlyMe.mp3"
            nomeMusica.textContent="Fly Me to the Moon"
        }

        tocar.textContent="⏯"
    }
})

frente.addEventListener ('click', () => {
    if(musica == 8){

    } else{
        musica++

        if(musica == 1){
            audio.src="music/EduardoEMonica.mp3"
            nomeMusica.textContent="Eduardo e Mônica"
        } else if(musica == 2){
            audio.src="music/SomethinStupid.mp3"
            nomeMusica.textContent="Somethin' Stupid"
        } else if(musica == 3){
            audio.src="music/Ask.mp3"
            nomeMusica.textContent="Ask"
        } else if(musica == 4){
            audio.src="music/GoodOld.mp3"
            nomeMusica.textContent="Good Old Fashioned Lover Boy"
        } else if(musica == 5){
            audio.src="music/LamoreDiceCiao.mp3"
            nomeMusica.textContent="L'amore Dice Ciao"
        } else if(musica == 6){
            audio.src="music/KissMe.mp3"
            nomeMusica.textContent="Kiss Me"
        } else if(musica == 7){
            audio.src="music/Linger.mp3"
            nomeMusica.textContent="Linger"
        } else if(musica == 8){
            audio.src="music/FlyMe.mp3"
            nomeMusica.textContent="Fly Me to the Moon"
        }

        tocar.textContent="⏯"
    }
})