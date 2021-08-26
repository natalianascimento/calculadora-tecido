import { EscolheModelo } from "./Controler/EscolheModelo.js";

const modeloEscolhido = new EscolheModelo();
const resultado = modeloEscolhido.escolheModelo("Saia Gode", 68, 70);

console.log("Para esta peça você precisará de ", resultado, "centimetros de tecido.");