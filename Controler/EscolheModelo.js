import { CalculaTamanhoTecido } from "../Model/CalculaTamanhoTecido.js";

export class EscolheModelo{
    
    constructor(){
        const modeloSelecionado = new modeloDaRoupa();
    }
    escolheModelo(modeloEscolhido){
        if(modeloEscolhido == "Saia Gode"){
            modeloSelecionado.saiaGode()
        }
        if(modeloEscolhido == "Calça"){

        }
    }
}

export class modeloDaRoupa{
    
    saiaGode(circunferenciaCintura, comprimentoDaPeca){
        const calculoTecido = new CalculaTamanhoTecido();
        const resultado = calculoTecido.saiaGode(circunferenciaCintura, comprimentoDaPeca);
        return resultado;
    }
    CalculaTamanhoTecido(manequimCliente){
        if(manequimCliente){
            //
        }
    }
}
/*A quantidade de tecido padrão para uma calça social de pessoa magra é 1,20 metros. Para uma pessoa gordinha peça 2 metros.*/