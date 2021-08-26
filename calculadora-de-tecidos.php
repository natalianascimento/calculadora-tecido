<?php 

echo "Calculadora de Metragem de Tecido Necessário <br>";
$larguraTecido = 1.6;
$comprimentoPeca = 0.5;
$numeroManequim = 36;
$mangaComprida =true;


if ($numeroManequim > 46) {
    $comprimentoPeca = $comprimentoPeca * 1.5;
}
elseif ($numeroManequim > 58){
    $comprimentoPeca = $comprimentoPeca * 2.5;
}


if ($mangaComprida = true){
    $metragemTotal = $comprimentoPeca + 1; // inserir margem de 10% a mais de tecido.
    echo "Você deverá comprar $metragemTotal metros de tecido.";
}
elseif ($mangaComprida = false) {
    echo "Você deverá comprar $metragemTotal metros de tecido.";
}



?>
