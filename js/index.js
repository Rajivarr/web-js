




    const Array = document.getElementsByClassName("form-text text-muted"); 
    
    //inputs
    const producto = document.getElementById('Producto');
    const precio = document.getElementById('Precio');
    const cantidad = document.getElementById('Cantidad');

    for(let i = 0; i < Array.length;i++){


        if(producto.value === ''){
            Array[i].innerHTML = "Campo Requerido";


        }
        
        if( precio.value === ''){
            Array[i].innerHTML = "Campo Requerido";
        
            
           


        }

        if(cantidad.value === ''){
            Array[i].innerHTML = "Campo Requerido";

            
           

        }

        

         
     
             
         
         
    }

    document.getElementById("boton").onclick =alert("Producto Creado con Exito");

















    











