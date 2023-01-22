function es_parell(num){
    if (num%2 == 0)
        return true
    else
        return false
}

function es_primer(num){
    for (n=2; n<num; n++){
        if (num%n == 0){
            return false
        }        
    }
    return true
}

function write_line(line){
    document.write(line)
    document.write('<br>')
}

function ask_number(str){
    var valid = false
    while (!valid){
        n1 = prompt(`Introdueix un número ${str} entre 1 i 50:`)
        if (parseInt(n1)>=1 && parseInt(n1)<=50)
            valid = true
    }
    return n1
}