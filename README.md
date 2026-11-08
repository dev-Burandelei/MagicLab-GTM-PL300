# 🧪 MagicLab — E-commerce, GTM, GA4 & Power BI

O **MagicLab** é um projeto prático de desenvolvimento de um marketplace geek, criado para explorar a integração entre desenvolvimento web, mensuração de dados e Business Intelligence.

A proposta é simular uma loja virtual de produtos relacionados à cultura geek, com foco em impressão 3D, Trading Card Games (TCG) e artesanato geek. Além da construção da interface e das funcionalidades de navegação, o projeto está sendo desenvolvido como ambiente de aprendizado e experimentação com **Google Tag Manager (GTM), Google Analytics 4 (GA4) e Microsoft Power BI**.

## 🎯 Objetivos do projeto

- Desenvolver uma aplicação web que simule a experiência de um e-commerce.
- Implementar a mensuração de interações dos usuários com produtos e funcionalidades da loja.
- Explorar o Google Tag Manager para gerenciamento de tags e eventos.
- Utilizar o Google Analytics 4 para acompanhar o comportamento dos usuários.
- Trabalhar com coleta, organização, modelagem e visualização de dados no Power BI.
- Aplicar conceitos de análise de dados e Business Intelligence em um cenário próximo ao de um negócio real.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilização e layout responsivo |
| JavaScript | Funcionalidades e interatividade |
| Google Tag Manager | Gerenciamento de tags e rastreamento |
| Google Analytics 4 | Mensuração de eventos e comportamento |
| Microsoft Power BI | Análise e visualização de dados |

## 🛍️ Funcionalidades implementadas

- Catálogo de produtos com categorias de impressão 3D, TCG e crochê geek.
- Filtragem de produtos por categoria.
- Exibição de informações e preços.
- Carrinho de compras interativo.
- Adição e remoção de produtos.
- Cálculo automático de quantidades e valores.
- Interface responsiva para diferentes tamanhos de tela.

O checkout é demonstrativo e não realiza transações financeiras.

## 📊 Mensuração e Analytics

Uma das principais propostas do MagicLab é aplicar conceitos de Web Analytics em um cenário de e-commerce.

Foi implementada uma estrutura inicial de eventos utilizando o `dataLayer`, preparando a aplicação para o gerenciamento de tags e a integração com ferramentas de análise.

### Eventos implementados

| Evento | Descrição |
|---|---|
| `view_item_list` | Visualização de listas de produtos |
| `add_to_cart` | Adição de produtos ao carrinho |
| `remove_from_cart` | Remoção de produtos do carrinho |
| `view_cart` | Visualização do carrinho |
| `begin_checkout` | Início do checkout demonstrativo |

Os eventos utilizam uma estrutura de dados inspirada no modelo de e-commerce do GA4, incluindo informações como identificador, nome, categoria, preço e quantidade dos produtos.

## 📈 Próximas etapas

O projeto está em desenvolvimento e prevê a evolução das seguintes frentes:

- **Google Tag Manager:** configuração e gerenciamento das tags de mensuração.
- **Google Analytics 4:** acompanhamento de eventos, comportamento dos usuários e indicadores de e-commerce.
- **Power BI:** integração e preparação dos dados para construção de dashboards.
- **Business Intelligence:** análise de indicadores como visualizações de produtos, interações, adições ao carrinho e conversões.
- **Otimização:** aprimoramento da experiência do usuário e evolução da estrutura da aplicação.

## 🎓 Contexto de aprendizado

O MagicLab também funciona como um laboratório de estudos para aprofundar conhecimentos em Web Analytics, Marketing Digital e Business Intelligence, com foco na preparação para a certificação **Microsoft PL-300 — Power BI Data Analyst Associate**.

A ideia é percorrer um fluxo prático que conecta a interação do usuário com a aplicação à coleta, organização, análise e visualização de dados.

## 🚀 Executando o projeto

Atualmente, o projeto utiliza tecnologias front-end e não exige instalação de dependências.

1. Clone o repositório:

   ```bash
   git clone https://github.com/dev-Burandelei/MagicLab-GTM-PL300.git
   ```

2. Acesse a pasta:

   ```bash
   cd MagicLab-GTM-PL300
   ```

3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server do VS Code.

---

**Status:** Em desenvolvimento.

Projeto desenvolvido para fins de aprendizado, experimentação e construção de portfólio em Desenvolvimento Web, Web Analytics e Business Intelligence.
