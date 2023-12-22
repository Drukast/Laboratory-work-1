alert('Программа для нахождения остатка от целочисленного деления 2 чисел');
var dividend = Number(prompt("Введите делимое", ''));
var divisor = Number(prompt("Введите делитель", ''));
var remainder = dividend % divisor;
alert('Остаток от целочисленного деления чисел ' + dividend + ' и ' + divisor + ' равен ' + remainder);