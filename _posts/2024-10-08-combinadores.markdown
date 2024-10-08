---
layout: post
tile: "Compreeensão de conceitos - nível estável"
category: html5 conceitos
date: 2024-10-05 13:55:00 -03:00
---

# Combinadores  

Sãs as diferentes maneiras de **combinar** os seletores  

Temos relação entre:  
pai e filho (**parent** and **child**)  
Irmãos(**simblings**)    


## parent e child  
*   Combinador em grupo  
    +       seletor seletor
            
    ```css
            div  p { /*Deve haver espaço entre os dois seletores*/
            color: green; 
        }
    ```  

Usamos **espaço** para separar o seletor pai e o seletor descendente.
Aqui serão estílizado todos os elementos **p** que sejam descendentes de uma **div**  (filhos,netos,bisnetos ...)
        
*   Combinador filho direto  
    +   seletor > seletor
    ```css
        div > p {
            color: green;
        }
    ```  

    +   São elementos com apenas uma "geração" ou
        primeiro nível de aninhamento.  
        Neste exemplo todos os elementos **`<p>`** que forem descendentes diretos (sem contar os outros descendentes: netos ,bisnetos etc.) de uma **`<div>`** terão como cor de texto a cor *green*;
*   Combinador descendente    

## simblings  
*   irmão geral  

*   irmão adjacente  


## Outros combinadores  
Encadeamento de Seletores  

seletorseletor  
html
```html 
    .
    .
    . 
    <div class="minhaClasse">
        <p>algum texto</p>
    </div>

    <div class="outraClasse">
        <p>algum texto</p>
    </div>
```
css
```css
    div.minhaClasse {
        color: yellow;
    }
```
Todos os elementos div que tiverem encadeados com a classe .**minhaClasse** terão texto em cor yellow; 
*   Não deve haver espaço entre o encademanto.
*   Ao usar o seletor de elemento, ele deve ser o primeiro e depois pode-mos usar classes, ids e outros.  

erro: .minhaClasseh1  
certo: h1.minhaClasse  
certo: h1#minhaId  


**Combinação de combinações :**  
 
Podemos fazer vários tipos de combinação:   
mais um exemplo:  
```css
    div .h1.minhaClasse
```  

