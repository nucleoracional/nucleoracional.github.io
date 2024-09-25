---
layout: post
title: "seletores e combinadores" 
category: html5
author: "Clayton"
date: 2024-09-25 -0300
---  

## Combinadores CSS  

Um combinador é algo que explica o relacionamento entre os seletores.  

Um seletor CSS pode conter mais de um seletor simples. Entre os seletores simples, podemos incluir um combinador.  

Existem quatro combinadores diferentes em CSS:  

*   seletor descendente (espaço)
*   seletor de crianças (>)
*   seletor de irmãos adjacentes (+)
*   seletor geral de irmãos (~)  


## Seletor de Descendentes  

O seletor descendente corresponde a todos os elementos que são descendentes de um elemento especificado.  

O exemplo a seguir seleciona todos os elementos `<p>` dentro dos elementos `<div>`:  

```html  
<!DOCTYPE html>
<html>
<head>
<style>
div p {
  background-color: yellow;
}
</style>
</head>
<body>

<h2>Seletor descendente</h2>

<p>Os seletores descendentes correspondem à todos os elementos que são descendentes de um elemento especificado.</p>

<div>
  <p>Paragráfo 1 dentro  div.</p>
  <p>Paragráfo 2 dentro da div.</p>
  <section><p>Paragráfo 3 dentro da div.</p></section>
</div>

<p>Paragráfo 4. Não está dentro de uma div .</p>
<p>Paragráfo 5. Não está dentro de uma div .</p>

</body>
</html>
```  

## Seletor de crianças (>)  

O seletor filho seleciona todos os elementos que são filhos de um elemento especificado.

O exemplo a seguir seleciona todos os elementos `<p>` que são filhos de um elemento `<div>`:  

```html 
<!DOCTYPE html>
<html>
<head>
<style>
div > p {
  background-color: yellow;
}
</style>
</head>
<body>

<h2>Seletor Criança</h2>

<p>O Seletor child ou criança (>) seleciona todos os elementos que são filhos de um elemento especifico.</p>

<div>
  <p>Paragráfo 1 está dentro de uma div.</p>
  <p>Paragráfo 2 está dentro de uma div.</p>
  <section>
    <!-- Não é filho mas é descendente-->
    <p>Paragráfo 3 está dentro de uma div(Dentro de um elemento section).</p>
  </section>
  <p>Paragráfo está dentro de uma div.</p>
</div>

<p>Paragráfo 5. Não está dentro de uma div.</p>
<p>Paragráfo 6. Não está dentro de uma div.</p>
</body>
</html>
```  

## Seletor de Irmãos Adjacentes (+)  

O seletor irmão adjacente é usado para selecionar um elemento que está diretamente depois de outro elemento específico.  

Elementos irmãos devem ter o mesmo elemento pai, e "adjacente" significa "imediatamente seguinte".  

O exemplo a seguir seleciona o primeiro elemento `<p>` que é colocado imediatamente após os elementos `<div>`


```html
<html>
<head>
<style> 
div ~ p {
  background-color: yellow;
}
</style>
</head>
</body>
</html> 
``` 
##  Seletor Geral de Irmãos  

Seletor Geral de Irmãos (~)
O seletor geral de irmãos seleciona todos os elementos que são irmãos próximos de um elemento especificado.  

O exemplo a seguir seleciona todos os elementos `<p>` que são irmãos próximos dos elementos `<div>`: 
```html
<html>
<head>
</head>
<body>
<p>Paragráfo 1.</p>
<div>
  <p>Paragráfo 2.</p>
</div>
<p>Paragraph 3.</p>
<code>Mesmo Código.</code>
<p>Paragráfo 4.</p>

</body>
</html>
```  

###  Exercício:  
    1. Altere a cor de todos os elementos `<p>`, que são descendentes dos elementos `<div>`, para "vermelho".  
```html     
<style>  
{
  color: red;
}

</style>

<body>

<div>
  <p>Este é um parágrafo.</p>
  <p>Este é um parágrafo.</p>
</div>
<p>Este é um parágrafo.</p>
<p>Este é um parágrafo.</p>

</body>   
```
    2.  Altere a cor de todos os elementos `<p>`, que são filhos imediatos dos elementos `<div>`, para "vermelho".

```html
  <style>
 /*AQUI*/{
  color: red;
}
</style>

<body>

<div>
  <p>Este é um parágrafo..</p>
  <p>Este é um parágrafo..</p>
</div>
<p>Este é um parágrafo..</p>
<p>Este é um parágrafo..</p>

</body>
```  
    3.  Altere a cor do primeiro elemento `<p>` que está diretamente depois de um elemento `<div>` para "vermelho".
```html 
<style>
 /*AQUI*/{
  color: red;
}
</style>

<body>
<div>
  <p>Este é um parágrafo..</p>
  <p>Este é um parágrafo..</p>
</div>
<p>Este é um parágrafo..</p>
<p>Este é um parágrafo..</p>

</body>  
```  
    4.  Altere a cor dos elementos `<p>` que são irmãos de um elemento `<div>` para "vermelho".

```html 
<div>
<p>Este é um parágrafo..</p>
<p>Este é um parágrafo..</p>
</div>
<p>Este é um parágrafo..</p>
<p>Este é um parágrafo..</p>
```  
