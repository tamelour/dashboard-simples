const login = {
    "email": document.getElementById("inputEmail"),
    "senha": document.getElementById("inputPassword"),
    "btn": document.getElementById("btnEntrar")
}

const error = document.querySelector(".hideErro");
var mesengeError = document.getElementById("erro");


login.btn.addEventListener("click", ()=>{

    if(login.email.value == "" && login.senha.value == ""){
        error.classList.add("showErro");
        mesengeError.innerHTML = "Preencha os campos";
    }
    else if (login.email.value == ""){
        error.classList.add("showErro");
        mesengeError.innerHTML = "Preencha o campo de email";
    }
    else if (login.senha.value == ""){
        error.classList.add("showErro");
        mesengeError.innerHTML = "Preencha o campo de Senha";
    }

    if(login.email.value != "" && login.senha.value != ""){
        let errorValid = false;
        
        let validEmail = login.email.value.indexOf("@"),
        validEmail1 = login.email.value.substring(validEmail + 1, login.email.value.length);

        if(validEmail < 0 || validEmail1 == ""){
            error.classList.add("showErro");
            mesengeError.innerHTML = "email invalido"; 
            errorValid = true;
        }
        else if(errorValid === false){
            error.classList.remove("showErro");
            alert("entrou")
        }
    }
});


// esconder senha

const showPass = ()=>{
    let changePass = document.getElementById("inputPassword");
    let changeIconHide = document.querySelector(".dropShow");
    let changeIconShow = document.querySelector(".dropHide");
    
    if(changePass.type == "password"){
        changePass.type = "text";
        changeIconHide.style.opacity = 0;
        changeIconShow.style.visibility = "visible";
        changePass.focus();
    }else{
        changePass.type = "password";
        changeIconHide.style.opacity = 1;
        changeIconShow.style.visibility = "hidden";
        changePass.focus();
    }
}