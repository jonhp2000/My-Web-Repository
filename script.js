const messages = [
  [
    "Não sabendo que era impossível foi lá e fez.",
    "O segredo de progredir é começar",
    "A persistência é o caminho do êxito",
  ],
  [
    "Uma curva na estrada não é o fim do caminho, a não ser que você decida não virar",
    "Corra, viva, sonhe e alcance!",
    "Um dia que começa agradecido termina realizado.",
  ],
  [
    "Quando você deseja o bem, o bem te deseja também.",
    "Insista, persista e nunca desista",
    "Decida onde quer chegar e não pare até conseguir",
  ],
];

let index = 0;
let string = messages[0] + "\n\n";
let array = [messages[1], messages[2]];
let index2 = Math.floor(Math.random() * 2);

string += array[index2] + "\n\n";
array.splice(index2, 1);
string += array[0];

console.log(string);
