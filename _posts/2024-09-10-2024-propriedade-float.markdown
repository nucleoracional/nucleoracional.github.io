---
layout: post
title:  "Propriedade float"
date:   2024-09-09 05:28:11 -0300
category: html5
author: "Clarck"
---



<img src="/assets/images/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpeg" width="280">


A propriedade float especifica se um elemento deve flutuar para a esquerda, para a direita ou não flutuar atrávez de seu contêiner.  
 *Nota: Elementos absolutamente posicionados ignoram o float*

***Sua função é envolver o texto em um elemento especifíco.***

A expressão "dentro de seu contêiner" se refere ao contêiner pai do elemento que está sendo flutuado. Vamos detalhar o sig

nificado e o comportamento da propriedade float para clarificar isso.  


Propriedade Float e Clear
Estruturando e flutuando elementos

Algo comum ao lermos alguma matéria em revistas ou jornais é uma imagem relacionada ao texto estar posicionada de um lado e, o conteúdo textual contornar a imagem. Algo parecido com isso:
Representação de uma simulação de um layout clássico de revistas e jornais com uma foto do lado esquerdo e texto ao redor dela

E se precisássemos desenvolver um template parecido com a imagem acima. Provavelmente começaríamos com um código HTML assim:

    <div>
      <figure>
      	<img src="img/imagem.jpg" alt="Imagem Xis">
      	<figcaption>Legenda da imagem"</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugit, ipsam reprehenderit porro aperiam esse quibusdam ratione excepturi amet est.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugit, ipsam reprehenderit porro aperiam esse quibusdam ratione excepturi amet est.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugit, ipsam reprehenderit porro aperiam esse quibusdam ratione excepturi amet est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugit, ipsam reprehenderit porro aperiam esse quibusdam ratione excepturi amet est</p>
    </div>

O que teríamos seria algo assim:
Representação mostrando uma imagem no topo e um bloco de texto abaixo dela

Por que isso? O que acontece é que a tag figure ocupa toda a largura da página e entra no empilhamento do documento/página, o que não permite que outros elementos apareçam ao seu lado.

É aí que entra o float. Em resumo, essa propriedade permite que tiremos um elemento do fluxo vertical da página e automaticamente faz com que o conteúdo que venha a seguir flutue ao seu redor.

O CSS ficaria assim:

    figure {
      float: left;
      margin: 0 10px 10px 0;
    }

O que fizemos foi flutuar a tag figure para o lado esquerdo e, colocar uma margem inferior e direita para que os parágrafos não fiquem grudados na imagem. Com isso conseguiríamos reproduzir um layout igual ao da primeira imagem. Poderíamos até variar e colocar nossa imagem do lado direito:

    figure {
      float: right;
      margin: 0 0 10px 10px;
    }

Aqui mudamos a direção que a tag figure vai flutuar e alteramos a margem do lado direito para o lado esquerdo. E teríamos um resultado assim:
Representação simulando um layout clássico de revistas e jornais com uma foto do lado direito e texto ao redor dela
A propriedade clear

Continuando com o nosso exemplo anterior, imagine que agora precisássemos inserir um novo título com mais parágrafos abaixo da imagem. Algo parecido com isso: (para fins de exemplo, diminui o conteúdo textual ao redor da imagem)
Representação de um layout com imagem localizada no topo esquerdo com parágrafos ao redor dela e um título com mais parágrafos no fluxo da página

Para representar esse conteúdo, teríamos um HTML semelhante a esse:
```html
    <div>
      <figure>
        <img src="img/imagem.jpg" alt="Imagem Xis">
        <figcaption>Legenda da imagem"</figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugit, ipsam reprehenderit porro aperiam esse quibusdam ratione excepturi amet est.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugit, ipsam reprehenderit porro aperiam esse quibusdam ratione excepturi amet est.</p>
      <h3>Novo título</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugit, ipsam reprehenderit porro aperiam esse quibusdam ratione excepturi amet est.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugit, ipsam reprehenderit porro aperiam esse quibusdam ratione excepturi amet est.</p>
    </div>
```  

