<?php

session_start();
@header("Content-type: text/xml");
/*
 * 5	Añade un marcador con un máximo de fallos que vaya modificándose cada 
 * vez que el usuario falle y muestre un mensaje si se han realizado todos los 
 * fallos o todos los aciertos. Para controlar los fallos puedes utilizar una 
 * variable global JavaScript.
 */
if (!array_key_exists("contador", $_SESSION)) {
    $_SESSION["contador"]=0;
}
$contador=$_SESSION["contador"];

$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
$xml .= '<resp>' . "\n";  //inciamos el XML
$xml .= "<fallos>" . $_SESSION["contador"] . "</fallos>" . "\n";//marcador fallos

if (isset($_GET['inicio'])) {     //se ha indicado iniciar un nuevo juego
    $numeroAleatorio = rand(0, 10); //seleccionamos un numero aleatorio entre 0 y 10
    $_SESSION['numeroOculto'] = $numeroAleatorio;
    $_SESSION["contador"]=1; //marcador fallos


    $xml .= "<inicio>" . $_SESSION['numeroOculto'] . "</inicio>" . "\n"; //retornamos el numero generado
} else {
    $numeroUsuario = $_GET['numero'];
    $numeroOculto = $_SESSION['numeroOculto'];

    if ($numeroUsuario > $numeroOculto) {
        $xml .= "<encontrado>no</encontrado>" . "\n";
        $xml .= "<mensaje>Has introducido un valor demasiado alto" . "s</mensaje>" . "\n";
        $contador++; //marcador fallos
        $_SESSION["contador"] = $contador; //marcador fallos
    } else {
        if ($numeroUsuario < $numeroOculto) {
            $xml .= "<encontrado>no</encontrado>" . "\n";
            $xml .= "<mensaje>Has introducido un valor demasiado bajo" . "</mensaje>" . "\n";
            $contador++; //marcador fallos
            $_SESSION["contador"] = $contador; //marcador fallos
        } else {
            $xml .= "<encontrado>si</encontrado>" . "\n";
            $xml .= "<mensaje>Exacto!</mensaje>" . "\n";
        }
    }
}
//finalizamos la estructura XML
$xml .= '</resp>' . "\n";

//insertamos la respuesta XML
echo($xml);
?>
