

function realizarTransacao(){
    let valor = document.querySelector("#value").value;
    let senha = document.querySelector("#password").value;
    let saldoEmConta = document.querySelector(".h3-valor");
    let botaoDepositar = document.querySelector("#depositar");
    let botaoSacar = document.querySelector("#sacar");
    let botaoInvestir = document.querySelector("#investir");
    let valorFormatado = Intl.NumberFormat(undefined, {style: "currency", currency: "BRL",}).format(valor);

    botaoDepositar.addEventListener('click', ()=>{
        if(valor != 0 && senha == 1){
            document.querySelector(".h3-valor").innerHTML = valorFormatado;
            document.querySelector("#value").value = "";
            document.querySelector("#password").value = "";
        }
});

    botaoSacar.addEventListener('click', ()=>{
        if(valor <= saldoEmConta && senha == 1){
            alert("sacou");
            document.querySelector("#value").value = "";

            document.querySelector("#password").value = "";
    }
})
    
    botaoInvestir.addEventListener('click', ()=>{
        if(valor <= saldoEmConta && senha == 1){
            alert("investiu");
            document.querySelector("#value").value = "";
            document.querySelector("#password").value = "";
    }
})
}


