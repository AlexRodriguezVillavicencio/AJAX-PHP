$(function(){

    $('#search').keyup(function () { 
        let search = $('#search').val();
        //console.log(search);
        $.ajax({
            url: 'servidor.php',
            type: 'POST',
            data: { search },
            
            success: function(response) {
                console.log(response); 
                // convertimos ahora el objjson string a json
                let tareas = JSON.parse(response);
                console.log(tareas);
                let template = '';

                tareas.forEach(element => {
                    template += `<li>${element.name}</li>`
                });
                
                $('#contenedorBuscar').html(template)
              
            }
        });
    });

});






