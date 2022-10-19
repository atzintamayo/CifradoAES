	let encriptando = true;
let add_element = href => {
	let div = document.getElementById('download');	
	let a = document.createElement('a');
	a.setAttribute('href', href);
        a.setAttribute('download','');

	div.appendChild(a);
	a.innerText = 'Download';
}
function encriptar(clave , mensaje) {
	console.log(clave, mensaje);
	return crypt(mensaje, clave);
}
function desencriptar(clave, mensaje) {
	console.log(clave, mensaje);
	return decrypt(mensaje, clave);
}

function mostrar(){
	console.log("prueba");

	let documento = document.getElementById("archivo");
	let lec = new FileReader();
	lec.readAsText(documento.files[0]);
	
	lec.onload =  ev => {

		let mensaje = ev.target.result;
		let clave = document.getElementById("clave").value;
		let response =  encriptar(clave , mensaje) ;
		let doc = new File(
			[response], 
			'archivo'
		);
		let url_doc = URL.createObjectURL(doc);
		add_element(url_doc);
	}
}

function mostrar2(){
	console.log("prueba");

	let documento = document.getElementById("archivo");
	let lec = new FileReader();
	lec.readAsText(documento.files[0]);
	
	lec.onload =  ev => {

		let mensaje = ev.target.result;
		let clave = document.getElementById("clave").value;
		let response = desencriptar(clave , mensaje);
		let doc = new File(
			[response], 
			'archivo'
		);
		let url_doc = URL.createObjectURL(doc);
		add_element(url_doc);
}}