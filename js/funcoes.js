function ativa_menu() {
    document.getElementById("drop_link").style.display = "block";
    document.getElementById("btn_drop_menu").tabindex = "1";
}

function fecha_menu() {
    document.getElementById("btn_fechar").tabindex = "1";
    document.getElementById("drop_link").style.display = "none";
}

function calcular_total(){
    preco_pqn = 308.87;
    preco_md = 525.91;
    preco_gd = 912.26;

    var tamanho = document.getElementById("campo_tamanho").value;

    if (tamanho == "p"){
        var qnt = parseInt(document.getElementById("campo_quantidade").value);
        total = qnt * preco_pqn;
    }else{
        if (tamanho == "m"){
            total = qnt * preco_md;
        }else{
            total = qnt * preco_gd;
        }
    }
    
    total = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('campo_total').value=total;
}