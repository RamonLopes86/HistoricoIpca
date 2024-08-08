import express from "express";

const app = express()


import { exibirColecao , buscarId , buscarAno , calculoIPCA  } from "./camadaServico.js";






app.get('/colecao' , (req , res)=>{

    const valor = exibirColecao()

   
    
    res.json(valor)


})





app.get('/rotaAno/:ano' , (req, res)=>{


    const ano = Number(req.params.ano)

    const anoBusca = buscarAno(ano)

    res.json(anoBusca)

})


app.get('/rotaId/:id' , (req, res)=>{


   const id = Number(req.params.id)

   const funcaoArray = buscarId(id)

   

    if(isNaN(id)){

        res.status(404).send('caractere inválido , coloque um numero')
    
    
    
    }else if(!id){

        res.status(400).send("ID NAO FORNECIDO")
    
      
    }else if(id <=0 || id>=102){

            res.status(404).send('range fora , favor aplicar um numero entre 1 e 101')    

    }else {

        res.json(funcaoArray)

    }


})



        

app.get('/colecao/calculo' , (req , res)=>{

    const valor = Number(req.query.valor)
    const mesInicial = Number(req.query.mesInicial)
    const anoInicial = Number(req.query.anoInicial)
    const mesFinal = Number(req.query.mesFinal)
    const anoFinal = Number(req.query.anoFinal)



   

 
   if(isNaN(valor) || isNaN(mesInicial) || isNaN(anoInicial) || isNaN(mesFinal) || isNaN(anoFinal)){

            res.status(400).send('preencha os campos corretamente')

    }else if(mesInicial < 1 || mesFinal < 1 || mesInicial > 12 || mesFinal > 12){

        res.status(400).send('coloque um mes correto')
    }else if(anoInicial < 2015 || anoInicial > 2023 || anoFinal < 2015 || anoFinal > 2023){

        res.status(400).send("dados incorretos - coloque um ano entre 2015 e 2022")
    }else{

        const calculo = calculoIPCA(valor , mesInicial , anoInicial , mesFinal , anoFinal)

        const calculoAjustado = calculo.toFixed(2)

        res.json({MSG:calculoAjustado})

    }

})

  


app.listen(8080 , ()=>{


    console.log('o servidor foi iniciado')

})
