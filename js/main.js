//TODO: Práctica Promesas

//* Comprobar a través de la matrícula indicada:
//* 1) Si está dado de alta o baja.
//*     1.1) Si está dado de baja, mostrar error.
//*     1.2) Si está dado de alta

document.addEventListener('DOMContentLoaded', () => {


//*** VARIABLES ***//

const almacenarDatos = JSON.parse(localStorage.getItem('propietarios')) || [];

const fragment = document.createDocumentFragment();

//** Arrays **//

const arrayAltas = [
    {matricula: "1234-ABC", estado: "alta"},
    {matricula: "2341-ABC", estado: "alta"},
    {matricula: "3412-ABC", estado: "alta"},
    {matricula: "4123-ABC", estado: "alta"},
    {matricula: "1234-BCA", estado: "alta"},
    {matricula: "1234-CAB", estado: "alta"}
]; //* matrículas que están dadas de alta

const arrayDatosPropietarios = [ //* datos de los propietarios dados de alta
    {matricula: "1234-ABC", nombre: "Persona 1", telefono: 666666666, direccion: "Casa 1", modelo: "Coche 1", multa: false},
    {matricula: "2341-ABC", nombre: "Persona 2", telefono: 666666666, direccion: "Casa 2", modelo: "Coche 2", multa: true},
    {matricula: "4123-ABC", nombre: "Persona 4", telefono: 666666666, direccion: "Casa 4", modelo: "Coche 4", multa: false},
    {matricula: "1234-CAB", nombre: "Persona 6", telefono: 666666666, direccion: "Casa 6", modelo: "Coche 6", multa: true}
];


//** Capturas **//

const capForm = document.querySelector('#form');
const capInputText = document.querySelector('#texto');




//*** EVENTOS ***//

capForm.addEventListener('submit', (ev) => {

    ev.preventDefault();
    comprobarAlta(validarMatricula())
        .then((resp) => comprobarDatosPropietario(resp))
        .then((resp) => comprobarMulta(resp))
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error)); 
    capForm.reset();

}); //!EVENTO



//*** FUNCIONES ***//

const validarMatricula = () => { //* valido a través de una regExp la matrícula

    let regExp = /^[0-9]{4}-{1}[A-Z]{3}$/;

    let matricula = capInputText.value;

    if(regExp.test(matricula)){
        return matricula;
    }else{
        console.log('Matrícula incorrecta');
    }

} //!FUNC-VALIDARMATRICULA



const comprobarAlta = (matricula) => { //* compruebo si, con la matrícula introducida, el propietario está dado de alta o no (objAltas)

    const estado = arrayAltas.find((item) => item.matricula == matricula)?.estado

    return new Promise((resolve, reject) => {

        if(estado == "alta")
            resolve(matricula);
        else
            reject('El propietario no está dado de alta en el sistema.');

    });

} //!FUNC-COMPROBARALTA



const comprobarDatosPropietario = (matricula) => { //* una vez comprobada el alta, verifico si constan los datos del propietario o no (objDatosPropietarios)

    const datos = arrayDatosPropietarios.find((item) => item.matricula == matricula)?.matricula

    return new Promise((resolve, reject) => {
        if(datos == matricula)
            resolve(matricula);
        else
            reject(`Con la matrícula ${matricula} no constan datos en el sistema.`)
    });

} //!FUNC-COMPROBARDATOSPROPIETARIO



const comprobarMulta = (matricula) => { //* si constan los datos del propietario, verifico si tiene multa o no (objMultas)

    const multa = arrayDatosPropietarios.find((item) => item.matricula == matricula)?.multa
    
    return new Promise((resolve, reject) => {
        if(multa == true)
            resolve("Sí tienes multa");
        else
            reject(`Con la matrícula ${matricula} no consta ninguna multa en el sistema.`)
    });

} //!FUNC-COMPROBARMULTA



const setLocal = () => { //* para guardar los datos en el localStorage una vez que ha sido validado y completadas todas las promesas

    localStorage.setItem('propietarios', JSON.stringify(arrayDatosPropietarios));

} //!FUNC-SETLOCAL



const getLocal = () => { //* para pintar la tabla con los datos que tengo en el localStorage

    return JSON.parse(localStorage.getItem('propietarios')) || [];

} //!FUNC-GETLOCAL



const pintarTabla = () => {



} //!FUNC-PINTARTABLA



}) //!LOAD