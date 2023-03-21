var a = "";
var b = 7;
var c = null;
var d = 2;
var e;
alert( a || c && b || d ); // 2
alert( e || c && b && d ); // null
alert( e || c || b || e || d); // 7


var age = prompt("Введите ваш возраст");

switch (age) {
case '15':
alert( 'Вы еще слишком юны' );
break;
case '25':
alert( 'Вы в расцвете сил' );
break;
case '80':
case '90':
alert( 'Вы уже слишком стар для этого' );
break;
default:
alert( 'Мы не готовы принять вашу заявку' );
}


var name = prompt("Введите ваше имя");

if (name == 'Денис') {
    alert('Добрый день, учитель');
} else if (name == 'Алиса' || name == 'Иван' || name == 'Анастасия' || name == 'Андрей') {
    alert( 'Привет, одногрупник' );
} else if (name != 'Денис' || name == 'Алиса' || name != 'Иван' || name != 'Анастасия' || name != 'Андрей') {
    alert( 'Ты не из нашей песочницы!' );
}


var num = prompt('Enter number');
var degree = prompt('Enter number degree');
var sum = 1;
var i = 0;

while (i < degree) {
    sum = sum * num;
    i++;
}
alert('number: ' + num + ' to the degree: ' + degree + ' = ' + sum);

var num = prompt('Enter number');
var degree = prompt('Enter number degree');
var sum = 1;
var i = 0;

do {
    sum = sum * num;
    i++;
} while (i < degree);
alert('number: ' + num + ' to the degree: ' + degree + ' = ' + sum);

var num = prompt('Enter number');
var degree = prompt('Enter number degree');
var sum = 1;
var i = 0;

for (i = 0; i < degree; i++) {
    sum = sum * num; 
}
alert('number: ' + num + ' to the degree: ' + degree + ' = ' + sum)

