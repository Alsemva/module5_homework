// let x = true;
// let x = "";
let x = 1;
// let x;
if (typeof x == 'number' && x) console.log('Число');
else if (typeof x == 'string') console.log('Строка');
else if (typeof x == 'boolean') console.log('Логический тип');
else console.log('Тип x не определён');