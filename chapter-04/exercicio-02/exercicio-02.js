const frm = document.querySelector('form')
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5
    resp.textContent = `Hora na França: ${horaFranca.toFixed(2)}`
})