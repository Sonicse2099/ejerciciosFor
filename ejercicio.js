function listarNumeros(){
    for(let i=0; i<=3; i++){
        console.log(i);
    }
}

function ejercutar(numejercicio){
    if(numejercicio == 1){
        listarNumeros();
    }else if(numejercicio == 2){
        listarNumerosReversa();
    }else if(numejercicio == 3){
        listarPares();
    }else if(numejercicio == 4){
        listarImpares();
    }
}

function listarNumerosReversa(){
    for(let i=3 ; i>=0; i--){
        console.log(i);  
    }
}

function listarPares(){
    for(let i = 0; i<=10; i+=2){
        console.log(i);
    }
}

function listarImpares(){
    for(let i=1 ; i<=7; i+=2){
        console.log(i);
    }
}