<?php
    // si solo queremos obtener datos del backend:
    
    echo "hola mundo desde AJAX";

    // si queremos enviar datos al backend:
    if($_POST){
        echo "recibido: ".$_POST['username'];
    }

?>