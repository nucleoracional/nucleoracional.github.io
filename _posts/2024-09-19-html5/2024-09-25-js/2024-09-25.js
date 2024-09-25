/* 
operadores de atribuição
+=  atribuição     
-=  subtração
*=  multiplicação
/=  divisão
%=  modulo
*/

/* let a =10;   
let b =5;
let c =a+b;
let d =c/3;
let e =d*3;
let f =e*e; */

/* console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

a+=3;    */
//concaternação
/*
numero+numero=operador aritmético ==> operador aritmetico binario
numero+string=concaternação 'juntar' ==> operador unario



let a = 2;
let b = 'hello';

console.log(a += 3); // addition
// expected output: 5

console.log(b += ' world'); // concatenation
// expected output: "hello world"


*/
/* 
console.log(a+=b) a = a + b;

console.log(b-=a) b = b-a;

console.log(a/=f) a = a/f;

console.log(d*=e) d = d*e;


 */
let n=1 + '1';
console.log(typeof n)
n=n-1;

let t ="batata";

console.log(n-t)

console.log(typeof n)

console.log(typeof(2+3+4+'5'));

console.log(typeof('5'+2+3+4));

console.log(typeof('10'-'4'-"3"-2+"5"));


let modulo = 9%2;

console.log(modulo)


/* Em computação, texto simples ou texto puro[1] é o conteúdo de um arquivo sequencial ordinário legível como material textual sem muito processamento. Texto puro é diferente do texto formatado, onde informações de estilo são incluídas e "arquivos binários" nos quais algumas porções devem ser interpretadas como objetos binários (inteiros codificados, números reais, imagens, etc.).

A codificação tradicionalmente tem sido ASCII, um de seus muitos derivados como ISO/IEC 646 e etc., ou algumas vezes EBCDIC. Codificações baseadas em Unicode como UTF-8 e UTF-16 estão gradualmente substituindo antigos derivados do ASCII limitados a códigos de 7 ou 8 bits.

Mesmo sendo um formato simples, todos os compiladores das linguagens de programação e os programas que interpretam linguagens de marcação utilizam textos planos.[2]
/*  
o termo é também usado em criptografia para se referir a qualquer informação legível ou que possa ser usada diretamente por algum dispositivo eletrônico ou programa de computação. Ao ser submetido ao processo de criptografia o texto plano é convertido em algo não-inteligível, chamado de texto cifrado. */




let p1 = '\tEm computação, texto simples ou texto puro[1] é o conteúdo de um arquivo sequencial ordinário legível como material textual sem muito processamento. Texto puro é diferente do texto formatado, onde informações de estilo são incluídas e "arquivos binários" nos quais algumas porções devem ser interpretadas como objetos binários (inteiros codificados, números reais, imagens, etc.). \n '

let p2 = '\tA codificação tradicionalmente tem sido ASCII, um de seus muitos derivados como ISO/IEC 646 e etc., ou algumas vezes EBCDIC. Codificações baseadas em Unicode como UTF-8 e UTF-16 estão gradualmente substituindo antigos derivados do ASCII limitados a códigos de 7 ou 8 bits. \n '

let p3 = '\tMesmo sendo um formato simples, todos os compiladores das linguagens de programação e os programas que interpretam linguagens de marcação utilizam textos planos.[2]  \n\n'


let p4 = '\to termo é também usado em criptografia para se referir a qualquer informação legível ou que possa ser usada diretamente por algum dispositivo eletrônico ou programa de computação. Ao ser submetido ao processo de criptografia o texto plano é convertido em algo não-inteligível, chamado de texto cifrado.  \n'

let texto = p1+p2+p3+p4

console.log(texto)

let a = 4;                                                              
let b = 8;                                                              
let metade = (1/2);            
let nome = 'Ana';                                                       
let idade = '25';

console.log(`${nome} tem ${idade} anos de idade e comeu ${metade} da pizza que tem ${b} pedaços.\n\tsabemos que metade de ${b} é igual a ${a}`)


a = a+b ; 

