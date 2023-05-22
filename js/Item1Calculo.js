// seleciona todos os elementos com classe "Item1"
const itens = document.querySelectorAll(".Item");

// itera sobre cada elemento com classe "Item1"
itens.forEach(item => {
    const descontoPorcentagem = item.querySelector(".DescontoItem > div > p").textContent.trim();
    const porcentagem = parseFloat(descontoPorcentagem.split(" ")[0]);
    const valorTotal = parseFloat(item.querySelector(".SalvoItem > span > strike").textContent.trim().replace("R$ ", "").replace(".", "").replace(",", "."));
    const desconto = (porcentagem / 100) * valorTotal;
    const valorDescontoElemento = item.querySelector(".SalvoItem > div > h5:nth-of-type(2)");
    valorDescontoElemento.textContent = `R$ ${desconto.toFixed(2)}`;
    const valorDescontoTotalElemento = item.querySelector(".SalvoItem > span > p");
    const valorDescontoTotal = valorTotal - desconto;
    valorDescontoTotalElemento.textContent = `R$ ${valorDescontoTotal.toFixed(2)}`;
});