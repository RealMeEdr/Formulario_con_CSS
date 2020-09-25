function enviar(){
var decision = confirm('estamos a punto de enviarte un correo de suscripcion, verifica que sea correcto, si es así da en aceptar');
if(decision == true){
	alert('tu suscripción acaba de ser aceptada.');
	window.location.reload();
	}
else{
	alert('Será en otro momento entonces...');
}
}

function form(){
	window.open("form.html","Formulario","width=1000px,height=800px","scrollbars=NO, Resizable=NO");
}