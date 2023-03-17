var a = "";
var b = 7;
var c = null;
var d = 2;
var e;
alert( a || c && b || d ); // 2
alert( e || c && b != d ); // null
alert( e || c || b || e || d); // 7


var name = prompt("Введите ваше имя");
switch (name) {
case 'Денис':
alert( 'Добрый день, учитель' );
break;
case 'Алиса':
case 'Иван':
case 'Анастасия':
case 'Андрей':
alert( 'Привет, одногрупник' );
break;
default:
alert( 'Ты не из нашей песочницы!' );
}


var name = prompt("Введите ваше имя");
if  (name == 'Денис') {
    alert('Добрый день, учитель');
} else if (name == 'Алиса' || name == 'Иван' || name == 'Анастасия' || name == 'Андрей') {
    alert( 'Привет, одногрупник' );
} else if(name != 'Денис' || name != 'Иван' || name != 'Анастасия' || name != 'Андрей') {
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

