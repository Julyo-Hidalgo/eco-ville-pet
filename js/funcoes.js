function alerta(){
    alert("Ops! Ainda não funciona!");
}

function ativa_menu(){
    document.getElementById("carrossel").style.display = "none";
    document.getElementById("drop_link").style.display = "block";
    document.getElementById("btn_drop_menu").tabindex = "1";
}

function fecha_menu(){
    document.getElementById("btn_fechar").tabindex = "1";
    document.getElementById("carrossel").style.display = "block";
    document.getElementById("drop_link").style.display = "none";
}