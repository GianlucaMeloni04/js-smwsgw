const app = () => {
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
  const minorenni = users.filter((user) => user.age < 18);
  console.log(minorenni);
};

app();
