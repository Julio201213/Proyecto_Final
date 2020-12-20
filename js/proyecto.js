var usuario;

function Capturar() {
    class Persona {
        constructor(nombre, apellido, email, documento, date, direccion, ciudad, eps, arl, pension) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.documento = documento;
            this.date = date;
            this.direccion = direccion;
            this.ciudad = ciudad;

        }
    }
    var nombreRegistro = document.getElementById('nombre').value;
    var apellidoRegistro = document.getElementById('apellido').value;
    var emailRegistro = document.getElementById('email').value;
    var documentoRegistro = document.getElementById('documento').value;
    var dateRegistro = document.getElementById('date').value;
    var direccionRegistro = document.getElementById('direccion').value;
    var ciudadRegistro = document.getElementById('ciudad').value;



    let nivelArl = document.getElementById('valor_Arl').value;


    usuario = new Persona(nombreRegistro, apellidoRegistro, emailRegistro, documentoRegistro, dateRegistro, direccionRegistro,
        ciudadRegistro);

    RegistrarUsuario(usuario);
}

var personas = [];

function RegistrarUsuario(usuario) {
    personas.push(usuario);
    document.getElementById('tabla').innerHTML += '<tbody><td>' + usuario.nombre + '</td><td>' + usuario.apellido + '</td><td>' + usuario.email + '</td><td>' + usuario.documento + '</td><td>' + usuario.date + '</td><td>' + usuario.direccion + '</td><td>' + usuario.ciudad + '</td><td>'
}

let eps = 0;
let pension = 0;
let sueldo;
let total;
let arl = 0;

function Calcular() {
    sueldo = Number(document.getElementById('sueldo').value);
    nivelList = document.getElementById('nivelArl').value;
    eps = Math.round(sueldo * 0.125);
    pension = Math.round(sueldo * 0.16);
    arl = Math.round(sueldo * arlNivel(nivelList));
    document.getElementById('valorEps').value = eps;
    document.getElementById('valorPension').value = pension;
    document.getElementById('valor_Arl').value = arl;
    document.getElementById('total').value = eps + pension + arl;
    document.getElementById('nivelList').value;

}

function arlNivel(nivelList) {
    switch (nivelList) {
        case 'Riesgo 1':
            return 0.00522;
        case 'Riesgo 2':
            return 0.01044;
        case 'Riesgo 3':
            return 0.02436;
        case 'Riesgo 4':
            return 0.04350;
        case 'Riesgo 5':
            return 0.06960;
        default:
            return 0;
    }

}