# 🛸 The Rick and Morty Characters

Aplicação web interativa para exploração dos personagens do universo **Rick and Morty**, desenvolvida com **HTML5**, **CSS3** e **JavaScript Vanilla**, integrada à **Rick and Morty API**[cite: 16, 17, 18].

![Status]
![HTML5]
![CSS3]
![JavaScript]

---

## 📌 Sobre o Projeto

O **The Rick and Morty Characters** é uma plataforma que consome a API oficial do *Rick and Morty* para listar todos os personagens da série[cite: 16, 17], permitindo navegar por páginas de forma rápida[cite: 16], visualizar detalhes de cada personagem em modais interativos[cite: 16] e otimizar requisições utilizando cache em memória[cite: 16].

---

## ✨ Funcionalidades

- 🛸 **Consumo da Rick and Morty API:** Busca dinâmica da lista completa de personagens diretamente do endpoint público[cite: 16].
- ⚡ **Sistema de Cache Local:** Armazenamento das páginas já visitadas em memória para evitar requisições repetidas e acelerar a navegação[cite: 16].
- 🗂️ **Otimização de Renderização:** Uso de `DocumentFragment` para renderizar os cards dos personagens no DOM de uma só vez[cite: 16].
- 🪟 **Modal de Detalhes:** Clique em qualquer card para abrir um modal completo exibindo foto, nome, status, espécie, gênero e origem do personagem[cite: 16, 17].
- ⏩ **Paginação Ativa:** Botões de navegação (*Anterior* / *Próxima*) com desabilitação e ocultação dinâmica nos limites das páginas[cite: 16, 17].
- 📱 **Menu Mobile Responsivo:** Header adaptável com botão estilo *hambúrguer* para telas menores e links para redes sociais[cite: 15, 17, 18].

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página, header, modal e footer.
- **CSS3:** Estilização visual, fontes personalizadas, destaques em verde néon, modais e responsividade com *Media Queries*[cite: 18].
- **JavaScript (ES6+):** Requisições assíncronas com `fetch` e `async/await`, manipulação dinâmica do DOM, cache em objeto JS e controle de navegação[cite: 15, 16].
- **Rick and Morty API:** Integração com o endpoint REST `https://rickandmortyapi.com/api/character`[cite: 16].

---

## 🛠️ Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Hallowedss/rick-and-morty.git](https://github.com/Hallowedss/rick-and-morty.git)
