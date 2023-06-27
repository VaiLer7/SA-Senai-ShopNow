//Função de click do botão para arrastar o scroll

const itemWrapper = document.querySelector('.ItemWrapper2');
const voltarBtn = document.querySelector('.Itens2>button:nth-child(1)');
const avancarBtn = document.querySelector('.Itens2>button:nth-child(2)');

voltarBtn.addEventListener('click', () => {
    itemWrapper.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});
avancarBtn.addEventListener('click', () => {
    itemWrapper.scrollBy({
        left: +300,
        behavior: 'smooth'
    });
});




//Calculo de preço&desconto das classes Item2 e Item3

// Obter todos os elementos com a classe "ItemBaixo" e iterar sobre cada elemento
document.querySelectorAll('.ItemBaixo').forEach((itemBaixoElement) => {
    const TextoValorTotal = itemBaixoElement.querySelector('.ItemPrecoDesconto strike');
    const TextoDesconto= itemBaixoElement.querySelector('.ItemPrecoDesconto p');

    const ValorTotal = parseFloat(TextoValorTotal.textContent.replace(/[^0-9,-]+/g,"").replace(",", "."));
    var Desconto = parseFloat(TextoDesconto.textContent.replace(/[^0-9,-]+/g,""));
    if(Desconto<0){
        Desconto = (Desconto * -1);
    }

    const PrecoFinal = ValorTotal - (ValorTotal * (Desconto / 100));
    const PrecoFinalFormatado = `R$ ${PrecoFinal.toFixed(2)}`;

    itemBaixoElement.querySelector('.ItemPrecoDescontoTotal').textContent += ' ' + PrecoFinalFormatado;
});




//Calculo de Avaliação de estrelas

// Seleciona todos os elementos com a classe ".Item2Cima" e itera sobre cada um deles
document.querySelectorAll('.ItemCima').forEach((itemCimaElement) => {
    const [valor] = itemCimaElement.querySelector('div>p:nth-child(3)').textContent.split('/');

    const porcentagem = 100 - ((valor / 10) * 100);

    itemCimaElement.querySelector('.EstrelasCover').style.height = `${porcentagem}%`;
});




//Calculo de preço&desconto da classe Item1

// itera sobre cada elemento com classe "Item1"
document.querySelectorAll(".Item1").forEach(item => {
    const descontoPorcentagem = item.querySelector(".DescontoItem > div > p").textContent.trim();
    const porcentagem = parseFloat(descontoPorcentagem.split(" ")[0]);
    const valorTotal = parseFloat(item.querySelector(".SalvoItem > span > strike").textContent.trim().replace("R$ ", "").   replace(".", "").replace(",", "."));
    const desconto = (porcentagem / 100) * valorTotal;
    const valorDescontoElemento = item.querySelector(".SalvoItem > div > h5:nth-of-type(2)");
    valorDescontoElemento.textContent = `R$ ${desconto.toFixed(2)}`;
    const valorDescontoTotalElemento = item.querySelector(".SalvoItem > span > p");
    const valorDescontoTotal = valorTotal - desconto;
    valorDescontoTotalElemento.textContent = `R$ ${valorDescontoTotal.toFixed(2)}`;
});

function FuncaoVoltar(){
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}