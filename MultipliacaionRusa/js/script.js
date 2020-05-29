function limpiarTabla(){
    console.log('Limpiando')
    let tabla = "<table class='tabla'> ";
    tabla += "<thead>"+
                "<th>Multiplicador</th>"+
                "<th>Multiplicando</th>"+
                "<th>Multiplicador Inpar</th>"+
                "<th>Suma</th>"+
            "</thead>"+
            "</table>";
    document.getElementById("resultado").innerHTML = tabla;
    document.getElementById("multiplicador").value = "";
    document.getElementById("multiplicando").value = "";
}

function crearTabla(){
    let multiplicador = tempMultiplicador = parseInt(document.getElementById("multiplicador").value);
    let multiplicando = tempMultiplicando = parseInt(document.getElementById("multiplicando").value);
    let solucion = new Array(1);
    let filaTemp = 0, resultado = 0;       

    let tabla = "<table class='tabla'> ";
    tabla += "<thead>"+
                "<th>Multiplicador</th>"+
                "<th>Multiplicando</th>"+
                "<th>Multiplicador Inpar</th>"+
                "<th>Suma</th>"+
            "</thead>";
   
    while (parseInt(tempMultiplicador) != 0) {
        solucion[filaTemp] = new Array(1);
        if (parseInt(tempMultiplicador % 2) != 0) {
            resultado += tempMultiplicando;
            solucion[filaTemp][2] = "SI";
            solucion[filaTemp][3] = resultado;
        } else {
            solucion[filaTemp][2] = "NO";
            solucion[filaTemp][3] = "";
        }
        solucion[filaTemp][0] = parseInt(tempMultiplicador);
        solucion[filaTemp][1] = parseInt(tempMultiplicando);
        tempMultiplicador = parseInt(tempMultiplicador) / 2;
        tempMultiplicando = parseInt(tempMultiplicando) * 2;
        filaTemp++;
    }
    
    tabla+= "<tbody>";
    for(var i=0; i < solucion.length; i++) {
        tabla += "<tr class='fila'>";
        for(var j=0; j < solucion[0].length; j++) {
            tabla += "<td>";
            tabla += solucion[i][j];
            tabla += "</td>";
        }
        tabla += "</tr>";   
    }
    tabla += "</tbody>";
    tabla += "</table>";

    document.getElementById("resultado").innerHTML=tabla;
}