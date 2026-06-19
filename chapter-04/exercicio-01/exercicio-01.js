const bairro = prompt("Bairro de Entrega:")
let taxaEntrega

switch (bairro) {
    case "Centro":
        taxaEntrega = 5.00
        break

    case "Zona Sul":
        taxaEntrega = 7.50
        break

    case "Zona Norte":
        taxaEntrega = 10.00
        break

    case "Zona Leste":
        taxaEntrega = 12.50
        break

    default:
        taxaEntrega = 15.00
}

alert(`Taxa R$: ${taxaEntrega.toFixed(2)}`)