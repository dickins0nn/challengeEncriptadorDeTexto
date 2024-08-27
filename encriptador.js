let texto = document.querySelector(".campo_texto");

texto.addEventListener("click", function() {
    if (texto.innerText === "Ingrese el texto aqui") {
        texto.innerText = "";
    }
    texto.setAttribute("contenteditable", "true");
    texto.classList.add("no-border");
    texto.focus();
});

document.getElementById('btnEncriptar').addEventListener('click', function() {
    let textoIngresado = texto.innerText;

    if (/[^a-z\s]/.test(textoIngresado)) {
        alert('Por favor, ingrese solo letras minúsculas sin acentos.');
        texto.innerText = "";
        return;
    }
    
    let textoEncriptado = encriptarTexto(textoIngresado);
    mostrarResultado(textoEncriptado);
});

document.getElementById('btnDesencriptar').addEventListener('click', function() {
    let textoIngresado = texto.innerText;

    if (/[^a-z\s]/.test(textoIngresado)) {
        alert('Por favor, asegúrese de que el texto a desencriptar contenga solo letras minúsculas sin acentos.');
        texto.innerText = "";
        return;
    }

    let textoDesencriptado = desencriptarTexto(textoIngresado);
    mostrarResultado(textoDesencriptado);
});

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function mostrarResultado(textoEncriptado) {
    let outputTexto = document.querySelector('.parrafos_ctn2 .ning');
    outputTexto.innerText = textoEncriptado;

    document.querySelector('.img_2').style.display = 'none';
    document.querySelector('.ingr').style.display = 'none';
    
    if (!document.getElementById('btnCopiar')) {
        let btnCopiar = document.createElement('button');
        btnCopiar.id = 'btnCopiar';
        btnCopiar.className = 'btn_en';
        btnCopiar.innerText = 'Copiar';
        document.querySelector('.parrafos_ctn2').appendChild(btnCopiar);

        btnCopiar.addEventListener('click', function() {
            copiarTexto(outputTexto.innerText);
        });
    }
}

function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        let btnCopiar = document.getElementById('btnCopiar');
        btnCopiar.innerText = 'Copiado';
        setTimeout(() => {
            btnCopiar.innerText = 'Copiar';
        }, 2000);
    });
}


