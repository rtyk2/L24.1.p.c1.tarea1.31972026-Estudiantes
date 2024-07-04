var estudiante1 = ["13457856", "M", 15,20, 25];

var estudiante2 = ["15432551", "F", 10, 10, 10];

var estudiante3 = ["32455678", "M", 18, 22, 20];

var estudiante4 = ["28678900", "F", 18,25,24];

mayor=0;
fAprobados=0;
sumaNotas=[0,0];


function totalNotas (arreglo){

    var total=0;

    total = arreglo[2]+arreglo[3]+arreglo[4];


    if (mayor<total)
    {
    mayor=total;
    }

    if (arreglo[1]=="F"&&total>48)
    {fAprobados++;}

    sumaNotas[0]=total+sumaNotas[0];

    sumaNotas[1]=sumaNotas[1]+1;

    let salida = document.getElementById("salida");
    salida.innerHTML+= `
    
    <br>El estudiante con cedula ${arreglo[0]} tiene una nota total de ${total}
    `
}

totalNotas(estudiante1);
totalNotas(estudiante2);
totalNotas(estudiante3);
totalNotas(estudiante4);

let salida = document.getElementById("salida");
salida.innerHTML+= `

<br>La mayor nota fue: ${mayor}

<br>Estudiantes femeninas abrobadas: ${fAprobados}

<br>El promedio de las notas fue: ${(sumaNotas[0]/sumaNotas[1])}
`