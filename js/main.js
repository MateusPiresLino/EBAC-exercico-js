
//impede atualização do web site 
document.querySelector('#res').addEventListener('submit', function(e){
    e.preventDefault();

    //consts recebendo os valores do usuário
    const numeroA = Number(document.querySelector('#numero-a').value);
    const numeroB = Number(document.querySelector('#numero-b').value);

    //verificar se condição atende o solicitado.
    if (numeroB > numeroA) {
        alert(`Parabéns! O número ${numeroB} é maior que ${numeroA}`)
    } else {
        alert(`Desculpe, O número ${numeroB} é menor que numero ${numeroA}`)
    }
});