No entanto, chegaríamos num resultado assim:
Representação de um layout com imagem localizada no topo esquerdo com conteúdo textual ao redor dela

Por que isso? Como definimos que a tag figure flutuaria à esquerda, saindo assim do fluxo vertical da página, todo conteúdo que vem após ela começa a preencher o espaço ao redor da imagem. O que acontece é que os parágrafos que vem logo após a tag figure são menores que a altura da imagem, fazendo com que o título (tag h3) ao invés de ser renderizada abaixo da imagem, apareça ao lado dela e seguindo o fluxo do documento.

É aí que entra a propriedade clear. Ela tem a função de controlar o comportamento de elementos que apareçam no fluxo do documento após determinado elemento que possue a propriedade float. Em outras palavras, ela especifica se um elemento deve ser posicionado ao lado de elementos com float ou se devem ser colocados abaixo deles. A propriedade aceita 4 valores:

   * **left**: Elemento é empurrado para baixo de elementos com float left;
   * **right**: Elemento é empurrado para baixo de elementos com float  
   *   **right**;
   * **both**: Elemento é empurrado para baixo de elementos com float left ou right;
   * **none**: Elemento não é empurrado para baixo de elementos com float.

O CSS ficaria assim:
```css
    figure {
      float: left;
      margin: 0 10px 10px 0;
    }
     
    h3 { clear: both; }
    ```
    /* Pelo fato da tag figure utilizar float left, aqui também poderíamos usar clear: left; */

E com isso, conseguiríamos fazer com que o título (tag h3) fosse empurrado para baixo, sendo renderizado abaixo da tag figure e ficando igual ao layout que queríamos.
Mais exemplos

Esse foi apenas um exemplo da utilização da propriedade float. Outros casos que você pode ver em vários websites são:

### Menus de navegação

    Float usado nos itens da lista. Mais precisamente em cada li, para dispor os itens do menu na horizontal.
### Grids

    Float usado para dividir partes do grid. Por exemplo, colocar um bloco de conteúdo à esquerda e um outro bloco à direita.



## Comportamento da Propriedade float

Quando você usa a propriedade float em um elemento, aqui está o que acontece:

**1 Contêiner Pai (ou Contêiner de Bloqueio):**

* O contêiner pai é o elemento que envolve o elemento flutuante e ao qual ele está posicionado em relação.
* Esse é o elemento que determina o contexto para o deslocamento do elemento flutuante.
* O float faz com que o elemento seja deslocado para a esquerda ou direita dentro dos limites do contêiner pai.
* O contêiner pai pode ser um **&lt;div&gt;,** **&lt;section&gt;**, ou qualquer outro elemento de bloco.

**2 Flutuação:**

* Quando você aplica `float: left`; ou `float: right`; a um elemento, ele é removido do fluxo normal do documento e posicionado à esquerda ou à direita dentro do contêiner pai.
  
  O conteúdo subsequente dentro do mesmo contêiner pai fluirá ao redor do elemento flutuante. Isso significa que, se houver texto ou outros elementos após o elemento flutuante no contêiner pai, eles se posicionarão ao redor do elemento flutuante.

**3 Limites do Contêiner Pai:**

- O espaço disponível para o float é limitado ao tamanho do contêiner pai.
- Se o elemento float for maior do que o espaço disponível ou se não houver espaço suficiente, o comportamento pode ser afetado.
- O conteúdo subsequente tentará ajustar-se ao redor do elemento flutuante, mas se o elemento flutuante ocupar toda a largura disponível, o texto pode aparecer abaixo dele.

**4 Análise do Exemplo**

