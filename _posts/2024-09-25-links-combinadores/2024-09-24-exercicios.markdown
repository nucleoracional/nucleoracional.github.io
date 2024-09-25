---
layout: post
title: “exercicios links”
category: html5
---  
&int;&int;  
---  

<div id="top">Topo da página</div>   
<br>  

<a href="#descer">&downarrow; Parte inferior da Página</a>  
# Links  
sintaxe: <a href="https://www.google.com">site</a>
## alguns atributos: 
**href** = Identifica o ***URI***(Uniform Resource Identifier) no qual é o nosso endereço na web(O Local que está hospedado ou armazenado o documento que será abertoquando o link for clicado). hypertext referênce &rightarrow; Faz o conteúdo apontar para o site. 

<a href="www.google.com">site da google</a>


## Baixar arquivo  na internet  

<a href="https://mirror.clarkson.edu/linuxmint-images/stable/22/linuxmint-22-xfce-64bit.iso">baixar linux mint S.O</a>

## Imagem como link
  ```html
<a href="https://www.google.com" ><img src="/ginasio_ibirapuera-small.jpg" alt="Descrição da imagem" > link</a>
```  
##  Abrir link em nova aba do navegador:  
```html
<a href="https://www.setacursos.com.br" target="_blank">Entrar em setacursos</a>
```  
## Criando um link para um endereço de e-mail:
```html
<a href="mailto:clarcksetacursos@gmail.com">Entrar em setacursos</a>
```  
```html
<a href="tel:+5511940092529">+55 (11)940092529</a>
```  
## Criando um link para outra seção na mesma página:  

```html
<a href="#top">^ Voltar para o topo da Página</a>
```  
<a href="#tops">^ Voltar para o topo da Página</a>




<div id="descer"></div>  



--- 
## Vamos criar um link para usar JavaScript   

<a href=" javascript:alert('Olá mundo novamente');">Clique aqui para executar a caixa de diálogo</a>   

## Para o CSS :
```css  
Temos as configurações padrões(default)  
a:link, a:visited {
  color: (internal value);
  text-decoration: underline;
  cursor: auto;
}

a:link:active, a:visited:active {
  color: (internal value);
}
```
<style>


a:link:active, a:visited:active {
  color: (internal value);
}

</style>