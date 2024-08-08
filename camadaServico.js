


import historicoInflacao from "./dados.js";


// funcao para retornar toda a colecao

function exibirColecao(){


    return historicoInflacao


}


// funcao para buscar por ID


function buscarId(id){


    const filtroId =  historicoInflacao.find((historicoInflacao) =>  historicoInflacao.id === id)

    return filtroId

}


// funcao para buscar por ANO


function buscarAno(ano){


    const filtroAno = historicoInflacao.filter((historicoInflacao)=> historicoInflacao.ano === ano)

    return filtroAno

}


function calculoIPCA(valor , mesInicial , anoInicial , mesFinal , anoFinal ){

     
    let filtro_pri = historicoInflacao.find((historicoInflacao)=> historicoInflacao.mes === mesInicial && historicoInflacao.ano === anoInicial)

    let priIPCA = filtro_pri.ipca


    let filtro_seg = historicoInflacao.find((historicoInflacao)=> historicoInflacao.mes === mesFinal && historicoInflacao.ano === anoFinal)

    let segIPCA = filtro_seg.ipca


    const resultado =  valor * ( 1+ (1+(priIPCA/100)) * (1+(segIPCA/100)) )

    
   

    return resultado

   
}
   

    


   


    

 
    


   








export {exibirColecao , buscarId , buscarAno , calculoIPCA}

