<?php

    $conexion = mysqli_connect{
        'localhost',
        'root',
        'password',
        'ajaxtarea',
    }
    if($conexion){
        alert('la base de datos esta conectada');
    }

?>