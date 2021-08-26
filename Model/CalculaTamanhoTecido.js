export class CalculaTamanhoTecido{

    margem = 20;
    
    saiaGode(circunferenciaCintura, comprimentoDaPeca){
        const raio = circunferenciaCintura / 6.28;
        const comprimentoDoTecido = raio + comprimentoDaPeca + this.margem;
        return comprimentoDoTecido;
    }
}