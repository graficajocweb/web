const evento = document.getElementById('send')
const enviarFormulario =() => {

        let numero = document.getElementById('numero').value;
        let nombre = document.getElementById('nombre').value;
        let Drive = document.getElementById('drive').value;
        let mensaje = document.getElementById('mensaje').value;
        let mensaje2 = document.getElementById('mensaje2').value;
       
        
var win= window.open(`https://wa.me/54${numero}?text=
Hola%20${nombre}%20como estas, Tu presupuesto es.
%0ATotal:%20${Drive}
%0A${mensaje}%0A${mensaje2}%0A%0A%0AContacto:%20bit.ly/graficajoc`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)
