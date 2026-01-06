///Criando constantes das categorias dos gastos(Constante para eles nunca mudarem)!
const CATEGORIA_GASOLINA = "Gasolina";
const CATEGORIA_LANCHE = "Lanche";
const CATEGORIA_MANUTENCAO = "Manutenção";

///Criando constantes das categorias dos ganhos(Constante para eles nunca mudarem)!
const CATEGORIA_SALARIO = "Salário";
const CATEGORIA_ENTREGAS = "Entregas";
const CATEGORIA_EXTRAS= "Extras";

///Criando a váriavel do saldo(Váriavel porque ele vai sempre mudar).
let saldoAtual = 0;

atualizarSaldo();

///Criando função para exibir saldo atual na tela
function atualizarSaldo(){
    let saldoTela = document.getElementById("campo-saldo");
    saldoTela.textContent = saldoAtual;
}

///Criando lista para armazenar os gastos e ganhos!
let extrato = [];

///Criando função para ler o extrato
function verExtrato(){
    for (let i = 0; i < extrato.length; i++){
    console.log(`Extrato: R$${extrato[i].reais}, ${extrato[i].tipo}`);
    }
}


///Criando função para limpar as caixas depois de gravar os dados

function limparDados(){
    document.getElementById("valor").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("descricao").value = "";
}

///Criar função para filtrar dados
function calcularTotalPorCategoria(categoriaAlvo) {
    let totalCategoria = 0;
    for(let t = 0; t < extrato.length; t++) {
        if (extrato[t].tipo === categoriaAlvo) {
            totalCategoria += extrato[t].reais;
        }
    }
    if (totalCategoria > 0){
        console.log(`Total ganho em ${categoriaAlvo}: R$ ${totalCategoria}`);
    } else {
        console.log(`Total gasto em ${categoriaAlvo}: R$ ${totalCategoria}`);
    }   
}

///Função para somar tudo

function exibirResumo(){
    let totalEntradas = 0;
    let totalSaidas = 0;
    let totalResumo = 0
    for (let r = 0; r < extrato.length; r++) {
        if (extrato[r].reais > 0){
            totalEntradas += extrato[r].reais;
            totalResumo += extrato[r].reais
        } if (extrato[r].reais < 0){
            totalSaidas += extrato[r].reais;
            totalResumo += extrato[r].reais;
        }
    }
    console.log("!===== RESUMO GERAL =====!");
    console.log(`Saldo total: R$${totalResumo}`);
    console.log(`Entradas: R$${totalEntradas}`)
    console.log(`Saídas: R$${Math.abs(totalSaidas)}`);
}       

///Criando uma função para adicionar o ganho!
function adicionarGanho(valor, categoria) {
    ///O saldo atual recebe o valor inserido!
    saldoAtual = saldoAtual + valor;
    ///Avisar no console a opreção!
    console.log("Opa, entrou dinheiro!");
    console.log(`Valor: R$${valor}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`O saldo atual é de R$ ${saldoAtual}`);
    console.log("-----------------------------");
    ///adicionar no extrato o ganho!
    extrato.push({reais: valor,
        tipo: categoria
    })
    salvarNoNavegador();
    // 1. Pega a lista que está no HTML
    let listaNoHtml = document.getElementById("lista-extrato");

    // 2. Cria um item novo (li)
    let itemNovo = document.createElement("li");

    // 3. Escreve o texto dentro do item
    itemNovo.textContent = `Ganho: R$ ${valor} - ${categoria}`;

    // 4. Coloca o item dentro da lista
    listaNoHtml.appendChild(itemNovo);
    
    atualizarSaldo();
}

function adicionarGasto(valor, categoria){
    saldoAtual = saldoAtual - valor;
    console.log("Opa, saiu dinheiro!");
    console.log(`Valor: R$${valor}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`O saldo atual é de R$ ${saldoAtual}`);
    console.log("-----------------------------");
    extrato.push({
        reais: -valor,
        tipo: categoria
    })
    salvarNoNavegador();
    if (saldoAtual <= 0) {
        console.log('Saldo ficou negativo!');
        console.log("-----------------------------");
    }
    let listaNoHtml = document.getElementById("lista-extrato");
    let itemNovo = document.createElement("li");
    itemNovo.textContent = `Gasto: R$ ${valor} - ${categoria}`;
    listaNoHtml.appendChild(itemNovo);
    atualizarSaldo();
}

console.log("=== RELATÓRIOS ===");
verExtrato(); // Mostra tudo
calcularTotalPorCategoria(CATEGORIA_GASOLINA); // Deve mostrar o total negativo da gasolina
calcularTotalPorCategoria(CATEGORIA_SALARIO); // Deve mostrar o total positivo do salário
exibirResumo();

///Criando função de salvar dados
function salvarDados(){
    let valorDigitado = Number(document.getElementById("valor").value);
    let categoriaDigitada = document.getElementById("categoria").value;
    let descricaoDigitada = document.getElementById("descricao").value;
    let tipoDigitado = document.getElementById("tipo").value;
    if (tipoDigitado === "entrada") {
        adicionarGanho(valorDigitado, categoriaDigitada);
    } else {
        adicionarGasto(valorDigitado, categoriaDigitada);
    }
    limparDados();
}

function salvarNoNavegador() {
    // 1. Transforma a lista 'extrato' em texto
    let textoParaSalvar = JSON.stringify(extrato);
    
    // 2. Guarda no navegador com o nome 'meuExtratoFinanceiro'
    localStorage.setItem("meuExtratoFinanceiro", textoParaSalvar);
}

function carregarDados(){
    let textoSalvo = localStorage.getItem("meuExtratoFinanceiro");

    if (textoSalvo) {
        extrato = JSON.parse(textoSalvo);
    }

    for (let i = 0; i < extrato.length; i++) {
        saldoAtual += extrato[i].reais;
        let listaNoHtml = document.getElementById("lista-extrato");
        let itemNovo = document.createElement("li");
        if (extrato[i].reais > 0) {
            itemNovo.textContent = `Ganho: R$ ${extrato[i].reais} - ${extrato[i].tipo}`;
        } else {
            itemNovo.textContent = `Gasto: R$ ${Math.abs(extrato[i].reais)} - ${extrato[i].tipo}`;
        }
        
        listaNoHtml.appendChild(itemNovo);
    }
    atualizarSaldo();
}  

carregarDados();
