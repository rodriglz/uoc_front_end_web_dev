var [num1, num2, output] = [ask_number('num1'), ask_number('num2'), ''] // ES6
var msg = `Números: ${num1} i ${num2}`
write_line(msg)
output += msg + "\n"

// Sumar tots dos números. 
msg = "La suma dels dos números és: " + (+num1 + +num2)
write_line(msg)
output += msg + "\n"

num1 = parseInt(num1)
num2 = parseInt(num2)

// Mostrar si tots dos números introduïts són primers, si no ho són mostrar a l'usuari que no són primers tots dos o un. 
if (es_primer(num1) && es_primer(num2)){
    msg = "Els dos números són primers"
    write_line(msg)
    output += msg + "\n"
}
else {
    if (es_primer(num1)) {
        msg = "El número " + num1 + " és primer"
        write_line(msg)
        output += msg + "\n"
    }
    else if (es_primer(num2)) {
        msg = "El número " + num2 + " és primer"
        write_line(msg)
        output += msg + "\n"
    }
    else {
        msg = "Cap número és primer"
        write_line(msg)
        output += msg + "\n"
    }
}

// Mostrar si tots dos números introduïts són parells, si no ho són, mostrar a l'usuari que no són parells tots dos o un. 
if (es_parell(num1) && es_parell(num2)){
    msg = "Els dos números són parells"
    write_line(msg)
    output += msg + "\n"
}
else {
    if (es_parell(num1)) {
        msg = "El número " + num1 + " és parell"
        write_line(msg)
        output += msg + "\n"
    }
    else if (es_parell(num2)) {
        msg = "El número " + num2 + " és parell"
        write_line(msg)
        output += msg + "\n"
    }
    else {
        msg = "Cap número és parell"
        write_line(msg)
        output += msg + "\n"        
    }
}

// Si el número 1 és menor que el número 2, imprimiu només els nombres parells en el rang entre num1 i num2 en forma ascendent. 
if (num1 < num2){
    for (n=num1; n<=num2; n++){
        if (es_parell(n)){
            document.write(n + " ")
            output += n + " "
        }        
    }
}
// Si el número 1 és més gran que el número 2, imprimiu només els nombres imparells en el rang entre num1 i num2 en forma descendent.
else if (num1 > num2){
    for (n=num1; n>=num2; n--){
        if (!es_parell(n)){
            document.write(n + " ")
            output += n + " "
        }
    }
}
// Si el número 1 és igual al número 2, imprimiu només un número; si és primer , si és parell i com que són iguals el rang només imprimeix el mateix número.
else {
    write_line(num1)
    output += num1
}

alert(output)
