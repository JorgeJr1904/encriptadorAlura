function botonEncriptar() {
    let datosE = document.getElementById("texto").value;
    let parrafo = document.getElementById("result");

    let palabra = encriptar(datosE);
    parrafo.innerHTML = palabra;
}

function botonDesEncriptar() {
    let datosE = document.getElementById("texto").value;
    let parrafo = document.getElementById("result");

    let palabra = desEncriptar(datosE);
    parrafo.innerHTML = palabra;
}

function desEncriptar(texto) {
    let palabraEncriptada = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            i++;
            if (texto[i] == "i") {
                palabraEncriptada += "a";
            }
        } else if (texto[i] == "e") {
            i++;
            if (texto[i] == "n") {
                i++;
            }
            if (texto[i] == "t") {
                i++;
            }
            if (texto[i] == "e") {
                i++;
            }
            if (texto[i] == "r") {
                palabraEncriptada += "e";
            }
        } else if (texto[i] == "i") {
            i++;
            if (texto[i] == "m") {
                i++
            }
            if (texto[i] == "e") {
                i++
            }
            if (texto[i] == "s") {
                palabraEncriptada += "i";
            }
        } else if (texto[i] == "o") {
            i++;
            if (texto[i] == "b") {
                i++
            }
            if (texto[i] == "e") {
                i++
            }
            if (texto[i] == "r") {
                palabraEncriptada += "o";
            }
        } else if (texto[i] == "u") {
            i++;
            if (texto[i] == "f") {
                i++
            }
            if (texto[i] == "a") {
                i++
            }
            if (texto[i] == "t") {
                palabraEncriptada += "u";
            }
        } else {
            palabraEncriptada += texto[i];
        }
    }
    return palabraEncriptada;

}

function encriptar(palabra) {
    let palabraEncriptada = "";

    let texto = palabra.split('');

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            palabraEncriptada += "ai";
        } else if (texto[i] == "e") {
            palabraEncriptada += "enter";
        } else if (texto[i] == "i") {
            palabraEncriptada += "imes";
        } else if (texto[i] == "o") {
            palabraEncriptada += "ober";
        } else if (texto[i] == "u") {
            palabraEncriptada += "ufat";
        } else {
            palabraEncriptada += texto[i];
        }
    }
    return palabraEncriptada;
}