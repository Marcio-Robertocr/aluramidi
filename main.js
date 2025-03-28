
function tocaSom (idElementoAudio){                                  //o IdElementoAudio é o parâmetro que será passado para a função, ou seja, o elemento que será tocado                   
    document.querySelector(idElementoAudio).play();
}

/*document.querySelector('.tecla_pom').onclick = tocaSomPom;          
A primeira parte até os parênteses definem qual botão, o onclick é o formato que será executado e o final está chamando a função*/


const listaDeTeclas = document.querySelectorAll('.tecla');        //Definição de una constante que armazena uma lista de elementos com a classe tecla

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;          

    // O idAudio é uma string que será usada para selecionar o elemento de áudio que será tocado quando o botão for clicado
                                                                            
    
    tecla.onclick = function(){
        tocaSom (idAudio);
    }
  
} 