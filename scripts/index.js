function logar(){
    var login = document.getElementById("user").value;

    var senha = document.getElementById("password").value;

    if(login == "usuario" && senha == "1234567"){
        window.location= "conta.html";
    }else{
        alert("usuario ou senha incorretos");
    }

}




