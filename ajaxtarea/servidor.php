<?php

    include('database.php');
    
    $search = $_POST['search'];

    if(!empty($search)){
        $query = "SELECT * FROM tareas WHERE name LIKE '$search%'";
        $result = mysqli_query($connection,$query);
        if(!$result){
            die('error de consulta' . mysqli_error($connection));
        };       
        $json = array();
        while ($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'name' => $row['name'],
                'description' => $row['description'],
                'id' => $row['id'],
            );
        };
            
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

?>



