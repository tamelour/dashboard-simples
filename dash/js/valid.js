const cadastro = {
    "nome": document.getElementById("nameText"),
    "sobrenome": document.getElementById("lastName"),
    "email": document.getElementById("inputEmail"),
    "senha": document.getElementById("inputPassword"),
    "btn": document.getElementById("btnRegister"),
    "erro": document.getElementById("erro")
}
const mostrarErro = document.querySelector(".hideErro");
const scrollBar = document.querySelector(".scroll");
const arrow = document.querySelector(".arrow");
const registerContainer = document.querySelector(".register-container");
let changeIconHide = document.querySelector(".dropShow");

cadastro.btn.addEventListener("click", ()=>{
    
    if(cadastro.nome.value == "" || cadastro.sobrenome.value =="" || cadastro.email.value == "" || cadastro.senha.value == ""){
        mostrarErro.classList.add("showErro");
        cadastro.erro.innerHTML = "preencha os campos que estão vazios"; 
    }

    if(cadastro.nome.value != "" && cadastro.sobrenome.value !="" && cadastro.email.value != "" && cadastro.senha.value != ""){
        
        let validEmail = cadastro.email.value.indexOf("@"),
            validEmail1 = cadastro.email.value.substring(validEmail + 1, cadastro.email.value.length);
        let error = false;

        if(validEmail < 0 || validEmail1 == ""){
            mostrarErro.classList.add("showErro");
            cadastro.erro.innerHTML = "email invalido"; 
            error = true;
        }
        else if(error === false){ //inserir false para voltar a validação
            scrollBar.classList.add("activeScroll");
            mostrarErro.classList.remove("showErro");
            registerContainer.classList.add("visibleHide");
            changeIconHide.style.display = "none";


        }
    }

});


arrow.addEventListener("click", ()=>{
    scrollBar.classList.remove("activeScroll");
    registerContainer.classList.remove("visibleHide");
    changeIconHide.style.display = "block";
});

// finilizar cadastro 
function finish(){
    window.location.assign("../html/index.html");
}

// escopnder e mostrar senha
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