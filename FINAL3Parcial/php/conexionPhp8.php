<?php

//se declaran las variables para la conexión con la versión 7 de php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "comentarios";



// Create una nueva conexión
$conexion = new mysqli($servername, $username, $password, $dbname);


// Verificar conexión
if($conexion ->connect_errno){
    
    printf("Falló la conexión: %s\n", $mysqli->connect_error);

    echo "Errno: " . $mysqli->connect_errno . "\n";

    echo "Error: " . $mysqli->connect_error . "\n";

  exit;

}else{
    echo '<script language="javascript">alert("CONECCION EXITOSA!!");</script>';



//Se declaran las variables que recupera la información del formulario
$name2=$_POST['nombre']; 
$email2=$_POST['email'];
$telefono2=$_POST['telefono'];
$comentarios2=$_POST['comentario'];


$sql = "insert into usuarios_comentarios(nombre, email, telefono, comentarios) 

       values ('$name2','$email2','$telefono2','$comentarios2')"; 

if ($conexion ->query($sql) === TRUE) {
    echo '<script language="javascript">alert("New registro creado");</script>';

} else {

    echo "Error: " . $sql . "
" . $conexion->error;

}

$conexion->close();

}

?>