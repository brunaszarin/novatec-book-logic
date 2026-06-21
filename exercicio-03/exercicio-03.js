const frm = document.querySelector("form") //obtem elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita envio do form
    const numero = Number(frm.inNumero.value) //calcula raiz quadrada do numero
    const raiz = Math.sqrt(numero)
    if (Number.isInteger(raiz)){ //se o numero for um numero inteiro
        resp.innerText = `Raiz: ${raiz}`   
    } else { //senão,
        resp.innerText = `Não há raiz quadrada para esse número: ${numero}` //...mostra mensagem

    }})