var viewV = 0;
var viewAn = 0;
var dia = 1;
var conta = 1;

function viewVideo(){
    viewV++;
    if (viewV <= 1){
        document.getElementById("video").innerHTML="Carro não visto = " + viewV;
    } else{
        document.getElementById("video").innerHTML="Carros não vistos = " + viewV;  
    }
}

function viewAnuncio(){
    viewAn++;
    if(viewAn <= 1){
        document.getElementById("add").innerHTML="Carro visto = " + viewAn;
    } else {
        document.getElementById("add").innerHTML="Carros vistos = " + viewAn;
    }
}

function addDia(){
    dia++;
    document.getElementById("title").innerHTML="Dia " + dia;
}

function removeVideo(){
    if(viewV > 0){
        viewV--;
        if(viewV <= 1 ){
            document.getElementById("video").innerHTML="Carro não visto = " + viewV;
        } else if(viewV > 1){
            document.getElementById("video").innerHTML="Carros não vistos = " + viewV;
        }
    }
}

function removeAnuncio(){
    if(viewAn > 0){
        viewAn--;
        if(viewAn <= 1){
            document.getElementById("add").innerHTML="Carro visto = " + viewAn;
        } else if(viewAn > 1) {
            document.getElementById("add").innerHTML="Carros vistos = " + viewAn;
        }
    }
}


function removeDia(){
    if(dia > 1){
        dia--;
        document.getElementById("title").innerHTML="Dia " + dia;
    }
}

function trocarConta(){
    if(conta == 1){
        conta++;
    } else if (conta == 2){
        conta++;
    } else if (conta == 3){
        conta = 1;
    }

    switch(conta){
        case 1:
            document.getElementById("conta").innerHTML="Conta 1 - Seguir e Curtir"
            document.getElementById("i").src="files/img/vicenzo.jpg"
            document.getElementById("i").style.cssText=
            "max-width: 300px;" +
            "border-radius: 1em;" +
            "border: solid 1px black;"
        break;
        case 2:
            document.getElementById("conta").innerHTML="Conta 2 - Base"
            document.getElementById("i").src="files/img/rafa.jpg"
        break;
        case 3:
            document.getElementById("conta").innerHTML="Conta 3 - Pesquisa Google"
            document.getElementById("i").src="files/img/gian.png"
            document.getElementById("i").style.cssText=
            "width: 200px;" +
            "border-radius: 1em;" +
            "border: 0;"
        break;
        default:
            document.getElementById("conta").innerHTML="da um F5"
            document.getElementById("i").src="files/img/f5.jpg"
        break;
    }
}
