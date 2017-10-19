// variables
var y;

// Metodo para generar la tabla
y=prompt('GENERAR TABLA DE MULTIPLICAR DEL 1-100','');
y=parseInt(y);
while (100 > y) {
for (var x = 1; x <= 10; x++) {
	r=y*x;
	document.write(y+"x"+x+"="+ r + "<br>");
}
}if (100 < y) {
  alert("error");
}
