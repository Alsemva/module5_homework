let number = +prompt('Введите значение:');
if (typeof number == 'number' && number){
  if (number % 2 == 0) console.log('Число чётное');
  else console.log('Число нечётное');
}else{
  console.log('Упс, кажется, вы ошиблись');
}