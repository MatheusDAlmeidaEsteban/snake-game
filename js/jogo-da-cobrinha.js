window.onload = function(){
    //capitando variaveis
    const canva = document.getElementById('jogo');
    const ctx = canva.getContext("2d");
    const pontucao = document.getElementById("pontu");

    document.addEventListener("keydown", keyPush);
    setInterval(game, 100);

    //declando variaveis
    const vel = 1;
    let vx = vy = 0;
    let px =10;
    let py = 15;
    let tamanho = 25;
    let quantidade = 20;
    let ax=ay= Math.floor(Math.random()*quantidade);

    var corpo = [];
    corpoIni = 5;

    //função game
    function game(){
        px += vx;
        py += vy;
        if (px <0) {
            px = quantidade-1;
        }
        if (px > quantidade-1) {
            px = 0;
        }
        if (py < 0) {
            py = quantidade-1;
        }
        if (py > quantidade-1) {
            py = 0;
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0,0, canva.width, canva.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax*tamanho, ay*tamanho, tamanho,tamanho);

        ctx.fillStyle = "gray";
        //acrescentar corpo e gerar corpo
        for (var i = 0; i < corpo.length; i++) {
            ctx.fillRect(corpo[i].x*tamanho, corpo[i].y*tamanho, tamanho,tamanho);
            if (corpo[i].x == px && corpo[i].y == py)
            {
                vx = vy=0;
                corpoIni =5;
               
            }
        }
        //resetar
        corpo.push({x:px,y:py })
        while (corpo.length > corpoIni) {
            corpo.shift();
            pontucao.innerHTML = (-50) +10*i;
            
        }
        //sortear objetivo
        if (ax==px && ay==py){
            corpoIni++;
            ax = Math.floor(Math.random()*quantidade);
            ay = Math.floor(Math.random()*quantidade);
        }

    }

    function keyPush(event){

        switch (event.keyCode) {
            case 37: // esquerda
                vx = -vel;
                vy = 0;
                break;
            case 38: // cima
                vx = 0;
                vy = -vel;
                break;
            case 39: // direita
                vx = vel;
                vy = 0;
                break;
            case 40: // baixo
                vx = 0;
                vy = vel;
                break;          
            default:
                
                break;
        }


    }

}