float: {left};
O elemento com a classe float-element é flutuado à esquerda dentro da container.
Contêiner Pai (container): O contêiner pai é um *&lt;div&gt;* com a classe container, e é o contexto onde o elemento flutuante é posicionado.
Conteúdo ao Redor: O parágrafo (com a classe content) flui ao redor do elemento flutuante. O texto começa ao lado do elemento flutuante, e se houver mais texto, ele continuará fluindo ao redor do elemento flutuante dentro dos limites do contêiner pai.

***Em Resumo***
• "Dentro de seu contêiner" refere-se ao contêiner pai do elemento flutuante.
• O elemento flutuante é posicionado à esquerda ou à direita dentro dos limites do contêiner pai.
• O conteúdo subsequente no mesmo contêiner pai se ajusta ao redor do elemento flutuante.

```html
<!DOCTYPE html>
<html lang="pt-BR">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Exemplo Float</title>
<style>
.container {
         width: 300px;
        border: 1px solid black;
      }
.float-element {
float: left;
width: 100px;
height: 100px;
background-color: lightcoral;
margin-right: 10px; /* Espaço entre o elemento flutuante e o texto */
}
.content {
background-color: lightyellow;
}
</style>
</head>
<body>
    <div class="container">
      <div class="float-element"></div>
      <p class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nullam euismod, sapien eu consequat scelerisque, urna tortor facilisis felis, vel feugiat ligula lorem eget odio.
    </p>
  </div>
</body>
</html>
```  
### Outro Exemplo:  

```html 
  <div class="pai">
	<div class="filha1">Filha 1</div>
	<div class="filha2">Filha 2</div>
	<div class="filha3">Filha 3</div>
</div>

<div class="pai">
	<div class="filha1">Filha 1</div>

	<span class="clear"></span>

	<div class="filha2">Filha 2</div>
	<div class="filha3">Filha 3</div>
</div>

<div class="pai">
	<div class="filha1">Filha 1</div>
	<div class="filha2 clear">Filha 2</div>
	<div class="filha3">Filha 3</div>
</div>

<div class="pai">
	<div class="filha1">Filha 1</div>
	<div class="filha2 clear-left">Filha 2</div>
	<div class="filha3">Filha 3</div>
</div>
```
*** Código Css***  
```css
.pai{
	margin: 10px;
}
.pai,
.filha1,
.filha2,
.filha3{
	padding: 20px;
	color: #000;
	background: gray;
	float: left;
}
.filha1{
	background: blue;
}
.filha2{
	background: red;
}
.filha3{
	background: green;
}
.filha1,
.filha2,
.filha3{
	color: #ffffff;
}
.clear{
	clear: both;
}
span{
	display: block;
}
.clear-left{
	clear: left;
}
```
> Um bloco está sem o elemento com o clear, e o outro possui.

A relação entre float e clear é bem simples, o float faz o elementos flutuarem em uma direção.

Mas em algum momento, você pode precisar interromper isso, se uma lista de elementos está com float.

Neste ponto, você pode adicionar outro elemento com a o clear, para bloquear isso.

Ou adicionar a propriedade em algum elemento já existente.

No meu exemplo, o caso de uso com um terceiro elemento, é o uso do span.

Nos demais exemplos, o objeto "filha2" recebe classes diferentes para ter o mesmo comportamento.

O clear "quebra" a sequência de floats.

Veja que usei "clear: both" e "clear: left", ou seja, quebrando em ambos os lados "both" ou apenas elementos flutuando a esquerda "left"

O "clear: right", segue a mesma ideia, mas com elementos que estejam flutuando para a direita "float: right"

Normalmente, o "clear: both" resolve o problema.

> <p style="color:tomato;"> Note que para o <strong>"clear"</strong> ter efeito, o elemento precisa ser do tipo <strong>"block level"</strong>, como é o caso nativo de uma div.

Como eu usei um span, ele é "inline level", sendo assim, precisei no css declarar que ele também será block, usando o "display: block".

Depois procure sobre elementos de block level e inline level, entender isso ajuda muito a criar um css.

<!-- 
> : **warging:** Do not push the ...
 -->

