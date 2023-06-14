let fruta = 'fruta'

fruta = prompt('nome da fruta')

switch (fruta.toLowerCase()) {
    case 'maça' :
        alert("estamos com falta de maça")
        break;
    case 'kiwi' :
        alert("nao vendemos essa fruta aqui")
        break;
    case 'melancia' :
        alert("aqui está, são 3 reais o Kg")
        break;
    default:
        alert("Recarregue a pagina para outros resultado")
}