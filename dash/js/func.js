// input de texto

const editable = document.querySelector("#editable"),
      placeholder = document.querySelector("#placeholder");

editable.addEventListener("click", ()=>{
    placeholder.classList.add('edit');
});

editable.addEventListener("blur", ()=>{
    if(editable.innerHTML == ""){
        placeholder.classList.remove('edit');
    }
        
});
