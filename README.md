# Dragon Hunter - Personagem RPG

Projeto de página estática que apresenta o personagem original **Jace Drasnia Hendrickson** e suas diferentes aparências, inspirado em um codex medieval com toques futuristas. O site funciona como um carrossel full screen, permitindo navegar entre as variações do personagem e acessar materiais adicionais hospedados no Notion.

## ✨ Principais recursos
- Layout responsivo em tela cheia com tipografia temática (_MedievalSharp_ + _Montserrat_)
- Carrossel com transições suaves controladas em JavaScript
- Indicadores visuais (setas, dots e contador numérico) sincronizados com o estado do carrossel
- Botões de ação para saber mais sobre cada forma do personagem

## 🛠️ Tecnologias utilizadas
- **HTML5** para a estrutura do conteúdo
- **CSS3** para estilização, animações e responsividade
- **JavaScript Vanilla** para o comportamento do carrossel
- **Google Fonts** para carregar _MedievalSharp_ e _Montserrat_

## 📁 Estrutura de pastas
```
Site/
├── Styles.css      # Estilos globais e do carrossel
├── index.html      # Estrutura principal do site
├── scripts.js      # Lógica de navegação entre as aparências
└── img/            # Imagens utilizadas no carrossel
```

## ▶️ Como executar
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` diretamente no navegador **ou** utilize a extensão "Live Server" (VS Code) para recarregamento automático.
3. Garanta que a pasta `img/` permaneça no mesmo nível de `index.html`, pois as imagens são referenciadas por caminho relativo.

## 🔧 Personalização
- **Adicionar novas formas**: duplique um bloco `.item` em `index.html`, atualize imagem, textos e _link_.
- **Alterar visual**: ajuste cores, tipografia ou dimensões em `Styles.css`.
- **Comportamento do carrossel**: edite `scripts.js` para incluir autoplay, tempo de transição ou novos indicadores.

## ✅ Próximos passos sugeridos
1. Ajustar a responsividade para telas menores (atualmente o layout é otimizado para desktop).
2. Implementar autoplay com pausa ao interagir nos botões.
3. Adicionar testes de acessibilidade (foco visível, textos alternativos descritivos, etc.).

Sinta-se à vontade para evoluir o projeto e expandir o universo do personagem!
