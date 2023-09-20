function modal_app() {
    Swal.fire({
        html:
            '<div class="video-apk">' +
            ' <video class="v-apk" width="285px" height="auto"  autoplay muted loop>' +
            '<source src="https://res.cloudinary.com/lhuis/video/upload/v1675652072/videos/kkismnocvltefw6qyx7s.mp4" type="video/mp4">' +
            '</video>' +
            '</div>' +
            '<div class="pasaword">' + 
            '<img class="qr-apk" src="img/qr-apk.png" alt="">'+
            '<a  href=" https://play.google.com/store/apps/details?id=grafica.joc2"  target="_blank">' +
             '<button  class="bt-msj-descargar" >Descargar App</button></a>' +
            '</div>',
        //tamaño
        willOpen: '4',
        Button: '15',
        imageWidth: 300,
        imageHeight: 400,
        //cerrar,
        showCloseButton: true,
        showConfirmButton: false,
        background: '#fff',

    })
}
//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Please read this great article: ',
            url: 'https://bit.ly/graficajoc'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("The current browser does not support the share function. Please, manually share the link")
    }
});

const shareBtnDos = document.getElementById('shareBtnDos')
shareBtnDos.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Please read this great article: ',
            url: 'https://bit.ly/graficajoc'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("The current browser does not support the share function. Please, manually share the link")
    }
});



//COMPARTIR POR WSPP
const evento = document.getElementById('send')
const enviarFormulario = () => {

    let numero = document.getElementById('numero').value;


    var win = window.open(`https://wa.me/${numero}?text=Hola soy Grafica Joc y esta es mi%20Tarjeta%20Web:%20%0A%0Ahttps://bit.ly/graficajoc%0A%0A`,'_blank');

}
evento.addEventListener('click', enviarFormulario)

// copi
function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){
        document.getElementById("alert").style.display = "none";
    }, 3000);
}


//Modal 
function modal_01() {
    Swal.fire({
        title: 'Scan me',
        text: 'https://bit.ly/graficajoc',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666371712/grafica/qr-code_z2xtbo.png',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,    
        //cerrar
        showCloseButton: true,
        showConfirmButton: false,
        background: '#33ff00',
        //ajustes
        showCloseButton: true,
        timer: '6000',
        timerProgressBar: true,
        customClass: {
          actions: 'content',
        }
    })
 }
 function modal_0111() {
    Swal.fire({
      html: '<div class="modal-catalogo-virtual">' +
        '<img class="modal-catalogo-virtual-img" src="imgcatalogo/b (7).jpg" alt="">' +
        '<a href="https://drive.google.com/file/d/1wVgK6Z7gxAVOOtzpuuFIyPBYMHHFTap5/view?usp=sharing" target="_blank"><button class="modal-catalogo-virtual-boton">Ver Catalogo</button></a>' +
        '</div>',
      //tamaño
      imageWidth: 100,
      imageHeight: 500,
      padding: '1px',
      //cerrar
      showCloseButton: true,
      showConfirmButton: false,
      background: '#33ff05',
      //ajustes
      showCloseButton: true,
      timer: '10000',
      timerProgressBar: true,
      customClass: {
        actions: 'content',
      }
    })
 }
 function modal_02() {
    Swal.fire({
        html: 'NO disponible el Qr de pago',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666386781/grafica/qr-code_x9dwaz.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }
 function modal_03() {
    Swal.fire({
        title: 'Qr copi cbu',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666384630/grafica/qr-code_1_irp8yo.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }
 function modal_04() {
    Swal.fire({
        title: 'Qr copi Alias',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666384808/grafica/alias_xivdgu.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }
 function modal_05() {
    Swal.fire({
        html: '<p  style="color:#000;">Tú, Señor, eres mi escudo y mi fuerza; en ti confía mi corazón, pues recibo tu ayuda. Por eso mi corazón se alegra y te alaba con sus cánticos. Tú, Señor, infundes fuerzas a tu pueblo; tu ungido halla en ti un refugio salvador (Sal 28:7-8).</p>',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666368017/grafica/135311609_386233642969639_1085019464901337411_n_v26zs1.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }

 function modal_06() {
    Swal.fire({
        html: '<p>Envía el comprobante por whatsapp</p>',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666381494/grafica/qr-code_ihghcg.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }
 