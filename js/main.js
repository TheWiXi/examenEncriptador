let form = document.querySelector('#form');
let form_ouput = document.querySelector('.form-output');
let form_ouput__menssage =  document.querySelector('.form-output_response');
let p = document.querySelector('.form-output_response p');
let copy_button = document.querySelector('#copy');

form.addEventListener("submit", function(e){
    let btn = e.submitter.dataset.accion
    let data = Object.fromEntries(new FormData(e.target));
    console.log(btn);
    if(btn = "encrypt") {
        form_ouput.classList.remove("active")
        form_ouput__menssage.classList.add("active")
        console.log(encrypt(data));
        p.innerHTML = encrypt(data);
    }
    else if(btn = "decrypt") {
        console.log("hola")
        form_ouput.classList.remove("active")
        form_ouput__menssage.classList.add("active")
        p.innerHTML = desencriptar(data);
    }
    e.preventDefault();
})

copy_button.addEventListener("click", function(e){
    let range = document.createRange();
    range.selectNode(p);
    let selection = window.getSelection();
    selection.removeAllRanges();  
    selection.addRange(range);
    document.execCommand('copy');  
    selection.removeAllRanges();  
    p.innerHTML = ""
    form_ouput__menssage.classList.remove("active")
    form_ouput.classList.add("active")
})

function encrypt(data){
    let word = data.chain.split(" ");
    let convertion = word.map((value, index) => {
        value = value.split('');
        return value.map((caracter)=>{
            if(caracter == "e") return "enter"
            else if(caracter == "i") return "imes"
            else if(caracter == "a") return "ai"
            else if(caracter == "o") return "ober"
            else if(caracter == "u") return "ufat"
            else return caracter
        }).join("")
    }).join(" ");
    return convertion;
}

function desencriptar(data){
    console.log("1",data)
    let word = data.chain.split(" ");
    console.log("2",word)
    let convertion = word.map((value, index) => {
        value = value.replace(/ai/gi, "a");
        value = value.replace(/enter/gi, "e");
        value = value.replace(/imes/gi, "i");
        value = value.replace(/ober/gi, "o");
        value = value.replace(/ufat/gi, "u");
        return value;
    }).join(" ");
    return convertion;
}
