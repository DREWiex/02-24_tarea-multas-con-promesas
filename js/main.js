//TODO: Práctica Promesas

//* Comprobar a través de la matrícula indicada:

document.addEventListener('DOMContentLoaded', () => {


//*** VARIABLES ***//


//** Arrays **//

const arrayAltas = [
    {matricula: "1234-ABC", estado: "alta"},
    {matricula: "2341-ABC", estado: "alta"},
    {matricula: "3412-ABC", estado: "baja"},
    {matricula: "4123-ABC", estado: "alta"},
    {matricula: "1234-BCA", estado: "baja"},
    {matricula: "1234-CAB", estado: "alta"}
]; //* matrículas que están dadas de alta

const arrayDatosPropietarios = [ //* datos de los propietarios dados de alta
    {matricula: "1234-ABC", nombre: "Persona 1", telefono: 666666666, direccion: "Casa 1", modelo: "Coche 1"},
    {matricula: "2341-ABC", nombre: "Persona 2", telefono: 666666666, direccion: "Casa 2", modelo: "Coche 2"},
    {matricula: "4123-ABC", nombre: "Persona 4", telefono: 666666666, direccion: "Casa 4", modelo: "Coche 4"},
    {matricula: "1234-CAB", nombre: "Persona 6", telefono: 666666666, direccion: "Casa 6", modelo: "Coche 6"}
];

const arrayMultas = [
    {matricula: "2341-ABC", multa: false},
    {matricula: "1234-CAB", multa: true}
]; //* true, si tiene multa; false, si no tiene multa


//** Capturas **//

const capForm = document.querySelector('#form');
const capInputText = document.querySelector('#texto');
const matricula = arrayAltas.matricula; //* capturo en una constante la propiedad 'matricula' del arrayAltas
const nombre = arrayDatosPropietarios.nombre; //* capturo en una constante la propiedad 'nombre' del arrayDatosPropietarios



//*** EVENTOS ***//

capForm.addEventListener('submit', (ev) => {

    ev.preventDefault();
    validarMatricula();
    capForm.reset();

})



//*** FUNCIONES ***//

const validarMatricula = () => { //* valido a través de una regExp la matrícula

    let regExp = /^[0-9]{4}-{1}[A-Z]{3}$/;


    if(regExp.test(capInputText.value)){
        comprobarTodo(matricula);
    }else{
        console.log('Matrícula incorrecta');
    }

} //!FUNC-VALIDARMATRICULA



const comprobarAlta = async (matricula) => { //* compruebo si, con la matrícula introducida, el propietario está dado de alta o no (objAltas)

    const estado = arrayAltas.find((item) => item.matricula == matricula)?.estado

        if(estado) return(estado);
    
        else throw(`El propietario no está dado de alta`);

} //!FUNC-COMPROBARALTA



const comprobarDatosPropietario = async (matricula) => { //* una vez comprobada el alta, verifico si constan los datos del propietario o no (objDatosPropietarios)

    const datos = arrayDatosPropietarios.find((item) => item.matricula == matricula)

        if(datos) return(datos);
      
        else throw(`No constan datos de ${nombre} en la base de datos`);

} //!FUNC-COMPROBARDATOSPROPIETARIO



const comprobarMulta = () => { //* si constan los datos del propietario, verifico si tiene multa o no (objMultas)



} //!FUNC-COMPROBARMULTA



const comprobarTodo = async (matricula) => {

    try{

        const estado = await comprobarAlta(matricula);

        const datos = await comprobarDatosPropietario(matricula);

        return console.log(`Sí disponemos de los datos del propietario ${nombre}.`);

    }catch(error){
        
        throw(console.log(error))
    
    }

} //! FUNC-COMPROBARTODO



const setLocal = () => { //* para guardar los datos en el localStorage una vez que ha sido validado y completadas todas las promesas



} //!FUNC-SETLOCAL



const getLocal = () => { //* para pintar la tabla con los datos que tengo en el localStorage



} //!FUNC-GETLOCAL



const pintarTabla = () => {



} //!FUNC-PINTARTABLA



const init = () => {



} //!FUNC-INIT


init();


}) //!LOAD