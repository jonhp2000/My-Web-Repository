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

const indexFirstMessage = Math.floor(Math.random() * 3);
let string =
  messages[indexFirstMessage][Math.floor(Math.random() * 3)] + "\n\n";
let array = [];

switch (indexFirstMessage) {
  case 0:
    array = [messages[1], messages[2]];
    break;
  case 1:
    array = [messages[0], messages[2]];
    break;
  case 2:
    array = [messages[0], messages[1]];
}

const indexSecondMessage = Math.floor(Math.random() * 2);

string += array[indexSecondMessage][Math.floor(Math.random() * 3)] + "\n\n";
array.splice(indexSecondMessage, 1);
string += array[0][Math.floor(Math.random() * 3)];

console.log(string);
