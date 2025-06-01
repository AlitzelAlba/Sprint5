/*Variables*/
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let lista = document.getElementById('miLista');


document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Prevenir la acción por defecto del enlace
      archivo = this.getAttribute('data-file');
      // Opcional: actualizar el texto del botón para reflejar la selección
      document.getElementById('miGenero').innerText = this.innerText;
      // Redirigir a resultados.html pasando el archivo seleccionado como parámetro
      window.location.href = `resultado.html?archivo=${archivo}`;
    });
  });

function buscar(){
    lista.innerHTML = "";

    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida){
        for (let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())) {
                let p = document.createElement('p');
                p.id = item.nombre;
                p.innerHTML = item.descripcion;
                p.style.display = "none";

                let li = document.createElement('li');
                li.innerHTML = item.nombre;
                li.addEventListener('mouseover', function(){
                    let p = document.getElementById(item.nombre);   
                    p.style.display = 'block';             
                });
                li.addEventListener('mouseout', function(){
                    let p = document.getElementById(item.nombre);   
                    p.style.display = 'none';
                });
                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    });
    
}
