# 💰 Minha Calculadora Financeira

> Status: 🚧 Em desenvolvimento

Uma aplicação web prática para controle de finanças pessoais. Este projeto foi desenvolvido para consolidar conhecimentos em lógica de programação, manipulação de DOM e persistência de dados no navegador.

## 🎯 Objetivo
O objetivo principal deste projeto é criar uma ferramenta simples onde o usuário possa registrar suas entradas (ganhos) e saídas (gastos), visualizando o saldo atualizado em tempo real. O projeto faz parte da minha jornada de aprendizado em Análise e Desenvolvimento de Sistemas.

## 🚀 Funcionalidades Atuais

- **Registro de Transações:** Adicionar valores de "Entrada" ou "Saída" com descrição e categoria.
- **Cálculo Automático:** O saldo é atualizado instantaneamente a cada nova transação.
- **Histórico (Extrato):** Listagem visual de todas as movimentações adicionadas.
- **Persistência de Dados:** Uso de `LocalStorage` para que os dados não se percam ao fechar ou atualizar a aba do navegador.
- **Relatórios no Console:** Funções internas (`verExtrato`, `exibirResumo`) para análise de dados via console do navegador (DevTools).

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da aplicação.
* **CSS3:** Estilização responsiva e design limpo (layout centralizado, botões interativos, sombras).
* **JavaScript (ES6+):**
    * Manipulação do DOM.
    * Arrays e Objetos para gerenciamento do estado.
    * JSON e LocalStorage para salvar dados.
    * Lógica condicional para tratamento de saldo positivo/negativo.

## 📂 Como rodar o projeto

1. Clone este repositório:
```bash
git clone [https://github.com/SEU-USUARIO/nome-do-repositorio.git](https://github.com/SEU-USUARIO/nome-do-repositorio.git)
```

## 🔮 Próximos Passos (Roadmap)

Como o projeto está em evolução contínua, as próximas atualizações visam:

- [ ] **Padronização:** Transformar o campo de entrada "Categoria" em um menu de seleção (`<select>`) baseado nas constantes do código.
- [ ] **Funcionalidade:** Adicionar um botão de "Excluir" para remover transações incorretas do extrato.
- [ ] **Visualização:** Implementar gráficos visuais para análise de gastos (Ex: Pizza ou Barras).
- [ ] **UX (Experiência do Usuário):** Criar alertas visuais na tela quando o saldo ficar negativo, substituindo os avisos que hoje aparecem apenas no console.
