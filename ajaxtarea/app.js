$(function(){

    $('#cajaResultados').hide();
    obtenerTarea();


    $('#search').keyup(function () { 
        if($('#search').val()){
            let search = $('#search').val();
            $.ajax({
                url: 'servidor.php',
                type: 'POST',
                data: { search },
            
                success: function(response) {  
                    // convertimos ahora el objjson string a json
                    let tareas = JSON.parse(response);

                    let template = '';

                    tareas.forEach(element => {
                        template += `<li>${element.name}</li>`
                    });
                    
                    $('#contenedorBuscar').html(template)             
                    $('#cajaResultados').show()
                }
            });
        }
    });



    $('#form-tarea').submit(function(e){
        const datos = {
            'name': $('#name').val(),
            'description': $('#description').val()
        }
        $.post('agregar.php',datos,function(){
            obtenerTarea();
            $('#form-tarea').trigger('reset');
        })
        e.preventDefault();
    })


    function obtenerTarea() {
        $.ajax({
            url: 'vertabla.php',
            type: 'GET',
            success: function(response){
                let tareas = JSON.parse(response);
                let template = '';
    
                tareas.forEach(element => {
                    template += `
                    <tr elementID="${element.id}">
                        <td>${element.id}</td>
                        <td><a href"#" class="editar">${element.name}</a></td>
                        <td>${element.description}</td>
                        <td class="btn eliminar">🗑️</td>                        
                    </tr>
                    `
                })
                $('#tarea').html(template)
            }
        });
    }

    $(document).on('click','.eliminar',function(){
        if(confirm("estas seguro de querer eliminar?")){
            // vamos a acceder al id de cada boton que esta dos niveles superior:
            const padre = $(this)[0].parentElement;
            let id = $(padre).attr('elementID');
        
            $.post('eliminar.php',{id},function(){
                obtenerTarea(); 
            })
        }
    })

    $(document).on('click','.editar',function(){
        const padre = $(this)[0].parentElement;
        console.log(padre);

    })
});






