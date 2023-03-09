let nome = 'luca';
if (nome == 'luca') {
  console.log('Ciao' + ` ${nome}`);
}

let stringa = '123';
console.log(typeof Number(stringa));
let c = 6;
console.log(String(c));

function calcolatrice(numero1, numero2, operatore) {
  switch (operatore) {
    case '+':
      console.log(numero1 + numero2);
      break;
    case '-':
      console.log(numero1 - numero2);
      break;
    case '/':
      console.log(numero1 / numero2);
      break;
    case '*':
      console.log(numero1 * numero2);
  }

  console.log();
}

calcolatrice(10, 10, '*');

function calcolatrice2(numero1, numero2, operatore) {
  if (operatore === '+') {
    return numero1 + numero2;
  }
  if (operatore === '-') {
    return numero1 - numero2;
  }
  if (operatore === '*') {
    return numero1 * numero2;
  }
  if (operatore === '/') {
    return numero1 / numero2;
  }
}
const result = calcolatrice2(15, 15, '*');

console.log(result);
//esempio filter
let words = ['ciao', 'sera', 'giorno', 'notte'];
const filtro = words.filter((word) => word.length > 4); //filtra ed elimina i minori di 4
console.log(filtro);

const users = [
  { name: 'gianluca', sex: 'm', age: 18 },
  { name: 'marco', sex: 'm', age: 22, premium: true },
  { name: 'luca', sex: 'm', age: 68 },
  { name: 'lorenza', sex: 'f', age: 29, premium: true },
  { name: 'chiara', sex: 'f', age: 29 },
  { name: 'pippo', sex: 'm', age: 15 },
  { name: 'francesco', sex: 'm', age: 80, premium: true },
  { name: 'federica', sex: 'f', age: 17 },
];

const bannedUsers = ['luca', 'chiara'];
const filtroo = users.filter((user) => !bannedUsers.includes(user.name));
console.log(filtroo, 'ciao');

const premiumUsers = users.filter((user) => user.premium === true);
console.log(premiumUsers);

const femmine = users.filter(
  (user) => user.sex === 'f' && user.premium === true
);
console.log(femmine);

//find esempio
let ciao = [18, 20, 3];
const find1 = ciao.find((x) => x < 19); // in questo caso sono 2 i valori minori di 19 ma ci manda soltato 18 a schermo perchè find accetta solo il primo parametro
console.log(find1);

const minorenni = users.filter(
  (user) => user.age < 18 && user.premium === true
);
console.log(minorenni);
if(user ){
  console.log
}
