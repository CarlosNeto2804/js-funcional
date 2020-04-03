/**
 * Imutabilidade: Os valores das variaveis não devem ser alterados
 * Funções Puras: Funções que sempre ao fornecer um parametro x deve sempre devolver um y como resposta e essas funções não modificam seus parametros
 * 
 * @example
 * //função que soma dois inteiros
 * ( x, y )=> x + y; 
 */

// Adicionando um novo pais a uma coleção
const Countries = require('../db/country');
const new_country = {
    country:'Meu Pais',
    abbr:'MP'
}
/**
 * - O método irá adicionar um novo elemento a coleção Mutando seu valor.
 * - Ao fazer isso violamos dois conceitos da Programação Funcional: a imutabilidade e a definição das funções pura
 */
const add = (array, element) => {
    //podemos utililizar o metodo push();
    array.push(element);
    console.log(array[array.length-1] );//{ country: 'Meu Pais', abbr: 'MP' }
}
// add(Countries, new_country);
// uma forma de contornar essa é usar o metodo concat()
// que concatena valores em uma coleção e retorna uma nova coleção
// sem alterar o valor da primeira
const pure_add = (array,element)=>{
    const new_array = array.concat(element);
    console.log(array[array.length-1]);//{ country: 'Zimbabwe', abbr: 'ZW' }
    console.log(new_array[new_array.length-1]);//{ country: 'Meu Pais', abbr: 'MP' }
    return new_array;
    
}
const new_collection = pure_add(Countries,new_country)