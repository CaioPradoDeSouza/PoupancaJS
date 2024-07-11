function depositar(){
    
    let depositarInput = document.getElementById("valorDeposito").value;
    let depositoSenha = document.getElementById("senhaTransacaoDeposito").value;

    let todosValores = [];
    
    
        if(depositarInput != 0 && depositoSenha == 1234567){
            let valorDepositoFormatado = Intl.NumberFormat(undefined, {style: "currency", currency: "BRL",}).format(depositarInput);
            document.querySelector(".h3-valor").innerHTML = valorDepositoFormatado;
            let valorTotal = valorDepositoFormatado;
            document.querySelector("#valorDeposito").value = "";
            document.querySelector("#senhaTransacaoDeposito").value = "";

            console.log(valorTotal);
        }
        
}


