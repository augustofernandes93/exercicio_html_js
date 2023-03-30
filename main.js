const form = document.getElementById('form-validar');

form.addEventListener('submit', function(e){
    e.preventDefault();


const campoA = parseFloat (document.getElementById('campo-a').value);
const campoB = parseFloat (document.getElementById('campo-b').value);

function validaNumero(campoA, campoB){
    if (campoB > campoA){
        alert('Formulário válido, o valor de B é maior que A');
        return true;
    } else {
        alert('Formulário invalido, o valor de A é maior que B');
        return false;
    }
}
formEValido = validaNumero(campoA, campoB)
});


console.log(form);
