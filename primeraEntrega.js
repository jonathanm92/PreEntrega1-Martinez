// CALCULADOR DE NOTAS DE UN ALUMNO EN UN SEMESTRE de Jonathan Martinez//

// Funcion encargada de tomar todas las notas ingresadas y devolver una nota final
function calculadorNotas (){
    let count = 0;
    for (let i = 1; i <= 6; i++){
        notas = parseInt( prompt ("Ingresar nota #" + i + ":") );
        while (notas < 0 || notas > 100){
            notas = parseInt (prompt("Valor incorrecto, volver a ingresar la nota #" + i + ":"));
        }
            count += notas;
        
    }

    return count / 6;
}

//Funcion encargada de asignarle una letra a la nota final
function calculadorLetra (notas){
    if (notas >= 90){
        return "A";
    }else if ( notas >= 80){
        return "B";
    }else if ( notas >= 70){
        return "C";
    }else if ( notas >= 60){
        return "D";
    }else{
        return "F";
    }
}

// Declaracion de variables que voy a usar
let masAlumnos = true;
let notas = 0;
let mensajeFinal;
let validar;


// bucle encargado de repetirse hasta que no se deseen calcular mas notas
while (masAlumnos){
    
    alert("Bienvenido/a al calculador de notas para el semestre de tu Alumno");
    notas = calculadorNotas();
    mensajeFinal = "La nota final de su alumno es: " + notas + "\nPara una: " + calculadorLetra(notas);
    alert(mensajeFinal);

    validar = prompt("Desea calcular otra nota? (Ingrese SI o NO)");
    /* validacion para saber si el usuario quiere calcular mas notas 
    (se va a repetir hasta que el usuario ingrese una respuesta correcta) */
    while (validar.toUpperCase() != "SI"){
        if (validar.toUpperCase() == "NO"){
            masAlumnos = false;
            break;
        }
        validar = prompt ("Respuesta incorrecta. Ingrese SI o NO: ");
    }
}